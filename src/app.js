const express = require("express"); //importando, através do require, o exprerss.
const app = express(); //criando instância
const port = 3000; //definindo porta

//criar rota padrão (raiz)
app.get("/", (req, res) => {
  res.send("Teste de mudança de texto");
});

//escutar porta
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
