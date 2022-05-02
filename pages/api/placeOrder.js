import fs from "fs";

import data from "../../data.json";

export default function handler(req, res) {
  const { side, ammount, token, price, auth } = req.body;
  const parsedData = { ...data };

  if (!auth) {
    res.status(401).json({ status: "Unauthorized" });
  }

  const id = Date.now();

  const { orders } = parsedData;
  orders.push({ side, ammount, token, price, id });

  fs.writeFile("data.json", JSON.stringify(parsedData), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  fs.appendFileSync("log.txt", `PLACED[${side}]@[${price}][${ammount}]  `, {
    flags: "a+",
  });

  res.status(201).json({ id });
}
