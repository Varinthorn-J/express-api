const { v4: generateRandomUUID } = require('uuid');

const setRequestId = (req, res, next) => {
    if (req.headers['x-request-id'] === undefined) {
        req.xRequestId = generateRandomUUID();
    } else {
        req.xRequestId = req.headers['x-request-id'];
    }

    next();
};

module.exports = setRequestId;
