import { Request, Response } from 'express';
import { creatingContacts, getContacts, deletingContact, updatingContact, getContactsById } from '../services/ContactService';

const contacts = async (req: Request, res: Response) => {
  const contact = await creatingContacts(req.body);
  return res.status(201).json(contact);
};

const allContacts = async (_req: Request, res: Response) => {
  const products = await getContacts();
  res.status(200).json(products);
};

const contactsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = await getContactsById(Number(id));
  res.status(200).json(userId);
}

const contactDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletingContact(Number(id));
  return res.status(204).end();
};

const contactUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateU = await  updatingContact(req.body, Number(id));
  return res.status(200).json(updateU);
}

export { contacts, allContacts, contactDelete, contactUpdate, contactsById };
