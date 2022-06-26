import { Col, Container, Row } from "react-bootstrap";
import classes from "./leaderboard.module.css";
import Image from "next/image";

export default function Leaderboard(props) {
  const { items } = props;

  return (
    <Container className={classes.grid}>
      <Row className={classes.grid}>
        <Col>
          {props.children}
        </Col>
      </Row>
      <Row xs={1} lg={2}>
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
