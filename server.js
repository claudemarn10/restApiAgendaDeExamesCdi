
// conf de inicializacao do banco de dados fake
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(db.json);
const middlewares = jsonServer.defaults();

const port = process.env.port || 8080; // porta de conexao 

server.use(middlewares);
server.use(router);
server.listen(port,()=>{
     console.log('JSON sever is runing in ${port}');
});
