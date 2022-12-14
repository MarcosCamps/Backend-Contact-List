"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactController_1 = require("../controllers/ContactController");
const routerContact = (0, express_1.Router)();
routerContact.post('/', ContactController_1.Contacts);
routerContact.get('/', ContactController_1.allContacts);
routerContact.delete('/:id', ContactController_1.contactDelete);
routerContact.put('/:id', ContactController_1.contactUpdate);
exports.default = routerContact;
