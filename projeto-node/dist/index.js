"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Adiciona o path de assets
//app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "public")));
app.use(express_1.default.static(path_1.default.resolve(process.cwd(), "public")));
// Habilita a leitura de dados em JSON no POST
app.use(express_1.default.json());
// Habilitar a leitura de dados vindos de formulários
app.use(express_1.default.urlencoded({ extended: true }));
// Configura para uso do PUG Templates
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "templates"));
const port = 3030;
app.get("/", (req, res) => {
    // HOME é o nome do arquivo dentro do diretório de templates
    res.render("home", {
        titulo: "Página em PUG",
        nome: "Cícero Feijó",
        idade: 12,
        cidades: ["Alvorada", "Gravataí", "Porto Alegre", "Torres"],
    });
});
app.get("/clientes", (req, res) => {
    res.render("clientes", {
        titulo: "Página de clientes",
    });
});
app.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        titulo: "Cadastro",
    });
});
app.post("/cadastro", (req, res) => {
    const { nome, email } = req.body;
    res.render("cadastro-recebido", {
        titulo: "Cadastro Recebido",
        nome,
        email,
    });
});
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
//# sourceMappingURL=index.js.map