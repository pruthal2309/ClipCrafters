// Centralized Framer Motion variants

// Page transition
export const pageVariant = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

// Fade up (used for individual elements)
export const fadeUpVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

// Stagger container
export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// Fast stagger (for lists)
export const fastStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
};

// Scale in
export const scaleVariant = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

// Modal backdrop
export const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
};

// Modal panel
export const modalVariant = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 28 } },
    exit: { opacity: 0, scale: 0.94, y: 12, transition: { duration: 0.2 } },
};

// Command palette — slides from top
export const commandVariant = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 28 } },
    exit: { opacity: 0, scale: 0.95, y: -16, transition: { duration: 0.18 } },
};

// Slide in from left (for auth split screen)
export const slideInLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Slide in from right
export const slideInRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Float (for hero decorative elements)
export const floatVariant = (delay = 0) => ({
    animate: {
        y: [0, -14, 0],
        rotate: [-2, 2, -2],
        transition: {
            duration: 5 + delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
        },
    },
});

// Card hover (3D tilt handled in component, this is for hover lift)
export const cardHoverVariant = {
    rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' },
    hover: { y: -8, boxShadow: '0 20px 60px rgba(109,40,217,0.25)', transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

// Slide up list item
export const listItemVariant = {
    hidden: { opacity: 0, x: -14 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};
