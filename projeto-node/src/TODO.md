- Criamos o vercel.json
  - Adicionamos uma rota para o public no vercel.json
- Alteramos o package.json em scripts:
  - O script "start" virou "dev"
  - Criamos um novo "start" que roda diretamente o node dist/index.js
  - Adicionamos instruções de cópia no "build" para copiar os assets para o diretorio "dist"
- Adicionamos um novo jeito de mapeamento do public para funcionar local e na vercel:
  - app.use(express.static(path.resolve(process.cwd(), "public")));
