// --- Trace state ---
let tracing = false;
const traceBtn = document.getElementById('traceBtn');

function setTraceUI(active) {
  tracing = active;
  traceBtn.classList.toggle('active', active);
  traceBtn.textContent = active ? 'Tracing' : 'Trace';
}

traceBtn.addEventListener('click', () => {
  if (window.electronAPI) window.electronAPI.traceToggle();
});

if (window.electronAPI) {
  window.electronAPI.onTraceState((active) => setTraceUI(active));
}

// --- Button handlers ---
document.getElementById('uploadBtn').addEventListener('click', () => {
  if (window.electronAPI) window.electronAPI.uploadClicked();
});
document.getElementById('minBtn').addEventListener('click', () => {
  if (window.electronAPI) window.electronAPI.minimizeClicked();
});
document.getElementById('exitBtn').addEventListener('click', () => {
  if (window.electronAPI) window.electronAPI.exitClicked();
});

// --- Drag (only from the spacer / empty area of bar) ---
const dragArea = document.getElementById('dragArea');
let dragging = false;

function startDrag(e) {
  if (e.button !== 0 || tracing) return; // block drag when tracing
  dragging = true;
  if (window.electronAPI) window.electronAPI.topBarDragStart(e.screenX, e.screenY);
  try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
}

function endDrag() {
  if (dragging) {
    dragging = false;
    if (window.electronAPI) window.electronAPI.topBarDragEnd();
  }
}

dragArea.addEventListener('pointerdown', startDrag);
dragArea.addEventListener('pointerup', endDrag);
dragArea.addEventListener('pointercancel', endDrag);

// Also allow dragging from the bar background (areas not covered by children)
const bar = document.getElementById('bar');
bar.addEventListener('pointerdown', (e) => {
  if (e.target !== bar) return;
  startDrag(e);
});
bar.addEventListener('pointerup', (e) => {
  if (e.target !== bar) return;
  endDrag();
});
bar.addEventListener('pointercancel', endDrag);

// --- Scale and opacity controls ---
const scaleSlider = document.getElementById('scaleSlider');
const scaleLabel = document.getElementById('scaleLabel');
const opacitySlider = document.getElementById('opacitySlider');
const opacityLabel = document.getElementById('opacityLabel');

if (window.electronAPI) {
  window.electronAPI.getInitialConfig().then((cfg) => {
    if (cfg && typeof cfg.overlayScale === 'number') {
      const pct = Math.round(cfg.overlayScale * 100);
      scaleSlider.value = Math.max(49, Math.min(200, pct));
      scaleLabel.textContent = scaleSlider.value + '%';
    }
    if (cfg && typeof cfg.opacity === 'number') {
      const pct = Math.round((cfg.opacity / 255) * 100);
      opacitySlider.value = Math.max(0, Math.min(100, pct));
      opacityLabel.textContent = opacitySlider.value + '%';
    }
    if (cfg && typeof cfg.traceMode === 'boolean') {
      setTraceUI(cfg.traceMode);
    }
  });
}

scaleSlider.addEventListener('input', () => {
  const pct = parseInt(scaleSlider.value, 10);
  scaleLabel.textContent = pct + '%';
  if (window.electronAPI) window.electronAPI.setScale(pct / 100);
});

opacitySlider.addEventListener('input', () => {
  const pct = parseInt(opacitySlider.value, 10);
  opacityLabel.textContent = pct + '%';
  if (window.electronAPI) window.electronAPI.setOpacity(Math.round((pct / 100) * 255));
});
