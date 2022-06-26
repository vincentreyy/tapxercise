import { Col, Container, Row } from "react-bootstrap";
import classes from "./leaderboard.module.css";

export default function Leaderboard(props) {
  const { items } = props;

  return (
    <Container className={classes.grid}>
      <Row className={classes.grid}>
        <Col>
          <center>LEADERBOARD</center>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        {items.map((item) => (
          <Col key={item._id} className={classes.grid}>
            <span className={classes.left}>{item.player}</span>
            <span className={classes.right}>{item.score}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
