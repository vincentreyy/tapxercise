import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://vercel-admin-user:c1c5TXa2mOo2IB1E@reicent.ysdsm.mongodb.net/tapxercise?retryWrites=true&w=majority"
  );

  return client;
}

export async function getPlayers(client, collection) {
  const db = client.db();

  const players = await db.collection(collection).find({}).toArray();

  return players;
}

export async function getLeaderboard(client, collection, sort) {
  const db = client.db();

  const leaderboard = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return leaderboard;
}

export async function setPlayers(
  client,
  collection,
  gameType,
  playerOne,
  playerTwo
) {
  const db = client.db();

  const players = await db.collection(collection).find({}).toArray();

  if (!players) {
    await db.collection(collection).insertOne({
      gameType,
      playerOne,
      playerTwo,
    });
  } else {
    const id = players[0]._id;
    await db.collection(collection).updateOne(
      { _id: id },
      {
        $set: { playerOne: playerOne, playerTwo: playerTwo },
      }
    );
  }
}
