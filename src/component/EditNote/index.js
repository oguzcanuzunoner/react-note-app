import { useState } from "react";
import { useNote } from "../../context/Note/Note";

const EditNote = ({ id, value }) => {
  const { editNotes } = useNote();
  const [editNote, setEditNote] = useState("");
  setEditNote(value);
  return (
    <div>
      <input
        value={editNote}
        onChange={(e) => setEditNote(e.target.value)}
        style={{ border: 0 }}
        onBlur={() => editNotes(id, editNote)}
      />
    </div>
  );
};

export default EditNote;
