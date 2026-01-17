import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init('-5nRf2BoYkjRclNQe');
    };
    document.body.appendChild(script);

    // Prefill message from URL query params
    try {
      const params = new URLSearchParams(window.location.search);
      const preMessage = params.get('message');
      const subject = params.get('subject');
      if (preMessage || subject) {
        setForm(prev => ({
          ...prev,
          message: subject ? `${subject}\n\n${(preMessage || '')}` : (preMessage || '')
        }));
      }
    } catch (err) {
      // ignore if URLSearchParams unavailable
    }

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle');

    try {
      await window.emailjs.send(
        'service_3yfojsb',
        'template_uf082m7',
        {
          from_name: form.name,
          to_name: 'THRUST MIT',
          from_email: form.email,
          to_email: 'management@thrustmit.in',
          message: form.message
        },
        '-5nRf2BoYkjRclNQe'
      );

      setLoading(false);
      setSubmitStatus('success');
      setForm({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      setLoading(false);
      setSubmitStatus('error');
      console.log(error);
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
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
                  value={form.email}
                  onChange={handleChange}
                  required
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
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors resize-none" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all transform shadow-lg flex items-center justify-center gap-2 ${
                  loading 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-600/30 hover:shadow-green-600/50'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/30 hover:shadow-red-600/50'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-blue-600/30 hover:shadow-blue-600/50'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                {loading ? 'Sending...' : 
                 submitStatus === 'success' ? 'Message Sent!' :
                 submitStatus === 'error' ? 'Failed to Send' : 'Send Message'}
              </button>
              
              {/* Status message */}
              {submitStatus === 'success' && (
                <div className="text-sm mt-2 p-3 rounded-lg bg-green-600/10 text-green-400 border border-green-600/20" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-sm mt-2 p-3 rounded-lg bg-red-600/10 text-red-400 border border-red-600/20" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Something went wrong! Please try again.
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>management@thrustmit.in</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;