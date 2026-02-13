const img = document.getElementById('img');

window.electronAPI.onSetImage((fileUrl, scale) => {
  img.src = fileUrl;
  img.style.transform = scale !== 1 ? `scale(${scale})` : 'none';
});

window.electronAPI.onSetScale((scale) => {
  img.style.transform = scale !== 1 ? `scale(${scale})` : 'none';
});
