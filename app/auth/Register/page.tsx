'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Briefcase } from 'lucide-react';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorFullName, setErrorFullName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength = strength + 1;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength = strength + 1;
    if (pass.match(/[0-9]/)) strength = strength + 1;
    if (pass.match(/[^a-zA-Z0-9]/)) strength = strength + 1;
    setPasswordStrength(strength);
  };

  const validate = () => {
    let isValid = true;
    
    if (!fullName.trim()) {
      setErrorFullName('Full name is required');
      isValid = false;
    } else if (fullName.length < 3) {
      setErrorFullName('Name must be at least 3 characters');
      isValid = false;
    } else {
      setErrorFullName('');
    }
    
    if (!email.trim()) {
      setErrorEmail('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Email is invalid');
      isValid = false;
    } else {
      setErrorEmail('');
    }
    
    if (!password) {
      setErrorPassword('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters');
      isValid = false;
    } else {
      setErrorPassword('');
    }
    
    if (!confirmPassword) {
      setErrorConfirmPassword('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword('Passwords do not match');
      isValid = false;
    } else {
      setErrorConfirmPassword('');
    }
    
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        window.location.href = '/auth/Login';
      }, 1500);
    }, 1500);
  };

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/auth/Login';
  };

  const getStrengthColor = () => {
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    if (passwordStrength === 4) return 'bg-green-500';
    return 'bg-gray-700';
  };

  const getStrengthText = () => {
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    if (passwordStrength === 4) return 'Strong';
    return '';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4 py-16 pt-24">
      <div className="w-full max-w-sm">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 p-5 relative overflow-hidden">
          
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-xl font-bold text-white mb-0.5">
                Create Account
              </h1>
              <p className="text-gray-400 text-xs">Join our learning community</p>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-2.5 p-2 bg-green-500/20 border border-green-400/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center text-green-300">
                  <svg className="w-3.5 h-3.5 mr-1.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium text-xs">Account created successfully!</span>
                </div>
              </div>
            )}

            <div className="space-y-2.5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errorFullName) setErrorFullName('');
                    }}
                    className={`w-full pl-9 pr-3 py-1.5 bg-gray-800/50 border backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-white placeholder-gray-500 text-sm ${
                      errorFullName ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errorFullName && (
                  <p className="mt-0.5 text-xs text-red-400">{errorFullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorEmail) setErrorEmail('');
                    }}
                    className={`w-full pl-9 pr-3 py-1.5 bg-gray-800/50 border backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-white placeholder-gray-500 text-sm ${
                      errorEmail ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errorEmail && (
                  <p className="mt-0.5 text-xs text-red-400">{errorEmail}</p>
                )}
              </div>

              {/* Password & Confirm Password - Side by Side */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Password */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        const val = e.target.value;
                        setPassword(val);
                        calculatePasswordStrength(val);
                        if (errorPassword) setErrorPassword('');
                      }}
                      className={`w-full pl-9 pr-8 py-1.5 bg-gray-800/50 border backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-white placeholder-gray-500 text-sm ${
                        errorPassword ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {errorPassword && (
                    <p className="mt-0.5 text-xs text-red-400">{errorPassword}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Confirm <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (errorConfirmPassword) setErrorConfirmPassword('');
                      }}
                      className={`w-full pl-9 pr-8 py-1.5 bg-gray-800/50 border backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-white placeholder-gray-500 text-sm ${
                        errorConfirmPassword ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition"
                    >
                      {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {errorConfirmPassword && (
                    <p className="mt-0.5 text-xs text-red-400">{errorConfirmPassword}</p>
                  )}
                </div>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="flex gap-1 -mt-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-0.5 flex-1 rounded-full transition-all ${
                        level <= passwordStrength ? getStrengthColor() : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                  {passwordStrength > 0 && (
                    <span className="text-xs text-gray-400 ml-1">{getStrengthText()}</span>
                  )}
                </div>
              )}

              {/* Role Selection */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  I am a <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none z-10" />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-9 pr-8 py-1.5 bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none cursor-pointer text-white text-sm"
                  >
                    <option value="student" className="bg-gray-900">Student</option>
                    <option value="instructor" className="bg-gray-900">Instructor</option>
                    <option value="admin" className="bg-gray-900">Administrator</option>
                  </select>
                  <svg className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-1.5 px-6 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all text-sm ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>

            {/* Sign In Link */}
            <div className="mt-3 text-center">
              <p className="text-gray-400 text-xs">
                Already have an account?{' '}
                <button
                  onClick={handleSignInClick}
                  className="text-purple-400 font-semibold hover:text-purple-300 transition"
                >
                  Sign In
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-900 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-2">
                <button type="button" className="flex justify-center items-center py-1.5 bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-lg hover:bg-gray-800 hover:border-purple-500 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                <button type="button" className="flex justify-center items-center py-1.5 bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-lg hover:bg-gray-800 hover:border-purple-500 transition">
                  <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button type="button" className="flex justify-center items-center py-1.5 bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-lg hover:bg-gray-800 hover:border-purple-500 transition">
                  <svg className="w-4 h-4" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}