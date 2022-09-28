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
exports.userUpdate = exports.userDelete = exports.allUsers = exports.User = void 0;
const UserService_1 = require("../services/UserService");
const User = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, UserService_1.creatingUser)(req.body);
    return res.status(201).json(user);
});
exports.User = User;
const allUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, UserService_1.getUser)();
    res.status(200).json(products);
});
exports.allUsers = allUsers;
const userDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, UserService_1.deletingUser)(Number(id));
    return res.status(204).end();
});
exports.userDelete = userDelete;
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateU = yield (0, UserService_1.updatingUser)(req.body, Number(id));
    return res.status(200).json(updateU);
});
exports.userUpdate = userUpdate;
