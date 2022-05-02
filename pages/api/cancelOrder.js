import fs from "fs";

import data from "../../data.json";

export default function handler(req, res) {
  const { id, auth } = req.body;
  console.log("auth", auth);
  const parsedData = { ...data };

  if (!auth) {
    res.status(401).json({ status: "Unauthorized" });
  }

  const { orders } = parsedData;

  const newOrder = orders.filter((order) => order.id !== id);
  const canceledOrder = orders.filter((order) => order.id === id);
  parsedData.orders = newOrder;

  fs.writeFile("data.json", JSON.stringify(parsedData), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.appendFileSync(
    "log.txt",
    `CANCELLED[${canceledOrder[0].side}]@[${canceledOrder[0].price}][${canceledOrder[0].ammount}]  `,
    {
      flags: "a+",
    }
  );
  res.status(200).json({ status: "Sucess", orders: newOrder });
}
