"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemController = exports.appController = void 0;
var app_1 = require("./app");
Object.defineProperty(exports, "appController", { enumerable: true, get: function () { return __importDefault(app_1).default; } });
var item_1 = require("./item");
Object.defineProperty(exports, "itemController", { enumerable: true, get: function () { return __importDefault(item_1).default; } });
