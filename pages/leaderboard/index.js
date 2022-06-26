import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "../../components/ui/background";
import Center from "../../components/ui/center";
import Leaderboard from "../../components/ui/leaderboard";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("/api/tapxercise")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboard(data.leaderboards);
      });
  });

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
        <Leaderboard items={leaderboard}>
          <Image
            src="/leaderboard.png"
            alt="Leaderboard"
            width={611}
            height={64}
          />
        </Leaderboard>
      </Center>
    </div>
  );
}
