import Image from "next/image";
import Button from "../../components/ui/button";
import Form from "../../components/ui/form";
import Center from "../../components/ui/center";
import Background from "../../components/ui/background";

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SingleModePage() {
  return (
    <div>
      <center>
        <Link href="/">
          <a>
            <Image
              src="/tapxercise.png"
              alt="tapxercise"
              width={477.5}
              height={50}
            />
          </a>
        </Link>

        <Background>
          <Image
            src="/bg-image.png"
            alt="background"
            width={1920}
            height={1920}
          />
        </Background>
      </center>

      <Center>
        <center>
          <Form>
            <Image
              src="/player-single.png"
              alt="Player Name"
              width={611}
              height={64}
            />
          </Form>
        </center>
        <center>
          <Button link="">
            <span>OK</span>
          </Button>
        </center>
      </Center>
    </div>
  );
}
