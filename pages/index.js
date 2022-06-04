import Head from "next/head";
import Image from "next/image";
import Button from "../components/ui/button";
import Center from "../components/ui/center";
import styles from "../styles/Home.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tapxercise</title>
        <meta name="description" content="Tapxercise game by Group 2" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Center>
        <Image src="/tapxercise.png" alt="tapxercise" width={1910} height={200} />

        <div className="d-flex flex-column">
          <Button link="/single-mode">
            <span>Single Mode</span>
          </Button>
          <Button link="/battle-mode">
            <span>Battle Mode</span>
          </Button>
        </div>
      </Center>
    </div>
  );
}
