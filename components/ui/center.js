import classes from "./center.module.css";

export default function Center(props) {
  return <div className={classes.center}>{props.children}</div>;
}
