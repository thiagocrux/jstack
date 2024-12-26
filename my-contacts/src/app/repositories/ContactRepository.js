const { randomUUID } = require('node:crypto');

let contacts = [
  {
    id: randomUUID(),
    nome: 'Eddard Stark',
    email: 'eddard.stark@example.com',
    phone: '+55 81 91234-5678',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Jon Snow',
    email: 'jon.snow@example.com',
    phone: '+55 81 92345-6789',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Daenerys Targaryen',
    email: 'daenerys.targaryen@example.com',
    phone: '+55 81 93456-7890',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Tyrion Lannister',
    email: 'tyrion.lannister@example.com',
    phone: '+55 81 94567-8901',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Cersei Lannister',
    email: 'cersei.lannister@example.com',
    phone: '+55 81 95678-9012',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Arya Stark',
    email: 'arya.stark@example.com',
    phone: '+55 81 96789-0123',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Sansa Stark',
    email: 'sansa.stark@example.com',
    phone: '+55 81 97890-1234',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Bran Stark',
    email: 'bran.stark@example.com',
    phone: '+55 81 98901-2345',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Jaime Lannister',
    email: 'jaime.lannister@example.com',
    phone: '+55 81 89012-3456',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    nome: 'Robert Baratheon',
    email: 'robert.baratheon@example.com',
    phone: '+55 81 90123-4567',
    category_id: randomUUID(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: randomUUID(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact,
      );

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
