function waitForElement(els, func, timeout = 100) {
  const queries = els.map((el) => document.querySelector(el));
  if (queries.every((a) => a)) {
    func(queries);
  } else if (timeout > 0) {
    setTimeout(waitForElement, 300, els, func, --timeout);
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const STORAGE_KEY = 'customnight-bg-url';
const SETTINGS_KEY = 'customnight-bg-settings';
const ACCENT_KEY = 'customnight-accent-colors';

const DEFAULT_ACCENT = {
  'main-elevated': '#152238',
  'card': '#152238',
  'sidebar': '#142b44',
  'highlight-elevated': '#152238',
  'notification': '#4687d6',
};

function escapeForCssUrl(url) {
  return url.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\)/g, '\\)');
}

function getCustomBackgroundUrl() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function setCustomBackgroundUrl(url) {
  try {
    if (url) {
      localStorage.setItem(STORAGE_KEY, url);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to save custom background:', e);
  }
}

function getBackgroundSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    return saved ? JSON.parse(saved) : { size: 100, x: 50, y: 50 };
  } catch (e) {
    return { size: 100, x: 50, y: 50 };
  }
}

function setBackgroundSettings(size, x, y) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ size, x, y }));
  } catch (e) {
    console.error('Failed to save background settings:', e);
  }
}

function clearBackgroundSettings() {
  try {
    localStorage.removeItem(SETTINGS_KEY);
  } catch (e) {
    console.error('Failed to clear background settings:', e);
  }
}

function getAccentColors() {
  try {
    const saved = localStorage.getItem(ACCENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    return null;
  }
}

function setAccentColors(colors) {
  try {
    localStorage.setItem(ACCENT_KEY, JSON.stringify(colors));
  } catch (e) {
    console.error('Failed to save accent colors:', e);
  }
}

function clearAccentColors() {
  try {
    localStorage.removeItem(ACCENT_KEY);
  } catch (e) {
    console.error('Failed to clear accent colors:', e);
  }
}

function applyAccentColors(colors) {
  if (!colors) return;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(colors)) {
    const hex = value.replace('#', '');
    root.style.setProperty(`--spice-${key}`, `#${hex}`);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    root.style.setProperty(`--spice-rgb-${key}`, `${r}, ${g}, ${b}`);
  }
}

function customBackgroundInit() {
  const maxAttempts = 30;
  let attempts = 0;
  
  function init() {
    if (!Spicetify || !Spicetify.Topbar || !Spicetify.Topbar.Button) {
      attempts++;
      if (attempts >= maxAttempts) {
        console.error('[CustomNight] customBackgroundInit: Spicetify.Topbar.Button not available after 30 attempts');
        Spicetify?.showNotification?.('[CustomNight] Failed to initialize: Spicetify.Topbar.Button API unavailable', true);
        return;
      }
      setTimeout(init, 1000);
      return;
    }
    
    const icon = `<svg data-encore-id="icon" role="img" aria-hidden="true" class="e-10180-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>`;

    new Spicetify.Topbar.Button('Custom Background', icon, () => {
      const currentBg = getCustomBackgroundUrl();
      const escapedBg = currentBg ? escapeForCssUrl(currentBg) : '';
      const savedSettings = getBackgroundSettings();
      
      const content = document.createElement('div');
      content.style.cssText = 'display:flex;flex-direction:column;gap:12px;padding:10px;min-width:350px;font-family:sans-serif;';
      content.innerHTML = `
        <div style="font-size:16px;font-weight:bold;color:#fff;margin-bottom:8px;">Custom Background</div>
        <input type="text" id="customnight-url-input" placeholder="Enter image URL..." 
          style="width:100%;padding:10px;border:1px solid #444;border-radius:4px;background:#222;color:#fff;font-size:13px;box-sizing:border-box;" />
        <div style="display:flex;gap:8px;">
          <button id="customnight-apply" style="flex:1;padding:10px;background:#1db954;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Apply</button>
          <button id="customnight-reset" style="flex:1;padding:10px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Reset</button>
        </div>
        <div style="text-align:center;color:#888;font-size:12px;margin:4px 0;">or upload from computer</div>
        <input type="file" id="customnight-file-input" accept="image/*" style="color:#fff;font-size:12px;" />
        <div style="font-size:11px;color:#666;margin-top:4px;">Recommended: 1920x1080 or 2560x1440</div>
        <div style="font-size:11px;color:#666;margin-bottom:4px;">Scroll to zoom • drag to move</div>
        <div id="customnight-preview" style="width:100%;height:200px;border-radius:4px;background-size:100%;background-position:center;background-repeat:no-repeat;background-color:#000;border:1px solid #333;overflow:hidden;cursor:grab;position:relative;"></div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:11px;color:#666;">Zoom:</span>
          <input type="range" id="customnight-size" min="30" max="300" value="100" style="flex:1;" />
          <span id="customnight-size-val" style="font-size:11px;color:#888;min-width:40px;">100%</span>
        </div>
        <div id="customnight-current" style="font-size:11px;color:#888;word-break:break-all;max-height:40px;overflow:hidden;"></div>
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid #333;">
          <div style="font-size:13px;font-weight:bold;color:#fff;margin-bottom:6px;">Accent Colors</div>
          <div style="font-size:11px;color:#888;margin-bottom:8px;">Customize the accent colors (sidebar, cards, highlights)</div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="flex:1;font-size:12px;color:#ccc;">Sidebar</span>
            <input type="color" id="customnight-color-sidebar" value="#142b44" style="width:36px;height:28px;padding:0;border:1px solid #555;border-radius:3px;background:transparent;cursor:pointer;" />
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="flex:1;font-size:12px;color:#ccc;">Cards</span>
            <input type="color" id="customnight-color-card" value="#152238" style="width:36px;height:28px;padding:0;border:1px solid #555;border-radius:3px;background:transparent;cursor:pointer;" />
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="flex:1;font-size:12px;color:#ccc;">Elevated BG</span>
            <input type="color" id="customnight-color-main-elevated" value="#152238" style="width:36px;height:28px;padding:0;border:1px solid #555;border-radius:3px;background:transparent;cursor:pointer;" />
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="flex:1;font-size:12px;color:#ccc;">Highlight</span>
            <input type="color" id="customnight-color-highlight-elevated" value="#152238" style="width:36px;height:28px;padding:0;border:1px solid #555;border-radius:3px;background:transparent;cursor:pointer;" />
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="flex:1;font-size:12px;color:#ccc;">Notifications</span>
            <input type="color" id="customnight-color-notification" value="#4687d6" style="width:36px;height:28px;padding:0;border:1px solid #555;border-radius:3px;background:transparent;cursor:pointer;" />
          </div>
          <button id="customnight-reset-colors" style="width:100%;padding:8px;background:#333;color:#ccc;border:1px solid #555;border-radius:4px;cursor:pointer;font-size:12px;margin-top:6px;">Reset Colors to Default</button>
        </div>
      `;
      
      let bgPositionX = savedSettings.x;
      let bgPositionY = savedSettings.y;
      let bgSize = savedSettings.size || 100;
      let currentUrl = currentBg || '';
      let isDragging = false;
      let dragStartX, dragStartY, startPosX, startPosY;
      
      const preview = content.querySelector('#customnight-preview');
      const currentEl = content.querySelector('#customnight-current');
      const sizeSlider = content.querySelector('#customnight-size');
      const sizeVal = content.querySelector('#customnight-size-val');
      
      function updatePreview() {
        if (preview && currentUrl) {
          const escaped = escapeForCssUrl(currentUrl);
          preview.style.backgroundImage = `url("${escaped}")`;
          preview.style.backgroundSize = bgSize + '%';
          preview.style.backgroundPosition = bgPositionX + '% ' + bgPositionY + '%';
          preview.style.backgroundRepeat = 'no-repeat';
        }
      }
      
      if (currentUrl && preview) {
        bgPositionX = savedSettings.x !== undefined ? savedSettings.x : 50;
        bgPositionY = savedSettings.y !== undefined ? savedSettings.y : 50;
        bgSize = savedSettings.size || 100;
        if (currentEl) {
          const displayUrl = currentUrl.startsWith('data:') ? `Local file (base64)` : currentUrl;
          currentEl.textContent = `Current: ${displayUrl}`;
        }
      }
      
      if (sizeSlider) sizeSlider.value = bgSize;
      if (sizeVal) sizeVal.textContent = bgSize + '%';
      
      updatePreview();
      
      if (sizeSlider && sizeVal) {
        sizeSlider.addEventListener('input', () => {
          bgSize = parseInt(sizeSlider.value);
          sizeVal.textContent = bgSize + '%';
          preview.style.backgroundSize = bgSize + '%';
        });
      }
      
      if (preview) {
        preview.addEventListener('mousedown', (e) => {
          isDragging = true;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
          startPosX = bgPositionX;
          startPosY = bgPositionY;
          preview.style.cursor = 'grabbing';
          e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
          if (isDragging) {
            const dx = (e.clientX - dragStartX) * 0.15;
            const dy = (e.clientY - dragStartY) * 0.15;
            bgPositionX = Math.max(0, Math.min(100, startPosX - dx));
            bgPositionY = Math.max(0, Math.min(100, startPosY - dy));
            preview.style.backgroundPosition = bgPositionX + '% ' + bgPositionY + '%';
          }
        });
        
        document.addEventListener('mouseup', () => {
          if (isDragging) {
            isDragging = false;
            preview.style.cursor = 'grab';
          }
        });
        
        preview.addEventListener('wheel', (e) => {
          e.preventDefault();
          const delta = e.deltaY > 0 ? -10 : 10;
          bgSize = Math.max(30, Math.min(300, bgSize + delta));
          if (sizeSlider) sizeSlider.value = bgSize;
          if (sizeVal) sizeVal.textContent = bgSize + '%';
          preview.style.backgroundSize = bgSize + '%';
        });
      }
      
      const urlInput = content.querySelector('#customnight-url-input');
      const applyBtn = content.querySelector('#customnight-apply');
      const resetBtn = content.querySelector('#customnight-reset');
      const fileInput = content.querySelector('#customnight-file-input');
      
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
              const dataUrl = ev.target?.result;
              if (typeof dataUrl === 'string') {
                currentUrl = dataUrl;
                bgPositionX = 50;
                bgPositionY = 50;
                bgSize = 100;
                if (sizeSlider) sizeSlider.value = 100;
                if (sizeVal) sizeVal.textContent = '100%';
                if (currentEl) currentEl.textContent = 'Current: Local file (base64)';
                updatePreview();
              }
            };
            reader.readAsDataURL(file);
          }
        });
      }
      
      if (urlInput) {
        urlInput.addEventListener('input', () => {
          const url = urlInput.value.trim();
          if (url) {
            currentUrl = url;
            const escaped = escapeForCssUrl(url);
            preview.style.backgroundImage = `url("${escaped}")`;
          } else {
            preview.style.backgroundImage = 'none';
          }
        });
        urlInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && urlInput.value.trim()) {
            currentUrl = urlInput.value.trim();
          }
        });
      }
      
      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          const url = urlInput?.value.trim() || currentUrl;
          const colors = {};
          for (const key of Object.keys(DEFAULT_ACCENT)) {
            const picker = document.getElementById(`customnight-color-${key}`);
            if (picker) colors[key] = picker.value;
          }
          setAccentColors(colors);
          if (url) {
            setCustomBackgroundUrl(url);
            setBackgroundSettings(bgSize, bgPositionX, bgPositionY);
          }
          window.location.reload();
        });
      }
      
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          setCustomBackgroundUrl(null);
          clearBackgroundSettings();
          clearAccentColors();
          window.location.reload();
        });
      }
      
      const savedAccent = getAccentColors();
      if (savedAccent) {
        for (const [key, value] of Object.entries(savedAccent)) {
          const picker = content.querySelector(`#customnight-color-${key}`);
          if (picker) picker.value = value;
        }
      }
      
      const resetColorsBtn = content.querySelector('#customnight-reset-colors');
      if (resetColorsBtn) {
        resetColorsBtn.addEventListener('click', () => {
          clearAccentColors();
          window.location.reload();
        });
      }
      
      Spicetify.PopupModal.display({
        title: 'Custom Background',
        content: content,
      });
    });
  }
  
  init();
}

waitForElement(['.Root__top-container'], ([topContainer]) => {
  const backgroundContainer = document.createElement('div');
  backgroundContainer.className = 'customnight-bg-container';
  topContainer.appendChild(backgroundContainer);

  const rootElement = document.querySelector('.Root__top-container');
  rootElement.style.zIndex = '0';

  const customBgUrl = getCustomBackgroundUrl();
  const settings = getBackgroundSettings();
  
  if (customBgUrl) {
    const escaped = escapeForCssUrl(customBgUrl);
    backgroundContainer.style.backgroundImage = `url("${escaped}")`;
    backgroundContainer.style.backgroundSize = settings.size + '%';
    backgroundContainer.style.backgroundPosition = settings.x + '% ' + settings.y + '%';
    backgroundContainer.style.backgroundRepeat = 'no-repeat';
    backgroundContainer.style.backgroundColor = '#000';
  } else {
    const moonImg = document.createElement('img');
    moonImg.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png';
    moonImg.alt = 'Moon';
    backgroundContainer.appendChild(moonImg);

    const stars = document.createElement('div');
    stars.className = 'stars';
    backgroundContainer.appendChild(stars);

    const twinkling = document.createElement('div');
    twinkling.className = 'twinkling';
    backgroundContainer.appendChild(twinkling);

    const clouds = document.createElement('div');
    clouds.className = 'clouds';
    backgroundContainer.appendChild(clouds);
  }

  const savedAccent = getAccentColors();
  if (savedAccent) {
    applyAccentColors(savedAccent);
  }

  function handleLabelChange() {
    const playButton = document.querySelector('[data-encore-id="buttonPrimary"]');
    if (!playButton) return;
    
    const img = document.querySelector('.main-nowPlayingWidget-coverArt .cover-art img');
    if (!img) return;
    
    if (playButton.getAttribute('aria-label') == 'Pause') {
      img.classList.add('running-animation');
    } else {
      img.classList.remove('running-animation');
    }
  }

  

  waitForElement(['[data-encore-id="buttonPrimary"]'], ([targetElement]) => {
    if (!targetElement) return;
    
    handleLabelChange();
    
    const playObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'aria-label'
        ) {
          handleLabelChange();
        }
      }
    });

    const playConfig = { attributes: true, attributeFilter: ['aria-label'] };
    playObserver.observe(targetElement, playConfig);
  });

  customBackgroundInit();
});