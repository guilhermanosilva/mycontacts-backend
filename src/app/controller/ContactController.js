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
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return response.status(400).json({ error: 'E-mail is required' });
    }

    const contactExixts = await ContactRepository.findByEmail(email);

    if (contactExixts) {
      return response.status(400).json({ error: 'This e-mail already been taken' });
    }

    const contact = await ContactRepository.create(
      {
        name, email, phone, category_id,
      },
    );

    response.json(contact);
  }

  update() {
    // atualizar um registro
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json('Error: contact not found');
    }

    await ContactRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
