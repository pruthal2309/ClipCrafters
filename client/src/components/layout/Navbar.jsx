import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Menu, X, Search, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { useScrollY } from '../../hooks/useScrollY';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_LINKS = [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Demo', href: '/#demo' },
];

export default function Navbar({ onSearch }) {
    const scrollY = useScrollY();
    const { isAuthenticated, user, logout } = useAuth();
    const { isDark } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [avatarOpen, setAvatarOpen] = useState(false);
    const navigate = useNavigate();
    const scrolled = scrollY > 55;

    const handleLogout = () => { logout(); navigate('/login'); setAvatarOpen(false); };

    const navBg = scrolled
        ? isDark ? 'rgba(9,9,15,0.90)' : 'rgba(255,255,255,0.92)'
        : 'transparent';

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    background: navBg,
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
                    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                    transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <motion.div
                                className="w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: 'var(--gradient-brand)' }}
                                whileHover={{ rotate: 8, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <Film className="w-5 h-5 text-white" />
                            </motion.div>
                            <span className="font-display font-bold text-lg tracking-tight gradient-text">ClipCrafters</span>
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-1">
                            {NAV_LINKS.map(l => (
                                <Link key={l.label} to={l.href}
                                    className="px-4 py-2 text-sm font-medium rounded-xl transition-all"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                    onMouseEnter={e => { e.target.style.color = 'var(--color-text)'; e.target.style.background = 'rgba(109,40,217,0.08)'; }}
                                    onMouseLeave={e => { e.target.style.color = 'var(--color-text-secondary)'; e.target.style.background = 'transparent'; }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right actions */}
                        <div className="flex items-center gap-2">
                            {onSearch && (
                                <motion.button
                                    onClick={onSearch}
                                    className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs border transition-all"
                                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'rgba(109,40,217,0.04)' }}
                                    whileHover={{ borderColor: 'var(--color-brand-light)', color: 'var(--color-text)' }}
                                >
                                    <Search className="w-3.5 h-3.5" />
                                    <span>Search</span>
                                    <kbd className="ml-1 text-xs opacity-50 font-mono">⌘K</kbd>
                                </motion.button>
                            )}

                            <ThemeToggle />

                            {isAuthenticated ? (
                                <div className="relative">
                                    <motion.button
                                        onClick={() => setAvatarOpen(v => !v)}
                                        className="flex items-center gap-2 rounded-xl px-2.5 py-1.5 border transition-colors"
                                        style={{ borderColor: 'var(--color-border)', background: 'rgba(109,40,217,0.06)' }}
                                        whileHover={{ borderColor: 'var(--color-brand-light)' }}
                                    >
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                            style={{ background: 'var(--gradient-brand)' }}>
                                            {user?.name?.[0]?.toUpperCase() || 'U'}
                                        </div>
                                        <span className="hidden sm:block text-xs font-semibold max-w-[80px] truncate"
                                            style={{ color: 'var(--color-text)' }}>{user?.name}</span>
                                        <ChevronDown className="w-3 h-3" style={{ color: 'var(--color-text-muted)' }} />
                                    </motion.button>

                                    <AnimatePresence>
                                        {avatarOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                transition={{ duration: 0.18 }}
                                                className="absolute right-0 top-full mt-2 w-48 rounded-xl border overflow-hidden py-1"
                                                style={{
                                                    background: isDark ? 'rgba(14,14,26,0.97)' : 'rgba(255,255,255,0.98)',
                                                    borderColor: 'var(--color-border)',
                                                    boxShadow: 'var(--shadow-glow)',
                                                    backdropFilter: 'blur(20px)',
                                                }}
                                                onClick={() => setAvatarOpen(false)}
                                            >
                                                {[
                                                    { icon: User, label: 'Profile', to: '/profile' },
                                                    { icon: Settings, label: 'Dashboard', to: '/dashboard' },
                                                ].map(({ icon: Icon, label, to }) => (
                                                    <Link key={label} to={to}
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                                                        style={{ color: 'var(--color-text)' }}
                                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(109,40,217,0.08)'}
                                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                                    >
                                                        <Icon className="w-4 h-4 text-purple-400" />
                                                        {label}
                                                    </Link>
                                                ))}
                                                <div className="border-t mt-1 pt-1" style={{ borderColor: 'var(--color-border)' }}>
                                                    <button onClick={handleLogout}
                                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 transition-colors"
                                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,0.08)'}
                                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        Logout
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="hidden sm:flex items-center gap-2">
                                    <Link to="/login"
                                        className="px-4 py-2 text-sm font-medium rounded-xl transition-all"
                                        style={{ color: 'var(--color-text)' }}
                                        onMouseEnter={e => e.target.style.background = 'rgba(109,40,217,0.08)'}
                                        onMouseLeave={e => e.target.style.background = 'transparent'}
                                    >
                                        Login
                                    </Link>
                                    <Link to="/register">
                                        <motion.span
                                            className="btn-primary px-5 py-2.5 text-sm inline-block"
                                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                        >
                                            Get Started
                                        </motion.span>
                                    </Link>
                                </div>
                            )}

                            {/* Mobile hamburger */}
                            <motion.button
                                onClick={() => setMobileOpen(v => !v)}
                                className="md:hidden p-2 rounded-xl"
                                style={{ color: 'var(--color-text)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {mobileOpen
                                        ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}><X className="w-5 h-5" /></motion.span>
                                        : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}><Menu className="w-5 h-5" /></motion.span>}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="fixed inset-0 z-40 pt-16 md:hidden"
                        style={{
                            background: isDark ? 'rgba(9,9,15,0.97)' : 'rgba(255,255,255,0.97)',
                            backdropFilter: 'blur(20px)',
                        }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-5 p-8">
                            {NAV_LINKS.map(l => (
                                <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-display font-bold gradient-text">{l.label}</Link>
                            ))}
                            <div className="flex gap-3 mt-6">
                                {isAuthenticated ? (
                                    <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="btn-ghost px-6 py-3 text-sm">Logout</button>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-ghost px-6 py-3 text-sm">Login</Link>
                                        <Link to="/register" onClick={() => setMobileOpen(false)} className="btn-primary px-6 py-3 text-sm">Get Started</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
