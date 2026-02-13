// ============================================
// 🎨 THEME APPLICATION SYSTEM 🎨
// ============================================
// This file handles the initial setup of CSS variables
// Theme is now applied dynamically when user selects a theme in script.js

// Apply default CSS variables on page load (before theme selection)
function applyDefaultTheme() {
    const config = window.VALENTINE_CONFIG;
    const root = document.documentElement;

    // Set animation settings (these are shared between themes)
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);
    
    // Set default neutral colors for theme selector screen
    // These will be overwritten when a theme is selected
    root.style.setProperty('--background-color-1', '#1a472a');
    root.style.setProperty('--background-color-2', '#16213e');
    root.style.setProperty('--button-color', '#3498db');
    root.style.setProperty('--button-hover', '#5dade2');
    root.style.setProperty('--text-color', '#ecf0f1');
    root.style.setProperty('--container-bg', 'rgba(255, 255, 255, 0.95)');
    root.style.setProperty('--accent-color', '#f39c12');
}

// Apply theme when the page loads
window.addEventListener('DOMContentLoaded', applyDefaultTheme);

// ============================================
// 🦖 HOW TO CUSTOMIZE THEMES 🦖
// ============================================
// 
// All theme customization is done in config.js:
//
// 1. PREHISTORIC THEME (Jurassic Park):
//    - Edit: config.prehistoricTheme.colors
//    - Edit: config.prehistoricTheme.floatingEmojis
//    - Edit: config.prehistoricTheme.messages
//    - Add background: config.prehistoricTheme.backgroundImage
//
// 2. MAGICAL THEME (Lord of the Rings):
//    - Edit: config.magicalTheme.colors
//    - Edit: config.magicalTheme.floatingEmojis
//    - Edit: config.magicalTheme.messages
//    - Add background: config.magicalTheme.backgroundImage
//
// 3. COLOR SUGGESTIONS:
//    - Jurassic Park: Jungle greens, amber, danger red
//    - LOTR: Gold, midnight blue, silver, parchment
//
// ============================================ 