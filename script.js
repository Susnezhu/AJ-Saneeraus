console.log("hello");

let galleryImages = ['house.jpg', 'house.jpg', 'house.jpg', 'house.jpg', 'house.jpg', 'house.jpg'];

function add_gallery() {
  const gallery = document.getElementById('gallery');
  let rowNum = 2;
  let gallery_row = document.createElement('div');
  gallery_row.className = 'gallery-row';

  if (gallery) {
    galleryImages.forEach(img => {
      if (rowNum === 0) {
        gallery.appendChild(gallery_row);
        gallery_row = document.createElement('div');
        gallery_row.className = 'gallery-row';
        rowNum = 2;
      }

      const pic = document.createElement('img');
      pic.src = 'pictures/' + img;
      pic.className = 'gallery-img';
      pic.alt = 'gallery image';

      gallery_row.appendChild(pic);
      rowNum--;
    });

    gallery.appendChild(gallery_row);
  }
}


add_gallery()