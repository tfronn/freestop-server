import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();

const corsOptions = {
  origin: "https://freestop-front.vercel.app/",
  "Access-Control-Allow-Origin": "https://freestop-front.vercel.app/",
  "Access-Control-Allow-Methods": "GET,POST,DELETE,HEAD,OPTIONS"
}

app.use(cors(corsOptions))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server listening!')
})