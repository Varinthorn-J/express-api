const yaml = require('js-yaml');
const fs = require('fs');

const configData = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
const API_KEY = configData.API_KEY;

const handleApiKeyValidation = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== API_KEY ) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

module.exports = handleApiKeyValidation;