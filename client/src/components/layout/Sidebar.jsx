import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, FolderOpen, Video, Film, BarChart2,
    Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight,
    Plus, Sun, Moon
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: FolderOpen, label: 'Projects', to: '/dashboard' },
    { icon: Video, label: 'Videos', to: '/dashboard' },
    { icon: Film, label: 'Scenes', to: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', to: '/dashboard' },
    { icon: Settings, label: 'Settings', to: '/profile' },
    { icon: HelpCircle, label: 'Help', to: '/dashboard' },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { isDark, toggle } = useTheme();

    const handleLogout = () => { logout(); navigate('/login'); };

    return (
        <motion.aside
            animate={{ width: collapsed ? 68 : 236 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 border-r transition-colors duration-300"
            style={{
                background: isDark ? 'rgba(9,9,15,0.97)' : 'rgba(255,255,255,0.98)',
                borderColor: 'var(--color-border)',
                backdropFilter: 'blur(20px)',
            }}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 h-16 border-b flex-shrink-0"
                style={{ borderColor: 'var(--color-border)' }}>
                <Link to="/" className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--gradient-brand)' }}>
                        <Film className="w-5 h-5 text-white" />
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="font-display font-bold text-base gradient-text whitespace-nowrap overflow-hidden"
                        >
                            ClipCrafters
                        </motion.span>
                    )}
                </Link>
            </div>

            {/* New Project shortcut */}
            {!collapsed && (
                <div className="px-3 pt-3">
                    <Link to="/projects/create">
                        <motion.div
                            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-white"
                            style={{ background: 'var(--gradient-brand)' }}
                            whileHover={{ opacity: 0.9, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Plus className="w-4 h-4" />
                            <span>New Project</span>
                        </motion.div>
                    </Link>
                </div>
            )}

            {/* Nav */}
            <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto mt-2">
                {NAV_ITEMS.map(({ icon: Icon, label, to }) => {
                    const active = pathname === to;
                    return (
                        <Link key={label} to={to}>
                            <motion.div
                                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 group"
                                style={{
                                    background: active ? 'rgba(109,40,217,0.15)' : 'transparent',
                                    color: active ? '#a78bfa' : 'var(--color-text-secondary)',
                                }}
                                whileHover={{
                                    background: active ? 'rgba(109,40,217,0.15)' : 'rgba(109,40,217,0.07)',
                                    color: active ? '#a78bfa' : 'var(--color-text)',
                                }}
                            >
                                {/* Active indicator bar */}
                                {active && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full"
                                        style={{ background: 'var(--gradient-brand)' }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="whitespace-nowrap"
                                    >
                                        {label}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom actions */}
            <div className="p-3 border-t flex-shrink-0 space-y-1" style={{ borderColor: 'var(--color-border)' }}>
                {/* Theme toggle */}
                <motion.button
                    onClick={toggle}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--color-text-secondary)' }}
                    whileHover={{ background: 'rgba(109,40,217,0.08)', color: 'var(--color-text)' }}
                    whileTap={{ scale: 0.97 }}
                >
                    <AnimatePresence mode="wait">
                        {isDark
                            ? <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Sun className="w-[18px] h-[18px]" />
                            </motion.span>
                            : <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Moon className="w-[18px] h-[18px]" />
                            </motion.span>
                        }
                    </AnimatePresence>
                    {!collapsed && <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
                </motion.button>

                {/* User profile */}
                {user && (
                    <Link to="/profile">
                        <motion.div
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer"
                            whileHover={{ background: 'rgba(109,40,217,0.08)' }}
                        >
                            <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                                style={{ background: 'var(--gradient-brand)' }}>
                                {user.name?.[0]?.toUpperCase() || 'U'}
                            </div>
                            {!collapsed && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold truncate">{user.name}</p>
                                    <p className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>{user.email}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </Link>
                )}

                {/* Logout */}
                <motion.button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/8 transition-colors"
                    whileHover={{ background: 'rgba(248,113,113,0.08)' }}
                    whileTap={{ scale: 0.97 }}
                >
                    <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
                    {!collapsed && <span>Logout</span>}
                </motion.button>

                {/* Collapse toggle */}
                <motion.button
                    onClick={() => setCollapsed(v => !v)}
                    className="w-full flex items-center justify-center px-3 py-2 rounded-xl text-sm transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}
                    whileHover={{ background: 'rgba(109,40,217,0.07)' }}
                >
                    {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </motion.button>
            </div>
        </motion.aside>
    );
}
