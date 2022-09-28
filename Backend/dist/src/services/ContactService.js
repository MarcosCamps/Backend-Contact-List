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
exports.updatingContact = exports.deletingContact = exports.getContacts = exports.creatingContacts = void 0;
const CodeError_1 = __importDefault(require("../errors/CodeError"));
const contactModel_1 = require("../models/contactModel");
const creatingContacts = (userContact) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = userContact;
    if (!userId) {
        throw new CodeError_1.default('UserId not informed', 400);
    }
    const contacts = yield (0, contactModel_1.getAllContacts)();
    const exists = contacts.some((contact) => contact.id === userId);
    if (!exists) {
        throw new CodeError_1.default('Contact not found', 404);
    }
    const result = yield (0, contactModel_1.createContact)(userContact);
    return result;
});
exports.creatingContacts = creatingContacts;
const getContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, contactModel_1.getAllContacts)();
    return users;
});
exports.getContacts = getContacts;
const deletingContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, contactModel_1.getAllContacts)();
    const exists = contacts.some((contact) => contact.id === id);
    if (!exists) {
        throw new CodeError_1.default('Contact not found', 404);
    }
    const userDelete = yield (0, contactModel_1.deleteContact)(id);
    return userDelete;
});
exports.deletingContact = deletingContact;
const updatingContact = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, contactModel_1.getAllContacts)();
    const exists = contacts.some((contact) => contact.id === id);
    if (!exists) {
        throw new CodeError_1.default('Contact not found', 404);
    }
    const userUpdate = yield (0, contactModel_1.updateContact)(user, id);
    return userUpdate;
});
exports.updatingContact = updatingContact;
