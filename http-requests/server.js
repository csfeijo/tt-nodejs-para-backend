import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const instrutor = "Cícero Feijó";
    const total = (1000 + 1000) * 2;

    res.end(
      `Hello World - Turma de NodeJS - Instrutor: ${instrutor} - Total do cálculo ${total}`
    );
  } else {
    res.end("Página não encontrada!");
  }
});

const port = 3030;
server.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}`);
});
