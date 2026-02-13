// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Gabby",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be Mine? 💝",

    // ============================================
    // 🎬 THEME SELECTOR CONFIGURATION 🎬
    // ============================================
    // This controls the theme selection screen that appears first
    themeSelector: {
        question: "What's Been Your Vibe Recently?",  // Question to ask on the theme selection screen
        prehistoricBtn: "Jurassic",      // Jurassic Park theme button
        magicalBtn: "Middle-Earth"               // Lord of the Rings theme button
    },

    // ============================================
    // 🦖 PREHISTORIC THEME (Jurassic Park) 🦖
    // ============================================
    // CUSTOMIZE: Edit these values to adjust the Jurassic Park theme
    prehistoricTheme: {
        // Floating emojis for Prehistoric theme
        // ADD/CHANGE: Add dinosaur emojis or replace with image URLs
        floatingEmojis: {
            primary: ['🦖', '🦕', '🌿', '🦴', '⛰️'],   // Dinosaur & jungle emojis
            secondary: ['🥚', '🌴', '🏞️']                     // Eggs and palm trees
        },

        // CUSTOMIZE: Jurassic Park color scheme
        // Use earthy greens, jungle colors, and danger reds
        colors: {
            backgroundStart: "#1a472a",      // Dark jungle green
            backgroundEnd: "#37932b",        // Forest green
            buttonBackground: "#c41e3a",     // Danger red (like JP logo)
            buttonHover: "#ff4757",          // Lighter red on hover
            textColor: "#f5f5dc",            // Beige/bone color for text
            containerBg: "#ffd700",  // Dark green container
            accentColor: "#ffd700"           // Gold accent (amber/fossil color)
        },

        // CUSTOMIZE: Theme-specific messages
        messages: {
            title: "my Cenozoic Era Partner...",             // Can change to something dino-themed
            yesBtn: "Yes!",            // CUSTOMIZE: Theme-specific Yes text (Q1)
            noBtn: "Not Really.",                  // CUSTOMIZE: Theme-specific No text (Q1)
            secretAnswer: "RrrrrRaahh🦖",
            loveExtreme: "You'd distract the T. Rex for me!?! 🦖💚",
            loveHigh: "Answer the satellite phone...on speaker...for me..how brave! 🖁💚",
            loveNormal: "You'd check the perimeter fences with me?? 💚",
            celebrationTitle: "RrrrrRahhh! Not even someone saying the modern films are better than the originals can ruin this day! 🦖🌿💚",
            celebrationMessage: "I LOVE YOU A MILLION TIMES OVER! I hope you have a ROAR-some Valentine's Day! 🦖💚",
            celebrationEmojis: "🎁🦖🦕🌿🦴💚🥚"
        },

        // CUSTOMIZE: Background images for Jurassic Park theme
        // main: shown during questions, celebration: shown on final screen
        // If your image has text, try size: "contain" to avoid cropping.
        backgrounds: {
            main: "",
            celebration: ""
        },
        // CUSTOMIZE: How the background fits the screen
        // Use "contain" to avoid cutting off text, "cover" to fill screen
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        // CUSTOMIZE: Add a logo/icon for the theme
        // Example: logo: "path/to/jp-logo.png"
        logo: "",

        // CUSTOMIZE: Theme-specific music (optional)
        // Leave musicUrl empty to fall back to the global music setting
        music: {
            enabled: true,
            autoplay: true,
            musicUrl: "./audio/jurassic-theme.mp3",
            startText: "🎵 Play Music",
            stopText: "🔇 Stop Music",
            volume: 0.5
        }
    },

    // ============================================
    // 🧙 MAGICAL THEME (Lord of the Rings) 🧙
    // ============================================
    // CUSTOMIZE: Edit these values to adjust the Lord of the Rings theme
    magicalTheme: {
        // Floating emojis for Magical theme
        // ADD/CHANGE: Add fantasy emojis or replace with image URLs
        floatingEmojis: {
            primary: ['🧙‍♂️', '💍', '🗡️', '⚔️', '🏔️', '🌋'],  // Wizard, ring, swords, mountains
            secondary: ['🧝', '🌟', '🦄', '⚒️', '🐉', '❤️']                      // Elves and stars
        },

        // CUSTOMIZE: Lord of the Rings color scheme
        // Use mystical golds, deep blues, and elvish silvers
        colors: {
            backgroundStart: "#1a1a2e",      // Deep night blue
            backgroundEnd: "#16213e",        // Midnight blue
            buttonBackground: "#c9a227",     // Gold (like the One Ring)
            buttonHover: "#e6b800",          // Brighter gold on hover
            textColor: "#e8d5b7",            // Parchment/elvish text color
            containerBg: "rgba(30, 30, 50, 0.9)",  // Dark mystical container
            accentColor: "#c0c0c0"           // Silver accent (mithril color)
        },

        // CUSTOMIZE: Theme-specific messages
        messages: {
            title: "my hobbit love...",         // LOTR themed title
            yesBtn: "Yes!",     // CUSTOMIZE: Theme-specific Yes text (Q1)
            noBtn: "Not today...",           // CUSTOMIZE: Theme-specific No text (Q1)
            secretAnswer: "PRECIOUSSSSS💍",
            loveHigh: "You'd seriously cross Mordor for me?! 🧙‍♂️💍🌋",
            loveNormal: "Awww...you'd brave the Mines of Moria just for me??🗡️🐉⚒️",
            loveExtreme: "More than Samwise loves Frodo?!?🌟❤️",
            celebrationTitle: "You have my heart! And my axe! 🧙‍♂️⚔️💍✨",
            celebrationMessage: "I LOVE YOU TO THE SHIRE AND BACK! I hope you have a magical Valentine's Day! 🧙‍♂️💍✨",
            celebrationEmojis: "🎁💍🧙‍♂️⚔️🗡️✨🌟"
        },

        // CUSTOMIZE: Background images for LOTR theme
        // main: shown during questions, celebration: shown on final screen
        backgrounds: {
            main: "",
            celebration: ""
        },
        // CUSTOMIZE: How the background fits the screen
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        // CUSTOMIZE: Add a logo/icon for the theme
        // Example: logo: "path/to/lotr-logo.png"
        logo: "",

        // CUSTOMIZE: Theme-specific music (optional)
        // Leave musicUrl empty to fall back to the global music setting
        music: {
            enabled: true,
            autoplay: true,
            musicUrl: "./audio/lotr-hobbits.mp3",
            startText: "🎵 Play Music",
            stopText: "🔇 Stop Music",
            volume: 0.5
        }
    },

    // ============================================
    // 📝 SHARED QUESTIONS (Used by both themes)
    // ============================================
    // Questions and answers - these are shared but messages above override some text
    questions: {
        first: {
            text: "Do you LOVE me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Default - overridden by theme
        },
        second: {
            text: "How much do you LOVE me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Well, since you LOVE me SO much, will you be my Valentine? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Animation settings (shared by both themes)
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes elements to float up (10-20s recommended)
        floatDistance: "50px",          // How far elements move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    // CUSTOMIZE: You can add different music URLs for each theme in the theme objects above
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// ============================================
// 🎨 HOW TO ADD CUSTOM IMAGES/ICONS 🎨
// ============================================
// 
// 1. BACKGROUND IMAGES:
//    - Add your image to the project folder
//    - Set backgroundImage in the theme config:
//      backgroundImage: "url('./images/jurassic-bg.jpg')"
//
// 2. FLOATING IMAGES (instead of emojis):
//    - You can use CSS to add custom images
//    - See styles.css for .heart and .bear classes
//    - Add a new class like .dino or .ring with your image
//
// 3. LOGO/ICONS:
//    - Add logo path to the theme config
//    - The logo will appear in the header
//
// 4. CUSTOM FONTS:
//    - Add Google Font links in index.html
//    - Reference them in styles.css
// ============================================

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;

// Track selected theme globally
window.SELECTED_THEME = null; 