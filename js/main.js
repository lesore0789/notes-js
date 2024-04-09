import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("Lets add a new note");
  },

  onNoteSelect(id) {
    console.log("note selected:" + id);
  },

  onNoteDelete(id) {
    console.log("Note Deleted:" + id);
  },

  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(NotesAPI.getAllNotes());
view.updateActiveNote(notes[0]);
