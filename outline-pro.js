/**
 * Toggle outlines for all HTML elements on the page
 * Run again to disable
 */

(function () {
  const KEY = '__outline_enabled__';

  if (window[KEY]) {
    document.querySelectorAll('*').forEach(el => {
      el.style.outline = '';
    });
    window[KEY] = false;
    console.log('Outlines: OFF');
  } else {
    document.querySelectorAll('*').forEach(el => {
      el.style.outline = '1px dashed rgba(170, 0, 255, 0.5)';
    });
    window[KEY] = true;
    console.log('Outlines: ON');
  }
})();
