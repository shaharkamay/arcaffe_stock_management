"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield services_1.itemService.getAllItems();
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
const addItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = req.body;
        const addedItem = yield services_1.itemService.addItem(item);
        res.status(201).json(addedItem);
    }
    catch (err) {
        next(err);
    }
});
const updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.itemId;
        const update = req.body.update;
        yield services_1.itemService.updateItem(id, update);
        res.status(204).end();
    }
    catch (err) {
        next(err);
    }
});
const updateItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemIds = req.body.itemIds;
        const update = req.body.update;
        yield services_1.itemService.updateItems(itemIds, update);
        res.status(204).end();
    }
    catch (err) {
        next(err);
    }
});
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.itemId;
        yield services_1.itemService.deleteItem(id);
        res.status(204).end();
    }
    catch (err) {
        next(err);
    }
});
exports.default = { getAllItems, addItem, updateItem, updateItems, deleteItem };
