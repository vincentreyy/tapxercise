export default function handler(req, res) {
  // if (req.method === "POST") {
  //   fetch("https://www.nss-productions.com/tapxercise/players").then((response) =>
  //     response.json()
  //   );

  //   res.status(200).json(response);
  // }

  fetch("https://www.nss-productions.com/tapxercise/players")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // console.log(playerOne);
  // console.log(playerTwo);

  res.status(200).json({ message: "This works!" });
}
