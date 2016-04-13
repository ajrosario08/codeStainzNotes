// ================= Dom Elements ======================
var addNote = document.getElementById('addNote');
var noteForm = document.getElementById('noteForm');
var noteList = document.getElementById('noteList');

var cancelButton = document.getElementById('cancel');
var enterButton = document.getElementById('enter');
var clearAllButton = document.getElementById('clearAll');

// ==================== Events =========================

document.onload = loadNotes();

addNote.addEventListener('click', toggleNoteForm, false);

cancelButton.addEventListener('click', toggleNoteForm, false);

enterButton.addEventListener('click', addNewNote, false);

clearAllButton.addEventListener('click', clearAllNotes, false);


// ============== Function Declarations =================

function toggleNoteForm() {
  if (noteForm.style.display == "none") {
    noteForm.style.display='block';
  } else {
    noteForm.style.display='none';
  }
}

function addNewNote() {
  var noteTitle = document.getElementById('noteTitle');
  var noteString = document.getElementById('newNote');
  var noteId = generateId();

  var noteObj = {
    "title": noteTitle.value,
    "note": noteString.value
  };

  localStorage.setItem(noteId, JSON.stringify(noteObj));

  var div = document.createElement('div');
  var li = document.createElement('li');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  div.setAttribute('class', 'noteItem');
  h1.innerHTML = noteObj.title;
  p.innerHTML = noteObj.note;
  div.appendChild(h1);
  div.appendChild(p);
  li.appendChild(div);
  noteList.appendChild(li);

  noteForm.style.display = "none";
  noteString.value = '';
  noteTitle.value = '';

}

function generateId() {

  if (localStorage.id) {
    var newId = parseInt(localStorage.id, 10) + 1;
    localStorage.id = newId;
    return localStorage.id;
  } else {
      localStorage.id = '1';
      return localStorage.id;
  }

}

function clearAllNotes() {
  noteList.innerHTML = '';
  localStorage.clear();
  localStorage.id = '1';
  toggleNoteForm();
}

function loadNotes() {
  for (var key in localStorage) {
    if (key !== 'id') {
      var div = document.createElement('div');
      var li = document.createElement('li');
      var h1 = document.createElement('h1');
      var p = document.createElement('p');

      noteObj = JSON.parse(localStorage[key]);

      div.setAttribute('class', 'noteItem');
      h1.innerHTML = noteObj.title;
      p.innerHTML = noteObj.note;
      div.appendChild(h1);
      div.appendChild(p);
      li.appendChild(div);
      noteList.appendChild(li);
    }
  }
}
