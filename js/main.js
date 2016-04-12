var addNote = document.getElementById('addNote');
var noteForm = document.getElementById('noteForm');
var noteList = document.getElementById('noteList');

var cancelButton = document.getElementById('cancel');
var enterButton = document.getElementById('enter');
var clearAllButton = document.getElementById('clearAll');

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

  var noteTitle = document.getElementById('noteTitle');
  var noteValue = document.getElementById('newNote');

  localStorage.setItem(noteTitle.value, noteValue.value);

  var div = document.createElement('div');
  var li = document.createElement('li');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');


  div.setAttribute('class', 'noteItem');
  h1.innerHTML = noteTitle.value;
  p.innerHTML = noteValue.value;
  div.appendChild(h1);
  div.appendChild(p);
  li.appendChild(div);
  noteList.appendChild(li);

  noteForm.style.display = "none";
  noteValue.value = '';
  noteTitle.value = '';
}

function clearAllNotes() {
  noteList.innerHTML = '';
  localStorage.clear();
  toggleNoteForm();
}

function loadNotes() {
  for (var key in localStorage) {
    var div = document.createElement('div');
    var li = document.createElement('li');
    var h1 = document.createElement('h1');
    var p = document.createElement('p');


    div.setAttribute('class', 'noteItem');
    h1.innerHTML = key;
    p.innerHTML = localStorage[key];
    div.appendChild(h1);
    div.appendChild(p);
    li.appendChild(div);
    noteList.appendChild(li);
  }
}

document.onload = loadNotes();
