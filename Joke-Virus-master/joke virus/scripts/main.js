var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function popup() {
  var printOut = window.open("http://localhost:3000/ryan_virus/moving_popup.html","_blank", 'height=500, width=750');
  printOut.moveTo(1170*Math.random(),580*Math.random());
  printOut.onbeforeunload = function() {
    popup();
  }
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
