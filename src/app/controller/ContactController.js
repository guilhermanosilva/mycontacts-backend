class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from contacts controller');
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
