/**
 * Show outlines for all HTML elements on the page
 * Useful for layout debugging and container visualization
 */

document.querySelectorAll('*').forEach(el => {
  el.style.outline = '1px solid rgba(170, 0, 255, 0.5)';
});
