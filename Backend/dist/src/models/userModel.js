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
exports.updateUser = exports.deleteUser = exports.getAllUsers = exports.createUser = void 0;
const connection_1 = __importDefault(require("./connection"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = user;
    const query = `INSERT INTO ContactsManager.Users (username, password)
      VALUES
    (?, ?);`;
    const value = [username, password];
    const [{ insertId }] = yield connection_1.default.execute(query, value);
    return Object.assign({ id: insertId }, user);
});
exports.createUser = createUser;
const findeUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = user;
    const query = 'SELECT * from ContactsManager.Users WHERE email=?, password=?;';
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * from ContactsManager.Users';
    const [users] = yield connection_1.default.execute(query);
    return users;
});
exports.getAllUsers = getAllUsers;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryDelete = 'DELETE FROM ContactsManager.Contacts WHERE userId=?;';
    yield connection_1.default.execute(queryDelete, [id]);
    const query = 'DELETE FROM ContactsManager.Users WHERE id=?;';
    yield connection_1.default.execute(query, [id]);
});
exports.deleteUser = deleteUser;
const updateUser = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = user;
    const query = `UPDATE ContactsManager.Users SET username=? WHERE id =?;`;
    const value = [username, id];
    yield connection_1.default.execute(query, value);
});
exports.updateUser = updateUser;
