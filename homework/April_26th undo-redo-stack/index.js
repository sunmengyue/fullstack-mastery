// Import stylesheets
import Stack from './stack.js';

const undo = new Stack();
const redo = new Stack();

const editor = document.getElementById('editor');

editor.addEventListener('keyup', (ev) => {
  if (ev.ctrlKey && ev.key === 'z') {
    ev.preventDefault();
    if (!undo.isEmpty()) {
      let value = undo.pop();
      redo.push(value);
      ev.target.value = value;
    }
  } else if (ev.ctrlKey && ev.key === 'r') {
    ev.preventDefault();
    if (!redo.isEmpty()) {
      let value = redo.pop();
      ev.target.value = value;
      undo.push(value);
    }
  } else {
    undo.push(ev.target.value);
  }
});
