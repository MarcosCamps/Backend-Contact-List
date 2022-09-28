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
exports.updateContact = exports.deleteContact = exports.getAllContacts = exports.createContact = void 0;
const connection_1 = __importDefault(require("./connection"));
const createContact = (userContact) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, email, telephone, whatsapp } = userContact;
    console.log(userContact);
    const query = `INSERT INTO ContactsManager.Contacts (userId, email, telephone, whatsapp)
  VALUES
(?, ?, ?, ?);`;
    const value = [userId, email || null, telephone || null, whatsapp || null];
    const [{ insertId }] = yield connection_1.default.execute(query, value);
    return Object.assign({ id: insertId }, userContact);
});
exports.createContact = createContact;
const getAllContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * from ContactsManager.Contacts';
    const [users] = yield connection_1.default.execute(query);
    return users;
});
exports.getAllContacts = getAllContacts;
const deleteContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'DELETE FROM ContactsManager.Contacts WHERE id=?;';
    yield connection_1.default.execute(query, [id]);
});
exports.deleteContact = deleteContact;
const updateContact = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, telephone, whatsapp } = user;
    const query = `UPDATE ContactsManager.Contacts SET email=?, telephone=?, whatsapp=? WHERE id =?;`;
    const value = [email || null, telephone || null, whatsapp || null, id];
    yield connection_1.default.execute(query, value);
});
exports.updateContact = updateContact;
