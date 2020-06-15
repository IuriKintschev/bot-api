/**
 * Message model
 */

const messageModel = (body, name) => {
  let res = "";

  const initTalk = `
Olá ${name}, bem vindo ao DOUTOR ESTRADA! 🚚

Eu compreendo que as 
informações oferecidas são 
informativas de acordo com
o ministério da saúde e não
substituem o atendimento 
presencial do profissional 
de saúde. 🩺

     - Sim
     - Não
`;

  if (
    body === "oi" ||
    body === "ola" ||
    body === "tudo bem" ||
    body === "hey" ||
    body === "hi"
  ) {
    res = initTalk;
  } else if (
    body === "1" ||
    body === "sim" ||
    body === "s" ||
    body === "ok" ||
    body === "certo"
  ) {
    res = `
    😄 Certo, então vamos prosseguir ...

    Me informe por gentileza o seu genero
    (isso é importante, pois isso lhe ajuda 
    ter respostas mais precisas) 🤓


        - Masculino
        - Femimnino
    `;
  } else if (body === "2" || body === "nao" || body === "não" || body === "n") {
    res =
      "É uma pena, então fica para uma proxima a nossa conversa, até mais 👋";
  } else if (
    body === "masculino" ||
    body === "masc" ||
    body === "1" ||
    body === "2" ||
    body === "feminino" ||
    body === "femi"
  ) {
    res = `
        😃 Qual a sua idade?

        • 25-30 ANOS
        • 31-35 ANOS
        • 36-40 ANOS
        • 41-45 ANOS
        • 46-50 ANOS
        • 52-55 ANOS
        • 56-60 ANOS
        • 61-65 ANOS
        • > 65 ANOS
    `;
  } else if (body >= 5) {
    res = `
    🥳 Perfeito, agora ja tenho tudo do que preciso!

    Agora conte-me o que esta acontecendo.. 🧐
    `;
  } else if (
    body.includes("urina") ||
    body.includes("corrimento") ||
    body.includes("secreção") ||
    body.includes("amarelo") ||
    body.includes("mijar") ||
    body.includes("urinando")
  ) {
    res = `
    🤔 Isso parese ser muito serio, eu consegui a seguinte informação!

    • Liquido amarelo, ou corrimento no canal 
    da urina, com ou sem ardência para urinar,
    pode ser o início de infecção bacteriana 
    na bexiga, próstata, ou doença transmitida 
    pelo sexo (se você teve relação sexual sem
    camisinha nos últimos tempos).

    você pode comparecer à uma cta (centro de
    triagem diagnóstica )unidade básica de
    saúde para realização de exames de
    sangue e/ou urina, testes rápidos, 
    e receber a receita de antibioticos em
    pouco tempo. é rapido e necessário!
      `;
  } else {
    res =
      'Desculpe nao consigo entender a sua mensagem! 😔 \n Que tal começarmos com um "Oi" 😇';
  }

  return res;
};

module.exports = messageModel;
