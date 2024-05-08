const { v4: generateRandomUUID } = require('uuid'); // import function to generate random UUID

const setRequestId = (req, res, next) => {
    const requestId = generateRandomUUID(); // generate random UUID

    const apiKey = req.headers['x-api-key'];

    res.setHeader('x-request-id', requestId);
    res.setHeader('x-api-key', apiKey);

    req.requestId = requestId;
    next();
};

module.exports = setRequestId;
