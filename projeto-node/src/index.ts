import express, { Request, Response } from "express";

const app = express();
const port = 3030;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World com Express usando TS!");
});

app.get("/json", (req: Request, res: Response): void => {
  const aluno = {
    nome: "Cícero",
    dt_nascimento: "1981-09-22",
  };

  //res.sendStatus(301);
  res.status(200).json(aluno);
});

app.get("/pdf", (req: Request, res: Response): void => {
  res.contentType("application/pdf");

  res.send("Deveria ser um PDF, mas vai dar erro!");
});

app.get("/xml", (req: Request, res: Response): void => {
  res.contentType("application/xml");

  const xml = `<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
  </note>`;

  res.send(xml);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
