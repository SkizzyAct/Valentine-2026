// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Current theme settings (will be set when user selects a theme)
let currentTheme = null;

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors for both themes
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    
    // Validate prehistoric theme colors
    Object.entries(config.prehistoricTheme.colors).forEach(([key, value]) => {
        if (key !== 'containerBg' && key !== 'accentColor' && !isValidHex(value)) {
            warnings.push(`Invalid color for prehistoricTheme.${key}! Using default.`);
        }
    });

    // Validate magical theme colors
    Object.entries(config.magicalTheme.colors).forEach(([key, value]) => {
        if (key !== 'containerBg' && key !== 'accentColor' && !isValidHex(value)) {
            warnings.push(`Invalid color for magicalTheme.${key}! Using default.`);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// ============================================
// 🎬 THEME SELECTION FUNCTIONS 🎬
// ============================================

// Called when user clicks a theme button
function selectTheme(themeName) {
    // Store selected theme globally
    window.SELECTED_THEME = themeName;
    
    // Get the theme configuration
    if (themeName === 'prehistoric') {
        currentTheme = config.prehistoricTheme;
    } else if (themeName === 'magical') {
        currentTheme = config.magicalTheme;
    }
    
    // Apply the selected theme
    applySelectedTheme();
    
    // Hide theme selector, show main content
    document.getElementById('themeSelector').classList.add('hidden');
    document.getElementById('mainContainer').classList.remove('hidden');
    
    // Initialize the main content with theme-specific settings
    initializeContent();
    
    // Create floating elements for selected theme
    createFloatingElements();
    
    // Setup music player
    setupMusicPlayer();
}

// Apply the selected theme's visual settings
function applySelectedTheme() {
    const root = document.documentElement;
    const colors = currentTheme.colors;

    // Apply theme colors to CSS variables
    root.style.setProperty('--background-color-1', colors.backgroundStart);
    root.style.setProperty('--background-color-2', colors.backgroundEnd);
    root.style.setProperty('--button-color', colors.buttonBackground);
    root.style.setProperty('--button-hover', colors.buttonHover);
    root.style.setProperty('--text-color', colors.textColor);
    root.style.setProperty('--container-bg', colors.containerBg);
    root.style.setProperty('--accent-color', colors.accentColor);

    // Apply animation settings
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);

    // Apply background image if specified
    applyThemeBackground('main');

    // Add theme class to body for additional styling
    document.body.classList.remove('theme-prehistoric', 'theme-magical');
    document.body.classList.add(`theme-${window.SELECTED_THEME}`);
}

// Initialize content with theme-specific text
function initializeContent() {
    const messages = currentTheme.messages;
    
    // Set title with theme-specific suffix
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, ${messages.title}`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = messages.yesBtn || config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = messages.noBtn || config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = messages.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set theme selector text from config
    document.getElementById('themeSelectorQuestion').textContent = config.themeSelector.question;
    document.getElementById('prehistoricBtn').querySelector('.theme-text').textContent = config.themeSelector.prehistoricBtn;
    document.getElementById('magicalBtn').querySelector('.theme-text').textContent = config.themeSelector.magicalBtn;
});

// Create floating elements based on selected theme
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Clear existing floating elements
    container.innerHTML = '';
    
    // Get emojis from current theme
    const emojis = currentTheme.floatingEmojis;
    
    // Create primary floating elements (e.g., dinosaurs or wizards)
    emojis.primary.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'floating-emoji primary';
        div.innerHTML = emoji;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create secondary floating elements
    emojis.secondary.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'floating-emoji secondary';
        div.innerHTML = emoji;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function updateLoveMeterDisplay(value) {
    loveValue.textContent = value;

    const messages = (currentTheme && currentTheme.messages) ? currentTheme.messages : config.loveMessages;

    extraLove.classList.remove('hidden');
    if (value >= 5000) {
        extraLove.classList.add('super-love');
        extraLove.textContent = messages.loveExtreme || config.loveMessages.extreme;
    } else if (value > 1000) {
        extraLove.classList.remove('super-love');
        extraLove.textContent = messages.loveHigh || config.loveMessages.high;
    } else {
        extraLove.classList.remove('super-love');
        extraLove.textContent = messages.loveNormal || config.loveMessages.normal;
    }
}

function setInitialPosition() {
    const minValue = parseInt(loveMeter.min, 10);
    const initialValue = Number.isFinite(minValue) ? minValue : 0;
    loveMeter.value = initialValue;
    updateLoveMeterDisplay(initialValue);
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value, 10);
    updateLoveMeterDisplay(value);

    // Ensure slider width remains constant
    loveMeter.style.width = '100%';
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages from current theme
    const messages = currentTheme.messages;
    document.getElementById('celebrationTitle').textContent = messages.celebrationTitle;
    document.getElementById('celebrationMessage').textContent = messages.celebrationMessage;
    document.getElementById('celebrationEmojis').textContent = messages.celebrationEmojis;
    
    // Swap to celebration background (if provided)
    applyThemeBackground('celebration');

    // Create explosion effect with theme emojis
    createExplosion();
}

// Apply background image based on theme and state
function applyThemeBackground(state) {
    const backgrounds = currentTheme.backgrounds || {};
    const backgroundImage = (state === 'celebration') ? backgrounds.celebration : backgrounds.main;

    if (backgroundImage) {
        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = currentTheme.backgroundSize || 'cover';
        document.body.style.backgroundPosition = currentTheme.backgroundPosition || 'center';
        document.body.style.backgroundRepeat = currentTheme.backgroundRepeat || 'no-repeat';
    } else {
        // Fallback to gradient if no image is provided
        document.body.style.backgroundImage = '';
    }
}

// Create explosion animation with theme-specific emojis
function createExplosion() {
    const allEmojis = [...currentTheme.floatingEmojis.primary, ...currentTheme.floatingEmojis.secondary];
    
    for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        element.innerHTML = randomEmoji;
        element.className = 'floating-emoji primary';
        document.querySelector('.floating-elements').appendChild(element);
        setRandomPosition(element);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    const themeMusic = (currentTheme && currentTheme.music) ? currentTheme.music : {};
    const musicEnabled = (themeMusic.enabled !== undefined) ? themeMusic.enabled : config.music.enabled;
    const musicUrl = themeMusic.musicUrl || config.music.musicUrl;
    const startText = themeMusic.startText || config.music.startText;
    const stopText = themeMusic.stopText || config.music.stopText;
    const autoplay = (themeMusic.autoplay !== undefined) ? themeMusic.autoplay : config.music.autoplay;
    const volume = (themeMusic.volume !== undefined) ? themeMusic.volume : config.music.volume;

    // Only show controls if music is enabled in config
    if (!musicEnabled || !musicUrl) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = musicUrl;
    bgMusic.volume = volume || 0.5;
    bgMusic.load();
    musicToggle.textContent = startText;

    // Try autoplay if enabled
    if (autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = startText;
            });
            playPromise.then(() => {
                musicToggle.textContent = stopText;
            });
        } else if (!bgMusic.paused) {
            musicToggle.textContent = stopText;
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = startText;
        }
    });
} 