import React, { useState, useEffect, useRef } from 'react';
import { Search, Plus, X, Upload, Lock, Calendar, User, Clock, Image, Edit, Trash2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://lpmztexkqymllhssfwgz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwbXp0ZXhrcXltbGxoc3Nmd2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1OTgwNDQsImV4cCI6MjA3ODE3NDA0NH0.fgcj6ftOrbXkSGdaOrJjHbZacK2txMNajDSrapfNTrw';

const supabase = createClient(supabaseUrl, supabaseKey);

const ADMIN_PASSWORD = '123';

const Blog = ({ Header, Footer, onNavigateHome, headerProps }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingContentImage, setUploadingContentImage] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [passwordAction, setPasswordAction] = useState('add'); // 'add', 'edit', 'delete'
  
  const contentTextareaRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image_url: '',
    read_time: '5',
    created_at: new Date().toISOString().split('T')[0]
  });

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Fetch articles from Supabase
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setShowPasswordPrompt(false);
      
      if (passwordAction === 'add') {
        setShowAddModal(true);
      } else if (passwordAction === 'edit') {
        setShowEditModal(true);
      } else if (passwordAction === 'delete') {
        handleDeleteArticle();
      }
      
      setPassword('');
    } else {
      alert('Incorrect password!');
      setPassword('');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploadingContentImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `content-${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-content-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-content-images')
        .getPublicUrl(filePath);

      const textarea = contentTextareaRef.current;
      const cursorPosition = textarea.selectionStart;
      const textBefore = formData.content.substring(0, cursorPosition);
      const textAfter = formData.content.substring(cursorPosition);
      const imageMarkdown = `\n\n![Image](${publicUrl})\n\n`;
      
      setFormData({ 
        ...formData, 
        content: textBefore + imageMarkdown + textAfter 
      });

      alert('Image uploaded and inserted successfully!');
    } catch (error) {
      console.error('Error uploading content image:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingContentImage(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const articleData = {
        title: formData.title,
        author: formData.author,
        content: formData.content,
        image_url: formData.image_url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
        read_time: parseInt(formData.read_time),
        created_at: new Date(formData.created_at).toISOString()
      };

      const { error } = await supabase
        .from('articles')
        .insert([articleData]);

      if (error) throw error;

      alert('Article published successfully!');
      setShowAddModal(false);
      setAuthenticated(false);
      setFormData({
        title: '',
        author: '',
        content: '',
        image_url: '',
        read_time: '5',
        created_at: new Date().toISOString().split('T')[0]
      });
      fetchArticles();
    } catch (error) {
      console.error('Error adding article:', error);
      alert('Failed to publish article');
    }
  };

  const handleEditClick = (article, e) => {
    e.stopPropagation();
    setEditingArticle(article);
    setFormData({
      title: article.title,
      author: article.author,
      content: article.content,
      image_url: article.image_url,
      read_time: article.read_time.toString(),
      created_at: new Date(article.created_at).toISOString().split('T')[0]
    });
    setPasswordAction('edit');
    setShowPasswordPrompt(true);
  };

  const handleUpdateArticle = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const articleData = {
        title: formData.title,
        author: formData.author,
        content: formData.content,
        image_url: formData.image_url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
        read_time: parseInt(formData.read_time),
        created_at: new Date(formData.created_at).toISOString()
      };

      const { error } = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', editingArticle.id);

      if (error) throw error;

      alert('Article updated successfully!');
      setShowEditModal(false);
      setAuthenticated(false);
      setEditingArticle(null);
      setFormData({
        title: '',
        author: '',
        content: '',
        image_url: '',
        read_time: '5',
        created_at: new Date().toISOString().split('T')[0]
      });
      fetchArticles();
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Failed to update article');
    }
  };

  const handleDeleteClick = (article, e) => {
    e.stopPropagation();
    setArticleToDelete(article);
    setPasswordAction('delete');
    setShowPasswordPrompt(true);
  };

  const handleDeleteArticle = async () => {
    if (!articleToDelete) return;

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleToDelete.id);

      if (error) throw error;

      alert('Article deleted successfully!');
      setArticleToDelete(null);
      setAuthenticated(false);
      if (selectedArticle && selectedArticle.id === articleToDelete.id) {
        setSelectedArticle(null);
      }
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Failed to delete article');
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderContent = (content) => {
    const parts = content.split(/!\[([^\]]*)\]\(([^)]+)\)/g);
    const elements = [];
    
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        if (parts[i]) {
          elements.push(
            <p key={i} className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
              {parts[i]}
            </p>
          );
        }
      } else if (i % 3 === 2) {
        const altText = parts[i - 1] || 'Article image';
        const imageUrl = parts[i];
        elements.push(
          <div key={i} className="my-8">
            <img 
              src={imageUrl} 
              alt={altText}
              className="w-full rounded-2xl shadow-2xl shadow-blue-600/10"
            />
            {altText && altText !== 'Image' && (
              <p className="text-center text-gray-500 text-sm mt-3 italic" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                {altText}
              </p>
            )}
          </div>
        );
      }
    }
    
    return elements;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header {...headerProps} />

      <section className="pt-32 pb-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            thrustMIT <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
            Stories from the frontier of student rocketry and aerospace innovation
          </p>

          <div className="mb-8">
            <button
              onClick={() => {
                setPasswordAction('add');
                setShowPasswordPrompt(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold mx-auto shadow-lg shadow-blue-600/30"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
            >
              <Plus size={18} />
              Write Article
            </button>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
              <p className="text-gray-400 mt-4" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                Loading articles...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden hover:border-blue-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative h-56 bg-gray-800/50 overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Edit and Delete Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handleEditClick(article, e)}
                        className="w-9 h-9 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                        title="Edit article"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => handleDeleteClick(article, e)}
                        className="w-9 h-9 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                        title="Delete article"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      {article.content.substring(0, 150)}...
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(article.created_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.read_time} min read
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredArticles.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                No articles found
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => {
          setShowPasswordPrompt(false);
          setArticleToDelete(null);
          setEditingArticle(null);
        }}>
          <div className="relative max-w-md w-full bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                setShowPasswordPrompt(false);
                setArticleToDelete(null);
                setEditingArticle(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Authentication Required
              </h2>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                {passwordAction === 'delete' 
                  ? 'Enter admin password to delete this article'
                  : passwordAction === 'edit'
                  ? 'Enter admin password to edit this article'
                  : 'Enter admin password to write a new article'}
              </p>
            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Enter password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-4 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
            />

            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all duration-300 font-semibold"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Add Article Modal */}
      {showAddModal && authenticated && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full my-8 bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl p-8 shadow-2xl">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setAuthenticated(false);
                }}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Write a New Article
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter a compelling title..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Author Name *
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Read Time (min) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.read_time}
                      onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Publication Date *
                    </label>
                    <input
                      type="date"
                      value={formData.created_at}
                      onChange={(e) => setFormData({ ...formData, created_at: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Article Content *
                    </label>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      Tip: Use ![Alt text](url) format for images
                    </div>
                  </div>
                  <textarea
                    ref={contentTextareaRef}
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your article here..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                  />
                  
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleContentImageUpload}
                      className="hidden"
                      id="content-image-upload"
                    />
                    <label
                      htmlFor="content-image-upload"
                      className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400 cursor-pointer transition-colors"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                    >
                      {uploadingContentImage ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Image size={16} />
                          Insert Image
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    Cover Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center w-full bg-white/5 border border-white/10 rounded-xl px-4 py-8 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {uploadingImage ? (
                        <div className="flex items-center gap-2 text-blue-400">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400" />
                          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Uploading...</span>
                        </div>
                      ) : formData.image_url ? (
                        <div className="text-center">
                          <img src={formData.image_url} alt="Preview" className="max-h-32 mx-auto mb-2 rounded-lg" />
                          <span className="text-green-400 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>Image uploaded successfully</span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                          <span className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Click to upload cover image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all duration-300 font-semibold"
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
                >
                  Publish Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Article Modal */}
      {showEditModal && authenticated && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full my-8 bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl p-8 shadow-2xl">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setAuthenticated(false);
                  setEditingArticle(null);
                }}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Edit Article
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter a compelling title..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Author Name *
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Read Time (min) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.read_time}
                      onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Publication Date *
                    </label>
                    <input
                      type="date"
                      value={formData.created_at}
                      onChange={(e) => setFormData({ ...formData, created_at: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      Article Content *
                    </label>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      Tip: Use ![Alt text](url) format for images
                    </div>
                  </div>
                  <textarea
                    ref={contentTextareaRef}
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your article here..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                  />
                  
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleContentImageUpload}
                      className="hidden"
                      id="content-image-upload-edit"
                    />
                    <label
                      htmlFor="content-image-upload-edit"
                      className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400 cursor-pointer transition-colors"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                    >
                      {uploadingContentImage ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Image size={16} />
                          Insert Image
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    Cover Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload-edit"
                    />
                    <label
                      htmlFor="image-upload-edit"
                      className="flex items-center justify-center w-full bg-white/5 border border-white/10 rounded-xl px-4 py-8 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {uploadingImage ? (
                        <div className="flex items-center gap-2 text-blue-600">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400" />
                          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Uploading...</span>
                        </div>
                      ) : formData.image_url ? (
                        <div className="text-center">
                          <img src={formData.image_url} alt="Preview" className="max-h-32 mx-auto mb-2 rounded-lg" />
                          <span className="text-green-400 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>Image uploaded successfully</span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                          <span className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>Click to upload cover image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleUpdateArticle}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all duration-300 font-semibold"
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
                >
                  Update Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div 
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl shadow-2xl overflow-hidden my-8" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-6 flex justify-end gap-2 mr-6 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(null);
                    handleEditClick(selectedArticle, e);
                  }}
                  className="w-10 h-10 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  title="Edit article"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={(e) => {
                    handleDeleteClick(selectedArticle, e);
                  }}
                  className="w-10 h-10 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  title="Delete article"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative h-96 bg-gray-800/50 -mt-16">
                <img src={selectedArticle.image_url} alt={selectedArticle.title} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {selectedArticle.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-800">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User size={18} />
                    <span className="font-medium" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>{formatDate(selectedArticle.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={18} />
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>{selectedArticle.read_time} min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {renderContent(selectedArticle.content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;