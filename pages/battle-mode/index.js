import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Background from "../../components/ui/background";
import Button from "../../components/ui/button";
import Center from "../../components/ui/center";
import Form from "../../components/ui/form";

import styles from "../../styles/battlemode.module.css";

export default function BattleModePage() {
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

      <div
        className={`${styles["divider"]} d-flex justify-content-center`}
      ></div>

      <Center>
        <Container fluid>
          <Row>
            <Col>
              <center>
                <Form>
                  <Image
                    src="/player-one.png"
                    alt="Player One Name"
                    width={611}
                    height={64}
                  />
                </Form>
              </center>
            </Col>
            <Col>
              <center>
                <Form>
                  <Image
                    src="/player-two.png"
                    alt="Player Two Name"
                    width={611}
                    height={64}
                  />
                </Form>
              </center>
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
                <Button link="">
                  <span>OK</span>
                </Button>
              </center>
            </Col>
            <Col>
              <center>
                <Button link="">
                  <span>OK</span>
                </Button>
              </center>
            </Col>
          </Row>
        </Container>
      </Center>
    </div>
  );
}
