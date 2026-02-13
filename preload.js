const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Control window
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  imageLoaded: (path) => ipcRenderer.send('image-loaded', path),
  getInitialConfig: () => ipcRenderer.invoke('get-initial-config'),
  setScale: (scale) => ipcRenderer.send('set-scale', scale),
  onCurrentState: (cb) => {
    ipcRenderer.on('current-state', (_, state) => cb(state));
  },

  // Top bar
  uploadClicked: () => ipcRenderer.send('upload-clicked'),
  minimizeClicked: () => ipcRenderer.send('minimize-clicked'),
  exitClicked: () => ipcRenderer.send('exit-clicked'),
  topBarMove: (dx, dy) => ipcRenderer.send('topbar-move', dx, dy),
  topBarDragStart: (screenX, screenY) => ipcRenderer.send('topbar-drag-start', screenX, screenY),
  topBarDragEnd: () => ipcRenderer.send('topbar-drag-end'),
  setOpacity: (value) => ipcRenderer.send('set-opacity', value),
  traceToggle: () => ipcRenderer.send('trace-toggle'),
  onTraceState: (cb) => { ipcRenderer.on('trace-state', (_, active) => cb(active)); },

  // Overlay
  overlayMove: (x, y) => ipcRenderer.send('overlay-move', x, y),
  onSetImage: (cb) => {
    ipcRenderer.on('set-image', (_, path, scale) => cb(path, scale));
  },
  onSetScale: (cb) => {
    ipcRenderer.on('set-scale', (_, scale) => cb(scale));
  },
});
