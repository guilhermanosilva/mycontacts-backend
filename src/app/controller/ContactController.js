const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
    // exibor um registro
  }

  store() {
    // salvar um registro
  }

  update() {
    // atualizar um registro
  }

  delete() {
    // deletar  um registro
  }
}

module.exports = new ContactController();
