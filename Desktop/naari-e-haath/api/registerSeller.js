import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'data', 'sellers.json');

    // Ensure 'data' folder exists
    const fs = require('fs');
    if (!existsSync('data')) {
      fs.mkdirSync('data');
    }

    let sellers = [];

    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath);
      sellers = JSON.parse(fileContent);
    }

    // Add unique seller ID
    data.id = Date.now().toString();

    sellers.push(data);
    writeFileSync(filePath, JSON.stringify(sellers, null, 2));

    return res.status(200).json({ message: 'Seller registered', id: data.id });
  } else {
    return res.status(405).json({ message: 'Only POST method allowed' });
  }
}
