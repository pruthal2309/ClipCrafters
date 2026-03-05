import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { User, Mail, Loader2, Save, Shield, Bell, Palette, ChevronRight } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { staggerContainer, fadeUpVariant } from '../utils/animations';

const SETTING_SECTIONS = [
  {
    title: 'Security',
    icon: Shield,
    items: ['Change password', 'Two-factor authentication', 'Active sessions'],
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: ['Email alerts', 'Video ready alerts', 'Weekly digest'],
  },
  {
    title: 'Appearance',
    icon: Palette,
    items: ['Theme preference', 'Sidebar behavior', 'Language'],
  },
];

export default function Profile() {
  const { user } = useAuth();
  const { isDark, toggle } = useTheme();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });
  const [saving, setSaving] = useState(false);

  const save = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error('Name is required'); return; }
    setSaving(true);
    await new Promise(r => setTimeout(r, 900));
    toast.success('Profile updated!');
    setSaving(false);
  };

  const initials = (user?.name || 'U')
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <PageTransition>
      <div className="flex min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <Sidebar />

        <main className="flex-1 md:ml-[236px] p-6 lg:p-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Page title */}
              <motion.div variants={fadeUpVariant}>
                <h1 className="font-display font-bold text-2xl" style={{ color: 'var(--color-text)' }}>
                  Account Settings
                </h1>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Manage your profile, preferences, and account details
                </p>
              </motion.div>

              {/* Profile card */}
              <motion.div variants={fadeUpVariant} className="card p-6 sm:p-8">
                <div className="flex items-center gap-5 mb-8 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  {/* Avatar with initials */}
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-display font-bold flex-shrink-0"
                      style={{ background: 'var(--gradient-brand)' }}
                    >
                      {initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ background: '#10b981', borderColor: 'var(--color-bg)' }} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl" style={{ color: 'var(--color-text)' }}>
                      {user?.name || 'Creator'}
                    </h2>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{user?.email}</p>
                    <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-semibold section-label">
                      ✦ Pro Creator
                    </span>
                  </div>
                </div>

                {/* Edit form */}
                <h3 className="font-display font-semibold text-base mb-5" style={{ color: 'var(--color-text)' }}>
                  Personal Information
                </h3>
                <form onSubmit={save} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="prof-name" className="block text-xs font-semibold mb-1.5 uppercase tracking-widest gradient-text">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                        <input
                          id="prof-name"
                          type="text"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          autoComplete="name"
                          className="input-field"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="prof-email" className="block text-xs font-semibold mb-1.5 uppercase tracking-widest gradient-text">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                        <input
                          id="prof-email"
                          type="email"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          autoComplete="email"
                          className="input-field"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <motion.button
                      type="submit"
                      disabled={saving}
                      className="btn-primary px-7 py-3 text-sm flex items-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      {saving ? 'Saving…' : 'Save Changes'}
                    </motion.button>
                  </div>
                </form>
              </motion.div>

              {/* Quick theme toggle */}
              <motion.div variants={fadeUpVariant} className="card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(109,40,217,0.12)' }}>
                      <Palette className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>Theme</p>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        Currently using {isDark ? 'dark' : 'light'} mode
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggle}
                    className="px-5 py-2 rounded-xl text-sm font-semibold transition-all btn-ghost"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Switch to {isDark ? 'Light' : 'Dark'}
                  </motion.button>
                </div>
              </motion.div>

              {/* Settings sections */}
              {SETTING_SECTIONS.map((section) => (
                <motion.div key={section.title} variants={fadeUpVariant} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(109,40,217,0.1)' }}>
                      <section.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="font-display font-semibold text-base" style={{ color: 'var(--color-text)' }}>
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {section.items.map(item => (
                      <motion.button
                        key={item}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-left transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                        whileHover={{ background: 'rgba(109,40,217,0.07)', color: 'var(--color-text)' }}
                        onClick={() => toast.info('Coming soon!')}
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
