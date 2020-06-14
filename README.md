# API bot para whatsapp

## V1

Já é possivel ter uma simples interção com o `client` adicionado, e bantendo <br> na rota `/v1/send` pode estar encaminhando uma mensgem para <br> qualquer numero.. detalhes na rota `/v1` (index)

## Rodando API

<b>Baixe o repositorio</b>

> Intale as dependencias do projeto

```bash
$ yarn install
```

<br>

> Crie um arquivo `env.json` na rais do projeto e insira a porta para o servidor

```json
{
  "PORT": 5000
}
```

<br>

> Rode as migraçoes, e isso criara um banco SQLITE <br> `pode estar tambem setando um outro tipo de banco relacional`

```bash
$ npx prisma migrate up --experimental

> Após

$ npx prisma generate
```

<br>

> Após basta subir o servidor com ...

```bash
$ yarn start
```

<br>

## Rotas!

 <h2>/send</h2>

- tipo: POST <br>
- body: JSON <br>

```json
{
  "phone": "5566999999999",
  "body": "Hello brother 😎"
}
```

<h2>/conversas</h2>

- tipo: GET <br>
- body: Não possue <br>
