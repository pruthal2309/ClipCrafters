// Unsplash — all IDs verified working as of 2026
const BASE = 'https://images.unsplash.com';

export const unsplash = (id, w = 800, h = 600) =>
    `${BASE}/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const IMAGES = {
    // Hero / landing
    hero: '1536240338851-86b77e0d8b9d',        // dark tech cityscape
    ai: '1620912189539-a38903c49e88',           // AI / digital brain
    auth: '1526374965328-7f61d4dc18c5',         // cinematic code screen
    videoEditor: '1574717024453-354056f1c3e6',  // editing timeline

    // Features
    feature1: '1677756119517-756a188d2d94',     // robot / AI creation
    feature2: '1542744173-8e7e53415bb0',        // team collaboration
    feature3: '1610720104483-fce3e7fc0a88',     // microphone / voice

    // Project cards
    card1: '1611532736597-de2d4265fba3',        // tech creative
    card2: '1504639725590-34d0984388bd',        // film production
    card3: '1574375927938-2b66ca05fed8',        // code + creativity

    // Profile avatar placeholder
    profile: '1535713875002-d1d0cf377fde',      // professional portrait

    // Testimonials
    t1: '1500648767791-00dcc994a43e',           // creator 1
    t2: '1494790108377-be9c29b29330',           // creator 2
    t3: '1507003211169-0a1dd7228f2d',           // creator 3
};

export const projectImage = (i) => {
    const keys = ['card1', 'card2', 'card3', 'feature1', 'feature2'];
    return unsplash(IMAGES[keys[i % keys.length]], 640, 360);
};
