const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Guilhermano',
    email: 'guilhermanodev@gmail.com',
    phone: '85994153770',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Elislânia',
    email: 'elislaniach@gmail.com',
    phone: '85992143449',
    category: v4(),
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

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
