import Link from "next/link";
import classes from "./button.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Button(props) {
  if(props.type === "submit"){
      return (
        <button className={`${classes["btn"]} d-flex justify-content-center`}>{props.children}</button>
      )
  }
  
  return (
    <Link href={props.link}>
        <a className={`${classes["btn"]} d-flex justify-content-center`}>{props.children}</a>
    </Link>
  );
}