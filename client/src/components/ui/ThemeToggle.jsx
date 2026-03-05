import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
    const { isDark, toggle } = useTheme();

    return (
        <motion.button
            onClick={toggle}
            className={`relative w-9 h-9 rounded-xl flex items-center justify-center glow-border transition-colors ${className}`}
            style={{ color: isDark ? '#a78bfa' : '#6d28d9' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.22 }}
                    >
                        <Sun className="w-4 h-4" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.22 }}
                    >
                        <Moon className="w-4 h-4" />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
