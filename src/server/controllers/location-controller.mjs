import fs from 'fs';
import path from 'path';

const readJsonFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

export function getLocations(req, res) {
  const locationsDataPath = path.resolve('src/assets/datas/locations.json');
  
  try {
    const locationsData = readJsonFile(locationsDataPath);
    
    if (!Array.isArray(locationsData.data)) {
      throw new Error('Invalid locations data format');
    }
    
    res.json(locationsData.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
