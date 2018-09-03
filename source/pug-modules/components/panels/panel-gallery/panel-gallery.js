import slider from './slider.js';

const sl = slider.create('slider-gallery', {
  breadcrumbs: true,
  transition: 'none',
  fade: false
});

sl.add('h', ['one', 'two', 'three', 'one']);
sl.auto(5500);
// sl.start();