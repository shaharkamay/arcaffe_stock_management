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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("../models/item"));
const getAllItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield item_1.default.find({});
    return items;
});
const addItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield item_1.default.create(item);
    return newItem;
});
const updateItem = (itemId, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield item_1.default.updateOne({ _id: itemId }, update);
    return updatedItem;
});
const updateItems = (itemIds, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItems = yield item_1.default.updateMany({ _id: { $in: itemIds } }, update);
    return updatedItems.modifiedCount;
});
const deleteItem = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    yield item_1.default.findByIdAndDelete(itemId);
});
exports.default = {
    addItem,
    getAllItems,
    updateItem,
    updateItems,
    deleteItem,
};
