import { Container, Row, Col, Button } from "react-bootstrap";
import { useNote } from "../../context/Note/Note";

const Note = () => {
  const { note, setNote, handleNotes } = useNote();
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-7">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Note"
              value={note}
              id="floatingTextarea2"
              style={{ height: "100px", resize: "none" }}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea2">Note</label>
          </div>
        </Col>
        <Col className="col-5">
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              handleNotes();
            }}
          >
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Note;
