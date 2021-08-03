import Clock from "react-live-clock";
import { Container, Row, Col } from "react-bootstrap";
import { useNote } from "../../context/Note/Note";
import { MdDelete } from "react-icons/md";
import { RiInputMethodLine } from "react-icons/ri";

const ShowNote = () => {
  const { notes, deleteNote, editNotes } = useNote();
  const changeNote = (obj) => {
    if (obj.id !== "" && obj.note !== "") {
      editNotes(obj.id, obj.note);
    }
  };

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
            <span>{note.note}</span>
          </Col>
          <Col className="text-center mb-2">
            <RiInputMethodLine
              onClick={() => {
                const newValue = prompt("Please write new note");
                changeNote({ id: note.id, note: newValue });
              }}
            />
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
