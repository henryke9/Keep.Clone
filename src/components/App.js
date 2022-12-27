import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(notesEntry) {
  return (
    <Note
      key={notesEntry.key}
      title={notesEntry.title}
      content={notesEntry.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createEntry)}
      <Footer />
    </div>
  );
}

export default App;
