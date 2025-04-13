import express, { Request, Response } from "express";

const app = express();
// Habilita a leitura de dados em JSON no POST
app.use(express.json());
// Habilitar a leitura de dados vindos de formulários
app.use(express.urlencoded({ extended: true }));
const port = 3030;

app.get("/", (req: Request, res: Response): void => {
  res.send("GET Hello World com Express usando TS!");
});

// Tratando dados vindos via QueryString
app.get("/clientes", (req: Request, res: Response): void => {
  const { nome, idade } = req.query as { nome: string; idade: string };

  res.send(`GET Clientes: ${nome} - ${parseInt(idade)}`);
});

// Tratando os dados vindos via parametros de URL
app.get("/clientes/:id", (req: Request, res: Response): void => {
  const { id } = req.params as { id: string };

  res.send(`GET Clientes com parametro - id: ${id}`);
});

// Tratando os dados vindos via POST
app.post("/clientes", (req: Request, res: Response): void => {
  const { nome, idade, genero } = req.body as {
    nome: string;
    idade: string;
    genero: string;
  };
  let mensagem = "";

  if (parseInt(idade) >= 18) {
    mensagem = "Já pode ter habilitação";
  } else {
    mensagem = "Ainda não pode ter habilitação";
  }

  let texto = "POST Clientes <br/>";
  texto += `Nome: ${nome} <br/>`;
  texto += `Idade: ${idade} <br/>`;
  texto += `Genêro: ${genero} <br/>`;
  texto += mensagem;

  res.send(texto);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
