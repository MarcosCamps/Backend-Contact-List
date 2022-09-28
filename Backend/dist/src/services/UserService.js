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
exports.updatingUser = exports.deletingUser = exports.getUser = exports.creatingUser = void 0;
const CodeError_1 = __importDefault(require("../errors/CodeError"));
const userModel_1 = require("../models/userModel");
const creatingUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userModel_1.createUser)(user);
    return result;
});
exports.creatingUser = creatingUser;
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userModel_1.getAllUsers)();
    return users;
});
exports.getUser = getUser;
const deletingUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userModel_1.getAllUsers)();
    const exists = users.some((user) => user.id === id);
    if (!exists) {
        throw new CodeError_1.default('User not found', 404);
    }
    const userDelete = yield (0, userModel_1.deleteUser)(id);
    return userDelete;
});
exports.deletingUser = deletingUser;
const updatingUser = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userModel_1.getAllUsers)();
    const exists = users.some((user) => user.id === id);
    if (!exists) {
        throw new CodeError_1.default('User not found', 404);
    }
    const userUpdate = yield (0, userModel_1.updateUser)(user, id);
    return userUpdate;
});
exports.updatingUser = updatingUser;
