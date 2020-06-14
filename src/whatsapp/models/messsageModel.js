/**
 * Message model
 */

const messageModel = (body, name) => {
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

  return res;
};

module.exports = messageModel;
