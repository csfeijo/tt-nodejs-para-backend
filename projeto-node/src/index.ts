import express, { Request, Response } from "express";
import path from "path";

const app = express();
// Adiciona o path de assets
//app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve(process.cwd(), "public")));

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

app.get("/cadastro", (req: Request, res: Response): void => {
  res.render("cadastro", {
    titulo: "Cadastro",
  });
});

app.post("/cadastro", (req: Request, res: Response): void => {
  const { nome, email } = req.body as { nome: string; email: string };
  res.render("cadastro-recebido", {
    titulo: "Cadastro Recebido",
    nome,
    email,
  });
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
