const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Guilhermano',
    email: 'guilhermanodev@gmail.com',
    phone: '85994153770',
    category: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
