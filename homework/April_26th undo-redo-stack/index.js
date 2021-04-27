// Import stylesheets
import Stack from './stack.js';

const undo = new Stack();
const redo = new Stack();

const editor = document.getElementById('editor');

editor.addEventListener('keyup', (ev) => {
  if (ev.ctrlKey && ev.key === 'z') {
    ev.preventDefault();
    // Here is where we're going to link the undo functionality
    // with the front-end.  In this event listener, we need to
    // edit the contents of the editor (ev.target.value) with
    // the last item from the stack.

    // Don't forget!  We also have to make sure we're loading
    // our redo stack as well!
  } else if (ev.ctrlKey && ev.key === 'h') {
    ev.preventDefault();
    // Just like you did with the undo functionality, link your redo
    // stack functionality here!  Remember!  We want to set
    // (ev.target.value) with your value from your redo stack.

    // Don't forget!  We also need to make sure we're loading
    // our UNDO stack as well!
  }
});
