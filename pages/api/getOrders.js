import data from "../../data.json";

export default function handler(req, res) {
  const { orders } = data;

  res.status(200).json(orders);
}
