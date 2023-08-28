const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      response.status(404).json('Error: user not found');
    }

    response.json(contact);
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
