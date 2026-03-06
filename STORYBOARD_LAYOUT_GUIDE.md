# Storyboard Layout Guide - Visual Reference

## 🎬 Complete Scene Card Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  ┌───┐  Scene 1: Introduction                          [✓ IMG] [✓ AUD] [○ CLIP]    │
│  │ 1 │  Duration: ~15s                                                               │
│  └───┘                                                                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                       │
│  ┌──────────────────────────────────────┐  ┌────────────────────────────────────┐  │
│  │  LEFT COLUMN (60%)                   │  │  RIGHT COLUMN (40%)                │  │
│  │                                       │  │                                    │  │
│  │  ┌─────────────────────────────────┐ │  │  ┌──────────────────────────────┐ │  │
│  │  │ 📝 NARRATION TEXT          [Save]│ │  │  │ 🖼 Visual Preview           │ │  │
│  │  ├─────────────────────────────────┤ │  │  ├──────────────────────────────┤ │  │
│  │  │                                  │ │  │  │                              │ │  │
│  │  │  [Editable textarea]             │ │  │  │    [Generated Image]         │ │  │
│  │  │  Welcome to our video about...   │ │  │  │         or                   │ │  │
│  │  │                                  │ │  │  │    [Video Player]            │ │  │
│  │  └─────────────────────────────────┘ │  │  │                              │ │  │
│  │                                       │  │  └──────────────────────────────┘ │  │
│  │  ┌─────────────────────────────────┐ │  │                                    │  │
│  │  │ 🎨 VISUAL CONCEPT               │ │  │  ┌──────────────────────────────┐ │  │
│  │  ├─────────────────────────────────┤ │  │  │ 🎵 Audio Narration           │ │  │
│  │  │ Opening establishing shot        │ │  │  ├──────────────────────────────┤ │  │
│  │  │ Type: Photo                      │ │  │  │  [Audio Player Controls]     │ │  │
│  │  └─────────────────────────────────┘ │  │  │  Click play to hear          │ │  │
│  │                                       │  │  └──────────────────────────────┘ │  │
│  │  ┌─────────────────────────────────┐ │  │                                    │  │
│  │  │ ✨ AI IMAGE PROMPT         [Save]│ │  │  ┌──────────────────────────────┐ │  │
│  │  │              [Debug] [Analyze]   │ │  │  │ Scene Status                 │ │  │
│  │  ├─────────────────────────────────┤ │  │  ├──────────────────────────────┤ │  │
│  │  │                                  │ │  │  │ Image: ready                 │ │  │
│  │  │  [Editable prompt textarea]      │ │  │  │ Audio: ready                 │ │  │
│  │  │  Cinematic shot of...            │ │  │  │ Clip: not generated          │ │  │
│  │  │                                  │ │  │  └──────────────────────────────┘ │  │
│  │  └─────────────────────────────────┘ │  │                                    │  │
│  │                                       │  └────────────────────────────────────┘  │
│  │  Quick Select: [simple] [detailed]   │                                           │
│  │                                       │                                           │
│  │  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │  │ [✓ Audio Ready] [Style ▼] [🖼 Generate Image] [🎬 Render Scene Video]  │   │
│  │  │                                                                           │   │
│  │  │ [👁 Preview Clip]                                                        │   │
│  │  └─────────────────────────────────────────────────────────────────────────┘   │
│  │                                                                                  │
│  └──────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color-Coded Status Badges

```
┌──────────────────────────────────────────────────────────┐
│  Status Badge Examples                                   │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ ✓ IMG   │  │ ✓ AUD   │  │ ✓ CLIP  │  All Ready      │
│  └─────────┘  └─────────┘  └─────────┘                 │
│   Green         Green         Green                      │
│                                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ ⟳ IMG   │  │ ⟳ AUD   │  │ ⟳ CLIP  │  Generating     │
│  └─────────┘  └─────────┘  └─────────┘                 │
│   Blue          Blue          Blue                       │
│   (pulsing)     (pulsing)     (pulsing)                 │
│                                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ ○ IMG   │  │ ○ AUD   │  │ ○ CLIP  │  Not Generated  │
│  └─────────┘  └─────────┘  └─────────┘                 │
│   Gray          Gray          Gray                       │
│                                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ ✗ IMG   │  │ ✗ AUD   │  │ ✗ CLIP  │  Error          │
│  └─────────┘  └─────────┘  └─────────┘                 │
│   Red           Red           Red                        │
│                                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ ⚠ IMG   │  │ ⚠ AUD   │  │ ⚠ CLIP  │  Outdated       │
│  └─────────┘  └─────────┘  └─────────┘                 │
│   Yellow        Yellow        Yellow                     │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 🎯 Button Styles Reference

```
┌────────────────────────────────────────────────────────────────┐
│  Primary Actions (Gold Gradient)                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐          │
│  │ 🎵 Generate Audio    │  │ 🖼 Generate Image    │          │
│  └──────────────────────┘  └──────────────────────┘          │
│   Gold → Orange              Gold → Orange                     │
│                                                                 │
│  ┌──────────────────────┐                                     │
│  │ 🎬 Render Scene Video│                                     │
│  └──────────────────────┘                                     │
│   Gold → Purple                                                │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  Success State (Green)                                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐          │
│  │ ✓ Audio Ready        │  │ ✓ Clip Ready         │          │
│  └──────────────────────┘  └──────────────────────┘          │
│   Green with border          Green with border                 │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  Secondary Actions (Bordered)                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐          │
│  │ Save                 │  │ Debug                │          │
│  └──────────────────────┘  └──────────────────────┘          │
│   Gold background            Border only                       │
│                                                                 │
│  ┌──────────────────────┐                                     │
│  │ ✨ Analyze Visual    │                                     │
│  └──────────────────────┘                                     │
│   Blue with border                                             │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  Loading State                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐                                     │
│  │ ⟳ Generating...      │                                     │
│  └──────────────────────┘                                     │
│   Spinner + text                                               │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)
```
┌─────────────────────────────────────────────────────────┐
│  Scene Card                                             │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │                      │  │                      │   │
│  │   Left Column        │  │   Right Column       │   │
│  │   (60% width)        │  │   (40% width)        │   │
│  │                      │  │                      │   │
│  │   - Narration        │  │   - Image Preview    │   │
│  │   - Concept          │  │   - Audio Player     │   │
│  │   - Prompt           │  │   - Status Panel     │   │
│  │   - Buttons          │  │                      │   │
│  │                      │  │                      │   │
│  └──────────────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Tablet (768px - 1023px)
```
┌─────────────────────────────────────────────────────────┐
│  Scene Card                                             │
├─────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────┐ │
│  │                                                   │ │
│  │   Full Width                                      │ │
│  │                                                   │ │
│  │   - Narration                                     │ │
│  │   - Concept                                       │ │
│  │   - Prompt                                        │ │
│  │   - Buttons                                       │ │
│  │   - Image Preview                                 │ │
│  │   - Audio Player                                  │ │
│  │   - Status Panel                                  │ │
│  │                                                   │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌───────────────────────────────┐
│  Scene Card                   │
├───────────────────────────────┤
│  ┌─────────────────────────┐ │
│  │                         │ │
│  │   Full Width            │ │
│  │   Stacked Layout        │ │
│  │                         │ │
│  │   - Narration           │ │
│  │   - Concept             │ │
│  │   - Prompt              │ │
│  │   - Buttons (wrapped)   │ │
│  │   - Image Preview       │ │
│  │   - Audio Player        │ │
│  │   - Status Panel        │ │
│  │                         │ │
│  └─────────────────────────┘ │
└───────────────────────────────┘
```

---

## 🎬 Storyboard Header

```
┌─────────────────────────────────────────────────────────────────────────┐
│  🎬 Video Storyboard                                                    │
│  Create scenes, generate assets, and assemble your final video          │
│                                                                          │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐       │
│  │ 🪄 Generate      │ │ 🎞 Assemble      │ │ 🎬 Render Final  │       │
│  │    Storyboard    │ │    Clips         │ │    Movie         │       │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘       │
│   Purple-Pink          Blue Border         Gold-Orange                  │
│                                                                          │
│  ┌──────────────────┐                                                   │
│  │ ⚡ Fast Rebuild  │  (Shows when clips exist)                        │
│  └──────────────────┘                                                   │
│   Green Border                                                           │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎥 Final Video Card

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ┌───┐  Final Video Export Ready                                        │
│  │ ✓ │  Your video has been successfully rendered                       │
│  └───┘                                                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │                    [Video Player]                                  │ │
│  │                    with controls                                   │ │
│  │                                                                    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ┌──────────────────┐  ┌──────────────────┐                           │
│  │ ⬇ Download MP4   │  │ 🔄 Refresh Player│                           │
│  └──────────────────┘  └──────────────────┘                           │
│   Gold-Orange           Border                                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Empty State

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                              ┌─────┐                                    │
│                              │ 🎬  │                                    │
│                              └─────┘                                    │
│                                                                          │
│                          No Scenes Yet                                   │
│                                                                          │
│              Click "Generate Storyboard" to segment                      │
│                   your script into scenes                                │
│                                                                          │
│                    ┌──────────────────────┐                            │
│                    │ 🪄 Generate          │                            │
│                    │    Storyboard        │                            │
│                    └──────────────────────┘                            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Measurements

### Spacing
- Card padding: 1.5rem (24px)
- Section gaps: 1.5rem (24px)
- Element gaps: 0.75rem (12px)
- Button gaps: 0.5rem (8px)

### Borders
- Card borders: 2px
- Status badges: 1px
- Input borders: 1px
- Hover borders: 2px

### Border Radius
- Cards: 12px (rounded-xl)
- Buttons: 8px (rounded-lg)
- Badges: 6px (rounded-lg)
- Inputs: 8px (rounded-lg)

### Font Sizes
- Scene title: 1.125rem (18px)
- Section labels: 0.75rem (12px)
- Body text: 0.875rem (14px)
- Button text: 0.875rem (14px)
- Badge text: 0.75rem (12px)

### Colors (CSS Variables)
```css
--gold-primary: #c9a84c
--gold-light: #e8c97a
--bg-elevated: #1a1f2e
--bg-card: #141008
--border-default: rgba(201, 168, 76, 0.12)
--text-primary: #f5efe0
--text-secondary: #a89070
--text-muted: #6b5c44
```

---

## ✨ Animation Effects

### Pulse Animation (Generating State)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Spin Animation (Loading Spinner)
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Hover Transitions
```css
transition: all 0.3s ease;
```

---

## 📋 Component Hierarchy

```
RAGVideoGenerator
└── Storyboard Section
    ├── Header
    │   ├── Title + Subtitle
    │   └── Action Buttons
    ├── Status Bar (if loading)
    ├── Final Video Card (if ready)
    └── Scenes List
        └── SceneCard (for each scene)
            ├── Header
            │   ├── Scene Number + Title
            │   └── Status Badges
            ├── Grid Layout
            │   ├── Left Column (60%)
            │   │   ├── Narration Editor
            │   │   ├── Visual Concept
            │   │   ├── AI Prompt Editor
            │   │   └── Action Buttons
            │   └── Right Column (40%)
            │       ├── Image/Video Preview
            │       ├── Audio Player
            │       └── Status Panel
            └── Empty State (if no assets)
```

---

## 🎉 Summary

The enhanced storyboard layout provides:
- ✅ Clear visual hierarchy
- ✅ Intuitive user flow
- ✅ Professional appearance
- ✅ Responsive design
- ✅ Accessible components
- ✅ Smooth interactions
- ✅ Informative feedback
- ✅ Production-ready quality

**The layout is now optimized for the best user experience!** 🚀

---

**Last Updated:** March 7, 2026  
**Status:** Complete  
**Quality:** Production Ready
