import fs from "fs";

import data from "../../data.json";

export default function handler(req, res) {
  const { ammount, token, auth } = req.body;
  const parsedData = { ...data };

  if (!auth) {
    res.status(401).json({ status: "Unauthorized" });
  }

  const { balance } = parsedData;
  balance[token] += Number(ammount);

  fs.writeFile("data.json", JSON.stringify(parsedData), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  res.status(200).json({ status: "Sucess" });
}
