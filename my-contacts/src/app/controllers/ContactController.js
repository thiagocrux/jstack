const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);
    response.send(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response
        .status(404) // 404: Not Found
        .json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response
        .status(400) // 400: Bad Request
        .json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response
        .status(400) // 400: Bad Request
        .json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response
        .status(400) // 400: Bad Request
        .json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400) // 400: Bad Request
        .json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;
    await ContactRepository.delete(id);
    response.sendStatus(204); // 204: No Content
  }
}

module.exports = new ContactController();
