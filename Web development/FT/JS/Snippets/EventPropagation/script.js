const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// Bubble Phase (default)
outer.addEventListener('click', () => {
  console.log('Outer DIV clicked');
});

middle.addEventListener('click', () => {
  console.log('Middle DIV clicked');
});

inner.addEventListener('click', () => {
  console.log('Inner DIV clicked');
});
outer.addEventListener('click', () => {
  console.log('Outer DIV clicked (capture)');
}, true);  // useCapture = true

middle.addEventListener('click', () => {
  console.log('Middle DIV clicked (capture)');
}, true);

inner.addEventListener('click', () => {
  console.log('Inner DIV clicked (capture)');
}, true);
