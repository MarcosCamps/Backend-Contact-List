"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    const { code, message } = err;
    res.status(code || 500).json({ message });
};
