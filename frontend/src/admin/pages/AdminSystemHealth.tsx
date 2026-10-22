import React, { useState, useEffect } from 'react';
import {
  Activity,
  Server,
  RefreshCw,
  CheckCircle2,
  Send,
  Zap,
} from 'lucide-react';
import { adminApi } from '../services/adminApi';
import type { SystemHealthCheckResult } from '../services/adminApi';

export const AdminSystemHealth: React.FC = () => {
  const [health, setHealth] = useState<SystemHealthCheckResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [telegramStatus, setTelegramStatus] = useState<string | null>(null);
  const [isTestingTelegram, setIsTestingTelegram] = useState(false);

  useEffect(() => {
    runCheck();
  }, []);

  const runCheck = async () => {
    setIsChecking(true);
    try { setHealth(await adminApi.runHealthCheck()); }
    catch { setHealth(null); }
    finally { setIsChecking(false); }
  };
  const handleTestTelegram = async () => {
    setIsTestingTelegram(true); setTelegramStatus(null);
    try { await adminApi.testTelegram(); setTelegramStatus('Telegram accepted the test alert.'); }
    catch { setTelegramStatus('Test failed. Check the error above and server configuration.'); }
    finally { setIsTestingTelegram(false); }
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Activity className="h-6 w-6 text-brand-green" />
            System Health & cPanel Diagnostics
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Real-time server status, API connectivity, Telegram push alerts, and cPanel deployment verification.
          </p>
        </div>

        <button
          onClick={runCheck}
          disabled={isChecking}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
          <span>{isChecking ? 'Pinging Services...' : 'Re-test Connectivity'}</span>
        </button>
      </div>

      {/* Main Connectivity Status Box */}
      <div className="rounded-3xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#213318]">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                health?.apiOnline
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                  : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
              }`}
            >
              <Server className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {health?.apiOnline ? 'Backend API Online & Synchronized' : 'Connection unavailable'}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider border ${
                    health?.apiOnline
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  }`}
                >
                  {health?.environment === 'local' ? 'Local Development' : 'Live cPanel'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">{health?.message}</p>
            </div>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Latency</p>
            <p className="text-2xl font-bold font-mono text-brand-accent">
              {health ? `${health.latencyMs}ms` : '--'}
            </p>
          </div>
        </div>

        {/* Endpoints Diagnostics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-[#172314] border border-[#273d1f] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-300">Base API Endpoint</span>
              <span className="text-[10px] text-brand-green font-mono">VITE_API_URL</span>
            </div>
            <p className="mt-2 text-xs font-mono text-zinc-300 break-all bg-[#0e170c] p-2 rounded-lg border border-[#1f3017]">
              {adminApi.getBaseUrl()}
            </p>
          </div>

          <div className="rounded-2xl bg-[#172314] border border-[#273d1f] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-300">Database connectivity</span>
              <span
                className={`text-[10px] font-bold ${
                  health?.newsApiStatus === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {health?.newsApiStatus.toUpperCase()}
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-zinc-300 truncate bg-[#0e170c] p-2 rounded-lg border border-[#1f3017]">
              /api/admin/health
            </p>
          </div>

          <div className="rounded-2xl bg-[#172314] border border-[#273d1f] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-300">Storage access</span>
              <span
                className={`text-[10px] font-bold ${
                  health?.contactApiStatus === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {health?.contactApiStatus.toUpperCase()}
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-zinc-300 truncate bg-[#0e170c] p-2 rounded-lg border border-[#1f3017]">
              /api/admin/health
            </p>
          </div>
        </div>
      </div>

      {/* Push Notifications & Telegram Alert Diagnostics */}
      <div className="rounded-3xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Send className="h-5 w-5 text-blue-400" />
            <h3 className="text-base font-bold text-white font-serif">
              Instant Telegram Safari Inquiries Push Alert
            </h3>
          </div>

          <button
            onClick={handleTestTelegram}
            disabled={isTestingTelegram}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-50"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>{isTestingTelegram ? 'Dispatching...' : 'Send Test Alert'}</span>
          </button>
        </div>

        <p className="text-xs text-zinc-400">
          When a traveler submits a safari inquiry on the website, Come Again&apos;s Laravel backend dispatches an instant push notification to your staff Telegram channel and emails the office.
        </p>

        {telegramStatus && (
          <div className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs text-emerald-400 animate-fadeIn flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{telegramStatus}</span>
          </div>
        )}
      </div>

      <p className="text-sm text-zinc-300">Deployment instructions are included in CPANEL_DEPLOYMENT.md. Run setup commands through cPanel Terminal or SSH. Mail and Telegram configuration indicators do not confirm delivery.</p>
    </div>
  );
};
export default AdminSystemHealth;
