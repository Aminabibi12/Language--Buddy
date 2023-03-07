import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./studentCard.css";

import image from "../../images/Profile-PNG-File.png";
import { languageList } from "../../data/languagesList";
import { levels } from "../../data/levels";

function StudentCard(props) {
  let languageName = languageList.find(
    (el) => el.id === props.students["language"]
  ).name;
  let languageLevel = levels.find(
    (el) => el.id === props.students["language_level"]
  ).name;

  return (
    <Card className="student_card" id={props.students["id"]}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="card_body">
        <Card.Title className="card_title">
          {props.students["username"]}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.students["nationality"]}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">
          {languageName} - {languageLevel}
        </Card.Subtitle>
        <Card.Text>{props.students["description"]}</Card.Text>
        <Button className="button send_button" type="submit">
          Send Request
        </Button>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
