const uploadBtn = document.getElementById('uploadBtn');
const preview = document.getElementById('preview');

async function loadImage(path) {
  if (!path || !window.electronAPI) return;
  window.electronAPI.imageLoaded(path);
}

uploadBtn.addEventListener('click', async () => {
  if (!window.electronAPI) return;
  const path = await window.electronAPI.openFileDialog();
  if (!path) return;
  preview.innerHTML = '';
  const img = document.createElement('img');
  const fileUrl = 'file:///' + path.replace(/\\/g, '/').replace(/^([A-Za-z]):/, '$1:/');
  img.src = fileUrl;
  img.onload = () => loadImage(path);
  img.onerror = () => {
    preview.textContent = 'Failed to load image.';
  };
  preview.appendChild(img);
});

window.electronAPI.onCurrentState((state) => {
  if (state && state.imagePath) {
    preview.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'file:///' + state.imagePath.replace(/\\/g, '/').replace(/^([A-Za-z]):/, '$1:/');
    preview.appendChild(img);
  }
});
