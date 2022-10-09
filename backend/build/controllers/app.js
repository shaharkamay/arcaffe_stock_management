"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const render = (req, res, next) => {
    try {
        res.sendFile(path_1.default.resolve('./frontend/build/index.html'));
    }
    catch (err) {
        next(err);
    }
};
exports.default = { render };
