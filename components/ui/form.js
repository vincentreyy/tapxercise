import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/battlemode.module.css";
//import { connectDatabase } from "../../helpers/db-api";

import Button from "./button";
import classes from "./form.module.css";

export default function Form(props) {
  const playerOneInputRef = useRef();
  const playerTwoInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    if (props.gameType === "2") {
      const playerOneName = playerOneInputRef.current.value;
      const playerTwoName = playerTwoInputRef.current.value;

      const newPlayers = {
        gameType: props.gameType,
        playerOne: playerOneName,
        playerTwo: playerTwoName,
      };

      fetch("/api/players", {
        method: "POST",
        body: JSON.stringify(newPlayers),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else if (props.gameType === "1") {
      const playerOneName = playerOneInputRef.current.value;

      console.log(playerOneName);

      const newPlayers = {
        gameType: props.gameType,
        playerOne: playerOneName,
        playerTwo: "",
      };

      fetch("/api/players", {
        method: "POST",
        body: JSON.stringify(newPlayers),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    // fetch("/api/change-player")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // fetch("/api/change-player").then(
    //   (response) => response.json()
    // ).then((data) => console.log(data));
  }

  if (props.gameType === "2") {
    return (
      <Container>
        <Row>
          <Col lg={6} className={styles.bottom}>
            <center>
              <form onSubmit={submitHandler}>
                <label htmlFor="player1">
                  <Image
                    src="/player-one.png"
                    alt="Player One Name"
                    width={611}
                    height={64}
                  />
                </label>
                <input
                  className={classes.form}
                  type="text"
                  required
                  id="player1"
                  ref={playerOneInputRef}
                />
                <Button type="submit">OK</Button>
              </form>
            </center>
          </Col>
          <Col>
            <center>
              <form onSubmit={submitHandler}>
                <label htmlFor="player2">
                  <Image
                    src="/player-two.png"
                    alt="Player Two Name"
                    width={611}
                    height={64}
                  />
                </label>
                <input
                  className={classes.form}
                  type="text"
                  required
                  id="player2"
                  ref={playerTwoInputRef}
                />
                <Button type="submit">OK</Button>
              </form>
            </center>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="player">{props.children}</label>
      <input
        className={classes.form}
        type="text"
        required
        id="player"
        ref={playerOneInputRef}
      />
      <Button type="submit">OK</Button>
    </form>
  );
}
