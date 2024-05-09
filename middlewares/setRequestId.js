const { v4: generateRandomUUID } = require('uuid');

const setRequestId = (req, res, next) => {
    if (req.headers['x-request-id'] === undefined) {
        req.xRequestId = generateRandomUUID(); 
    } else {
        req.xRequestId = req.headers['x-request-id'];
    }

    const apiKey = req.headers['x-api-key'];
    if (apiKey !== undefined) {
        req.apiKey = apiKey;
        res.setHeader('x-api-key', apiKey);
    }

    next();
};

module.exports = setRequestId;
