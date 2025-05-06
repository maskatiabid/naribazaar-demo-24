export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      console.log('Received Seller Data:', data);
  
      // For now, just return a success message
      return res.status(200).json({ message: 'Seller registered successfully!' });
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  