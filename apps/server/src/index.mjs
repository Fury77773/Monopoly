// Serveur bootstrap; à remplacer par Fastify/TypeScript au jalon J0.
import { createServer } from 'node:http';
const port=Number(process.env.PORT || 3001);
createServer((req,res)=>{res.setHeader('content-type','application/json');if(req.url==='/health'){res.end(JSON.stringify({status:'ok',stage:'bootstrap'}));}else{res.statusCode=404;res.end(JSON.stringify({error:'not_found'}));}}).listen(port,process.env.HOST || '0.0.0.0');
