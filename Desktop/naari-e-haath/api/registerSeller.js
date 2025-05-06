import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'data', 'sellers.json');

    try {
      const newSeller = req.body;

      // Read existing data
      const fileData = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, 'utf-8')
        : '[]';

      const sellers = JSON.parse(fileData);

      // Add a unique ID to each seller
      newSeller.id = Date.now().toString(); // Simple unique ID using timestamp

      // Add new seller and write back
      sellers.push(newSeller);
      fs.writeFileSync(filePath, JSON.stringify(sellers, null, 2));

      return res.status(200).json({ message: 'Seller registered successfully!', id: newSeller.id });
    } catch (error) {
      console.error('Error writing seller:', error);
      return res.status(500).json({ message: 'Error saving seller data.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
