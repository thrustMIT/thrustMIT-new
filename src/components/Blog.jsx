import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Upload, Lock, Calendar, User, Clock } from 'lucide-react';
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
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image_url: '',
    read_time: '5'
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
      setShowAddModal(true);
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
        read_time: parseInt(formData.read_time)
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
        read_time: '5'
      });
      fetchArticles();
    } catch (error) {
      console.error('Error adding article:', error);
      alert('Failed to publish article');
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header {...headerProps} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-black relative overflow-hidden">
        {/* Background Effects */}
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

          {/* Write Button */}
          <div className="mb-8">
            <button
              onClick={() => setShowPasswordPrompt(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold mx-auto shadow-lg shadow-blue-600/30"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
            >
              <Plus size={18} />
              Write Article
            </button>
          </div>

          {/* Search Bar */}
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

      {/* Articles Grid */}
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
                  {/* Image */}
                  <div className="relative h-56 bg-gray-800/50 overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                      {article.content.substring(0, 150)}...
                    </p>

                    {/* Meta */}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setShowPasswordPrompt(false)}>
          <div className="relative max-w-md w-full bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPasswordPrompt(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Authentication Required
              </h2>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                Enter the admin password to write a new article
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
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
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
              {/* Title */}
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

              {/* Author and Read Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Read Time (minutes) *
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
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  Article Content *
                </label>
                <textarea
                  rows={12}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your article here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
                />
              </div>

              {/* Image Upload */}
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

              {/* Submit Button */}
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
      )}

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedArticle(null)}>
          <div className="relative max-w-4xl w-full my-8 bg-gradient-to-br from-gray-900 to-black border border-blue-600/30 rounded-3xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header Image */}
            <div className="relative h-96 bg-gray-800/50">
              <img src={selectedArticle.image_url} alt={selectedArticle.title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {selectedArticle.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-800">
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

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                  {selectedArticle.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Blog;