"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: false,
        },
        url: process.env.MONGO_URI || '',
    },
    server: {
        host: 'localhost',
        port: process.env.PORT || 8081,
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
        accessTime: process.env.ACCESS_TIME || '',
        refreshTime: process.env.REFRESH_TIME || '',
    },
};
exports.default = config;
