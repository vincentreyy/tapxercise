import Link from "next/link";
import classes from "./button.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Button(props) {
  return (
    <Link href={props.link}>
        <a className={`${classes["btn"]} m-2`}>{props.children}</a>
    </Link>
  );
}
