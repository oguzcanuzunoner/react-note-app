import Clock from "react-live-clock";
import { Container, Row, Col } from "react-bootstrap";
import { useNote } from "../../context/Note/Note";
import { MdDelete } from "react-icons/md";
import { RiInputMethodLine } from "react-icons/ri";
import { useState } from "react";

const ShowNote = () => {
  const { notes, deleteNote, editNotes } = useNote();
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState("");
  return (
    <Container className="mt-2 " style={{ height: "500px" }}>
      <Row className="bg-white">
        <Col className="text-center">
          <Clock
            format={" dddd, MMMM Mo, YYYY, HH:mm:ss"}
            ticking={true}
            timezone={"Turkey"}
          />
        </Col>
      </Row>
      {notes.map((note) => (
        <Row className="bg-white" key={note.id}>
          <Col className="text-center mb-2">
            {!edit && <span>{note.note}</span>}
            {edit && (
              <input
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
                style={{ border: 0 }}
                onBlur={() => editNotes(note.id, editNote)}
              />
            )}
          </Col>
          <Col className="text-center mb-2">
            <RiInputMethodLine onClick={() => setEdit(!edit)} />
          </Col>
          <Col className="text-center mb-2">
            <span onClick={() => deleteNote(note.id)}>
              <MdDelete />
            </span>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ShowNote;
