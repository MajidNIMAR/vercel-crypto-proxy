export default async function handler(req, res) {
	  try {
		      const response = await fetch('https://api.coingecko.com/api/v3/coins/stellar/market_chart?vs_currency=usd&days=30');
			      const data = await response.json();
				      res.status(200).json(data.prices);
	  } catch (err) {
		      res.status(500).json({ error: 'Erreur de récupération XLM' });
	  }
}