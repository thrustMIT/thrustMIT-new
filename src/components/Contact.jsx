import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState('');

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    // Prefill message from URL query params (e.g., ?subject=...&message=...)
    try {
      const params = new URLSearchParams(window.location.search);
      const preMessage = params.get('message');
      const subject = params.get('subject');
      if (preMessage || subject) {
        setFormData(prev => ({
          ...prev,
          message: subject ? `${subject}\n\n${(preMessage || '')}` : (preMessage || '')
        }));
      }
    } catch (err) {
      // ignore if URLSearchParams unavailable
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all fields');
      return;
    }

    setSubmitStatus('loading');
    setStatusMessage('');

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQQVfRUxCG7QYDWYPEMxhhBv_TncoIPVTMSOKHHRkV9C3n50LudV1ruIa6p62W64ur/exec';
      
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      const urlWithParams = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      const response = await fetch(urlWithParams, {
        method: 'GET',
        redirect: 'follow'
      });

      const result = await response.text();

      try {
        const jsonResult = JSON.parse(result);
        
        if (jsonResult.result === 'success') {
          setSubmitStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully.');
          
          setFormData({
            name: '',
            email: '',
            message: ''
          });

          setTimeout(() => {
            setSubmitStatus('idle');
            setStatusMessage('');
          }, 5000);
        } else {
          throw new Error(jsonResult.message || 'Unknown error');
        }
      } catch (parseError) {
        if (response.ok) {
          setSubmitStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully.');
          
          setFormData({
            name: '',
            email: '',
            message: ''
          });

          setTimeout(() => {
            setSubmitStatus('idle');
            setStatusMessage('');
          }, 5000);
        } else {
          throw new Error('Failed to parse response');
        }
      }

    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
          Have questions or want to join? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors resize-none" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                disabled={submitStatus === 'loading'}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all transform shadow-lg flex items-center justify-center gap-2 ${
                  submitStatus === 'loading' 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-600/30 hover:shadow-green-600/50'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/30 hover:shadow-red-600/50'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-blue-600/30 hover:shadow-blue-600/50'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {submitStatus === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                {submitStatus === 'loading' ? 'Sending...' : 
                 submitStatus === 'success' ? 'Sent!' :
                 submitStatus === 'error' ? 'Failed' : 'Send Message'}
              </button>
              
              {/* Status message */}
              {statusMessage && (
                <div className={`text-sm mt-2 p-3 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-600/10 text-green-400 border border-green-600/20' 
                    : 'bg-red-600/10 text-red-400 border border-red-600/20'
                }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {statusMessage}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>info@thrustmit.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Location</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Bay No. 11, Techshila, Opp. Hostel Block 14, <br/>Manipal Institute of Technology, Manipal,<br /> Udupi, Karnataka - 576104, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Phone</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Team Leader: +91 9881032081<br/>Team Manager: +91 9920511275</p>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 p-6 bg-gradient-to-br from-blue-600/10 to-blue-500/10 border border-blue-600/20 rounded-xl">
              <h4 className="font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>Join Our Team</h4>
              <p className="text-sm text-gray-300 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                We're always looking for passionate students interested in rocketry and aerospace engineering.
              </p>
              <button type="button" onClick={() => window.dispatchEvent(new Event('showRecruitModal'))} className="text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors inline-block" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Learn More →
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;