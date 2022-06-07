import { useRef } from "react";
import classes from "./form.module.css";

export default function Form(props) {
  const playerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const playerName = playerInputRef.current.value;
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="player">{props.children}</label>
      <input className={classes.form} type="text" required id="player" ref={playerInputRef} />
    </form>
  );
}
