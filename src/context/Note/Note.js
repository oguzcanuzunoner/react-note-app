import { createContext, useContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState("");

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("notes"));
    if (local) setNotes(local);
  }, []);
  useEffect(() => {
    if (notes.length > 0) localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const filtered = notes.filter((item) => item.id !== id);
    setNotes(filtered);
    localStorage.setItem("notes", JSON.stringify([...filtered]));
  };

  const editNotes = (id, value) => {
    let filtered = notes.filter((item) => item.id === id);
    let oldValues = notes.filter((item) => item.id !== id);
    filtered[0].note = value;

    setNotes([...oldValues, ...filtered]);
    localStorage.setItem("notes", JSON.stringify([...oldValues, ...filtered]));
  };

  const handleNotes = () => {
    if (note !== "" || note !== null || note.trim() !== "") {
      const newValue = { id: Math.floor(Math.random() * 10000), note };
      setNotes([...notes, newValue]);
      setNote("");
    }
  };

  const values = {
    note,
    setNote,
    notes,
    setNotes,
    handleNotes,
    deleteNote,
    editNotes,
  };
  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
