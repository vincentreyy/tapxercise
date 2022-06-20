import { connectDatabase, getPlayers } from "../../helpers/db-api";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  try {
    const players = await getPlayers(client, 'players', { _id: -1 });
    res.status(200).json({ playerslist: players });
  } catch (error) {
    res.status(500).json({ message: 'Getting comments failed.' });
  }

  client.close();
}