import { useEffect, useState } from "react";
import Center from "../../components/ui/center";
import Leaderboard from "../../components/ui/leaderboard";

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
    <Center>
      <Leaderboard items={leaderboard} />
    </Center>
  );
}
