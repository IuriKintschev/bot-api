const { PrismaClient } = require("@prisma/client");
const messageModel = require("../models/messsageModel");

const api = require("../../service/axios");

/**
 *  function to send messeges
 * @param {Venom} client cliente chamada hantsapp
 * @param {Object} message objeto message
 */

async function onMessage(client, message) {
  const prisma = new PrismaClient();

  /**
   * Validate group
   * should is not send message
   */
  if (message.chat.kind === "group") {
    return;
  }

  const numero = String(message.from).split("@")[0].trim();
  const email = `${numero}@gmail.com`;
  const name = message.sender.name
    ? message.sender.pushname
    : message.sender.verifiedName;

  const user = await prisma.user.findMany({
    where: {
      numero: {
        equals: numero,
      },
    },
  });

  // senao existe na base local
  if (user.length <= 0) {
    try {
      // verifi is number euthenticated
      const resDataApi = await api.post("/existuser", { email });

      if (resDataApi.status !== 200) {
        return;
      }

      // insere novo usuario
      const resultUser = await prisma.user.create({
        data: {
          email,
          numero,
          id: resDataApi.data,
          name,
        },
      });

      user.push(resultUser);
    } catch (error) {
      return;
    }
  }

  /**
   * Simple logic
   */
  const body = message.body.toLowerCase();

  /**
   * Returno response conversation
   */
  let res = messageModel(body, name);

  client.sendText(message.from, res);

  if (
    body.includes("urina") ||
    body.includes("corrimento") ||
    body.includes("secreção") ||
    body.includes("amarelo") ||
    body.includes("mijar") ||
    body.includes("urinando")
  ) {
    client.sendLocation(
      message.from,
      -11.859544,
      -55.51238,
      "Sinop, MT",
      "Centro de triagem"
    );
  }

  await prisma.conversa.create({
    data: {
      user: {
        connect: {
          id: user[0].id,
        },
      },
      Mensagem: {
        create: {
          pergunta: String(body),
          resposta: String(res),
        },
      },
    },
  });
}

module.exports = onMessage;
