/**
 * Message model
 */

const messageModel = (body, name) => {
  let res = "";

  const initTalk = `
Olá ${name}, bem vindo ao DOUTOR ESTRADA! 🚚

EU COMPREENDO QUE AS 
INFORMAÇÕES OFERECIDAS SÃO 
INFORMATIVAS DE ACORDO COM
O MINISTÉRIO DA SAÚDE E NÃO
SUBSTITUEM O ATENDIMENTO 
PRESENCIAL DO PROFISSIONAL 
DE SAÚDE. 🩺

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

    • LIQUIDO AMARELO, OU CORRIMENTO NO CANAL 
    DA URINA, COM OU SEM ARDÊNCIA PARA URINAR,
    PODE SER O INÍCIO DE INFECÇÃO BACTERIANA 
    NA BEXIGA, PRÓSTATA, OU DOENÇA TRANSMITIDA 
    PELO SEXO (SE VOCÊ TEVE RELAÇÃO SEXUAL SEM
    CAMISINHA NOS ÚLTIMOS TEMPOS).

    VOCÊ PODE COMPARECER À UMA CTA (CENTRO DE
    TRIAGEM DIAGNÓSTICA )UNIDADE BÁSICA DE
    SAÚDE PARA REALIZAÇÃO DE EXAMES DE
    SANGUE E/OU URINA, TESTES RÁPIDOS, 
    E RECEBER A RECEITA DE ANTIBIOTICOS EM
    POUCO TEMPO. É RAPIDO E NECESSÁRIO!
      `;
  } else {
    res =
      'Desculpe nao consigo entender a sua mensagem! 😔 \n Que tal começarmos com um "Oi" 😇';
  }

  return res;
};

module.exports = messageModel;
