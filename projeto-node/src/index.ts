import express, { Request, Response } from "express";
import path from "path";

const app = express();
// Adiciona o path de assets
app.use(express.static("public"));
// Habilita a leitura de dados em JSON no POST
app.use(express.json());
// Habilitar a leitura de dados vindos de formulários
app.use(express.urlencoded({ extended: true }));
// Configura para uso do PUG Templates
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));

const port = 3030;

app.get("/", (req: Request, res: Response): void => {
  // HOME é o nome do arquivo dentro do diretório de templates

  res.render("home", {
    titulo: "Página em PUG",
    nome: "Cícero Feijó",
    idade: 12,
    cidades: ["Alvorada", "Gravataí", "Porto Alegre", "Torres"],
  });
});

app.get("/clientes", (req: Request, res: Response): void => {
  res.render("clientes", {
    titulo: "Página de clientes",
  });
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
