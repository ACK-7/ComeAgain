import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, Compass } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        navigate('/admin');
      } else {
        setError(res.error || 'Failed to authenticate.');
      }
    } catch {
      setError('An error occurred during authentication.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#070b05] text-white p-4 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Login Box */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#0f170e]/90 border border-[#24371b] p-8 shadow-2xl shadow-black/80 backdrop-blur-xl">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-tr from-brand-green to-[#234d1f] text-white shadow-lg shadow-brand-green/20 mb-4">
            <Compass className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif">
            Come Again Tours
          </h1>
          <p className="mt-1 text-xs font-medium text-brand-accent flex items-center justify-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Executive Administration Suite
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-300">
            {error}
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Staff Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="email"
                required
                placeholder="admin@comeagaintoursandtravels.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold py-2.5 text-sm transition-all shadow-md shadow-brand-green/20 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Return to Public Website */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            ← Return to Public Safari Website
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
