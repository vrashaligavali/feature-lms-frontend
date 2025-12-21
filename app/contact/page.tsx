'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get in <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            Have questions? We're here to help you succeed in your learning journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4 lg:space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-blue-500/50">
              <div className="flex items-start space-x-4">
                <div className="bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-xl p-3 border border-blue-500/30">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Email Us</h3>
                  <p className="text-sm text-gray-400">support@edulearn.com</p>
                  <p className="text-sm text-gray-400">info@edulearn.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-green-500/50">
              <div className="flex items-start space-x-4">
                <div className="bg-linear-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-3 border border-green-500/30">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Call Us</h3>
                  <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-purple-500/50">
              <div className="flex items-start space-x-4">
                <div className="bg-linear-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-3 border border-purple-500/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-sm text-gray-400">123 Education Street</p>
                  <p className="text-sm text-gray-400">Learning City, ST 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white border border-blue-500/50">
              <h3 className="text-base font-bold mb-2">Quick Response</h3>
              <p className="text-sm text-blue-100 mb-4">We typically respond within 24 hours</p>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700/50">
              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-green-500/20 to-emerald-600/20 rounded-full mb-6 border border-green-500/30">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                  <p className="text-base text-gray-300 mb-2">Thank you for reaching out to us.</p>
                  <p className="text-sm text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div>
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-sm text-gray-400">Fill out the form and our team will get back to you soon.</p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 text-base bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 text-base bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 text-base bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        className="w-full px-4 py-3 text-base bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all text-white placeholder-gray-500"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white text-base py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Frequently Asked Questions</h3>
            <p className="text-base text-gray-400">Quick answers to questions you may have</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
              <h4 className="text-base font-bold text-white mb-3">How do I enroll in a course?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Browse our course catalog, select your desired course, and click the "Enroll Now" button. You can start learning immediately after enrollment.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
              <h4 className="text-base font-bold text-white mb-3">Do you offer certificates?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Yes! Upon successful completion, you'll receive a certificate of completion that you can share on LinkedIn and your resume.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
              <h4 className="text-base font-bold text-white mb-3">Can I access courses on mobile?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Absolutely! Our platform is fully responsive and works seamlessly on all devices including smartphones and tablets.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
              <h4 className="text-base font-bold text-white mb-3">What if I need technical support?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Our support team is available 24/7. Use the contact form above or email us directly at support@edulearn.com.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">EduSphere</h3>
              </div>
              <p className="text-sm text-gray-400">Empowering learners worldwide with quality education and professional courses.</p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2024 EduSphere LMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}