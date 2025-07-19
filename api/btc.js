module.exports = (req, res) => {
  res.json({ message: "Données BTC ici", time: new Date().toISOString() });
};