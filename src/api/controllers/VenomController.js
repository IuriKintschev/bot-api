const { PrismaClient } = require("@prisma/client");

module.exports = {
  // create menssage
  async create(req, res) {
    const phone = req.body.phone.replace("+", "") + "@c.us";

    const body = String(req.body.body);

    try {
      const msg = await req.client.sendText(phone, body);

      if (msg === false) {
        throw new Error("Wrong message format");
      }
      res.send("OK");
    } catch (e) {
      res.status(400);
      res.send(e);
    }
  },

  // store
  async store(_, res) {
    const prisma = new PrismaClient();

    const response = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        numero: true,
        Conversa: {
          orderBy: {
            id: "desc",
          },
          select: { Mensagem: true },
        },
      },
    });
    res.json(response);
  },
};
