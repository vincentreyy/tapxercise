import { useRef } from "react";

export default function Form() {
  const playerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const playerName = playerInputRef.current.value;
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="player">Player Name</label>
      <input type="text" required id="player" ref={playerInputRef} />
    </form>
  );
}
