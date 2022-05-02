import data from "../../data.json";

export default function handler(req, res) {
  const { balance } = data;

  res.status(200).json(balance);
}
