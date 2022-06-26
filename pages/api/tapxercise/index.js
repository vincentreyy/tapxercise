import { connectDatabase, getLeaderboard, getPlayers } from "../../../helpers/db-api";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "GET") {
    try {
      const leaderboard = await getLeaderboard(client, 'leaderboard', { score: -1, player: 1 });
      res.status(200).json({ leaderboards: leaderboard });
    } catch (error) {
      res.status(500).json({ message: 'Getting leaderboards failed.' });
    }
  }

  if (req.method === "POST") {
    const { score } = req.body;

    console.log(score[0]);

    let players;
    
    try {
      players = await getPlayers(client, 'players');
      console.log(players[0].playerOne);
    } catch (error) {
      res.status(500).json({ message: 'Getting players failed.' });
    }

    if (players[0].gameType === 1) {
      console.log("Single!");
      let result;

      const newScore = {
        "player": players[0].playerOne,
        "score": score[0]
      }
       
      const db = client.db();

      console.log(newScore);

      try {
        result = await db.collection("leaderboard").insertOne(newScore);
        res
          .status(201)
          .json({ message: "Score posted!", players: newScore });
      } catch (error) {
        res.status(500).json({ message: "Posting score failed!" });
      }
    } else if (players[0].gameType === 2) {
      console.log("Battle!");
      let result;

      const newScoreOne = {
        "player": players[0].playerOne,
        "score": score[0]
      }

      const newScoreTwo = {
        "player": players[0].playerTwo,
        "score": score[1]
      }

      const db = client.db();

      try {
        result = await db.collection("leaderboard").insertOne(newScoreOne);
        result = await db.collection("leaderboard").insertOne(newScoreTwo);
        res
          .status(201)
          .json({ message: "Score posted!", scoreOne: newScoreOne, scoreTwo: newScoreTwo});
      } catch (error) {
        res.status(500).json({ message: "Posting score failed!" });
      }
    }
  }

  client.close();
}
