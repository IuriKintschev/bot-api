const { PrismaClient } = require("@prisma/client");

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
  console.log(numero);

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
      console.log(resDataApi.data);

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
  let res = "";

  const initTalk = `Ola ${name}, como tu ta ? showzera ?
    Eae tu aferiu sua pressão hj? :
    1 - Sim
    2 - Não`;

  if (
    body === "oi" ||
    body === "ola" ||
    body === "tudo bem" ||
    body === "hey"
  ) {
    res = initTalk;
  } else if (body === "1" || body === "sim" || body === "s") {
    res = "Estou orgulhoso 😎";
  } else if (body === "2" || body === "nao" || body === "não" || body === "n") {
    res = "Ta maluco, tu quer morrer maluco? 🤨";
  } else {
    res =
      'Desculpe nao consigo entender a sua mensagem! 😔 \n Que tal começarmos com um "Oi" 😇';
  }

  client.sendText(message.from, res);

  const response = await prisma.conversa.create({
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
