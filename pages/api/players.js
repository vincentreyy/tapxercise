import { connectDatabase, setPlayers } from "../../helpers/db-api";

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
      const players = await getPlayers(client, 'players');
      res.status(200).json({ playerslist: players });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }

  if (req.method === "POST") {
    const { gameType, playerOne, playerTwo } = req.body;

    const newPlayers = {
      gameType,
      playerOne,
      playerTwo,
    };

    const db = client.db();

    const players = await db.collection("players").find({}).toArray();

    if (!Array.isArray(players) || !players.length) {
      console.log("No Players!");
      let result;

      try {
        result = await db.collection("players").insertOne(newPlayers);
        res
          .status(201)
          .json({ message: "Players changed!", players: newPlayers });
      } catch (error) {
        res.status(500).json({ message: "Changing players failed!" });
      }
    } else {
      console.log("There are Players!");
      const id = players[0]._id;

      console.log(id);

      let result;

      try {
        result = await db.collection("players").updateOne(
          { _id: id },
          {
            $set: { 
              gameType: gameType,
              playerOne: playerOne,
              playerTwo: playerTwo,
             },
          }
        );

        res
          .status(201)
          .json({ message: "Players changed!", players: newPlayers });
      } catch (error) {
        res.status(500).json({ message: "Changing players failed!" });
      }
    }
  }

  client.close();
}
