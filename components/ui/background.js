import classes from "./background.module.css";

export default function Background(props) {
  return (
    <div className={classes.background}>
      <div className={classes.image}>{props.children}</div>
    </div>
  );
}
