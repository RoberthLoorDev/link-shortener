"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const port = 3000;
exports.app.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>");
});
exports.app.listen(port, () => {
    return console.log("servidor corriendo en el puerto 3000");
});
