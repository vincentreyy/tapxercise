import { useRef } from "react";
import Button from "./button";
import classes from "./form.module.css";

export default function Form(props) {
  const playerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const playerName = playerInputRef.current.value;

    // fetch("/api/change-player")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    fetch("/api/change-player").then(
      (response) => response.json()
    ).then((data) => console.log(data));
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="player">{props.children}</label>
      <input
        className={classes.form}
        type="text"
        required
        id="player"
        ref={playerInputRef}
      />
      <Button type="submit">OK</Button>
    </form>
  );
}
