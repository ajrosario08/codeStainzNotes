var addNote = document.getElementById('addNote');
var noteForm = document.getElementById('noteForm');
var noteList = document.getElementById('noteList');

var cancelButton = document.getElementById('cancel');
var enterButton = document.getElementById('enter');
var clearAllButton = document.getElementById('clearAll');

var noteValue = document.getElementById('newNote');



addNote.addEventListener('click', toggleNoteForm, false);

cancelButton.addEventListener('click', toggleNoteForm, false);

enterButton.addEventListener('click', addNewNote, false);

clearAllButton.addEventListener('click', clearAllNotes, false);

function toggleNoteForm() {
  if (noteForm.style.display == "none") {
    noteForm.style.display='block';
  } else {
    noteForm.style.display='none';
  }
}

function addNewNote() {

  var noteValue = document.getElementById('newNote');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(noteValue.value));
  noteList.appendChild(li);

  noteForm.style.display = "none";
  noteValue.value = '';
}

function clearAllNotes() {
  noteList.innerHTML = '';
}
