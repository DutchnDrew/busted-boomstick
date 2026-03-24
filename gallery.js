document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:1000;opacity:0;visibility:hidden;transition:opacity 0.2s;'
  const img = document.createElement('img');
  img.style.maxWidth = '95%';
  img.style.maxHeight = '90%';
  img.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6)';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  document.querySelectorAll('.gallery-grid .art-card img').forEach(function (thumb) {
    thumb.style.cursor = 'zoom-in';
    thumb.addEventListener('click', function () {
      img.src = thumb.src;
      lightbox.style.visibility = 'visible';
      lightbox.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', function () {
    lightbox.style.opacity = '0';
    lightbox.style.visibility = 'hidden';
    document.body.style.overflow = '';
  });
});
