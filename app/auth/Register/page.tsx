'use client';

import { useState } from 'react';
import { Eye, EyeOff, GraduationCap, Mail, Lock, User, Briefcase } from 'lucide-react';

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
      
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setRole('student');
      setPasswordStrength(0);
      setErrorFullName('');
      setErrorEmail('');
      setErrorPassword('');
      setErrorConfirmPassword('');
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const getStrengthColor = () => {
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    if (passwordStrength === 4) return 'bg-green-500';
    return 'bg-gray-300';
  };

  const getStrengthText = () => {
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    if (passwordStrength === 4) return 'Strong';
    return '';
  };

  return (
    <div className="min-h-screen bg--to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">Join thousands of learners worldwide</p>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center text-green-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="font-semibold">Account created successfully!</span>
              </div>
            </div>
          )}

          <div className="space-y-5">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errorFullName) setErrorFullName('');
                  }}
                  className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                    errorFullName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="John Doe"
                />
              </div>
              {errorFullName && (
                <p className="mt-1.5 text-sm text-red-600">{errorFullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorEmail) setErrorEmail('');
                  }}
                  className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                    errorEmail ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="john.doe@example.com"
                />
              </div>
              {errorEmail && (
                <p className="mt-1.5 text-sm text-red-600">{errorEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPassword(val);
                    calculatePasswordStrength(val);
                    if (errorPassword) setErrorPassword('');
                  }}
                  className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                    errorPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          level <= passwordStrength ? getStrengthColor() : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                  {passwordStrength > 0 && (
                    <p className="text-xs text-gray-600">{getStrengthText()}</p>
                  )}
                </div>
              )}
              
              {errorPassword && (
                <p className="mt-1.5 text-sm text-red-600">{errorPassword}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errorConfirmPassword) setErrorConfirmPassword('');
                  }}
                  className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                    errorConfirmPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errorConfirmPassword && (
                <p className="mt-1.5 text-sm text-red-600">{errorConfirmPassword}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                I am a
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none cursor-pointer bg-white"
                >
                  <option value="student">Student - I want to learn</option>
                  <option value="instructor">Instructor - I want to teach</option>
                  <option value="admin">Administrator - I manage the platform</option>
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-4 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-bold transition">
                Sign In
              </a>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition">
                <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}