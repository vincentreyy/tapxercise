import Head from "next/head";
import Image from "next/image";
import Background from "../components/ui/background";
import Button from "../components/ui/button";
import Center from "../components/ui/center";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tapxercise</title>
        <meta name="description" content="Tapxercise game by Group 2" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Background>
        <Image
          src="/bg-image.png"
          alt="background"
          width={1920}
          height={1920}
        />
      </Background>
      
      <Center>
        <Image
          src="/tapxercise.png"
          alt="tapxercise"
          width={1910}
          height={200}
        />
        <center>
          <Button link="/single-mode">
            <span>Single Mode</span>
          </Button>
          <Button link="/battle-mode">
            <span>Battle Mode</span>
          </Button>
        </center>
      </Center>
    </div>
  );
}
