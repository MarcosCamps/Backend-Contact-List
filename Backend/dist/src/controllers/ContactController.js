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
exports.contactUpdate = exports.contactDelete = exports.allContacts = exports.Contacts = void 0;
const ContactService_1 = require("../services/ContactService");
const Contacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield (0, ContactService_1.creatingContacts)(req.body);
    return res.status(201).json(contact);
});
exports.Contacts = Contacts;
const allContacts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, ContactService_1.getContacts)();
    res.status(200).json(products);
});
exports.allContacts = allContacts;
const contactDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, ContactService_1.deletingContact)(Number(id));
    return res.status(204).end();
});
exports.contactDelete = contactDelete;
const contactUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateU = yield (0, ContactService_1.updatingContact)(req.body, Number(id));
    return res.status(200).json(updateU);
});
exports.contactUpdate = contactUpdate;
