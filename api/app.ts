import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//dotenv
dotenv.config({
  path: './config/env/config.env',
});

const app = express();

const MONGO_URI = process.env.MONGO_URI;
//Database
mongoose
  .connect(MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDb Connection Succesful');
  })
  .catch((error) => console.error(error));

const PORT = 4000;
var root = {
  hello: () => {
    return 'QraphQL Learning Demo';
  },
};

app.use(
  '/qraphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: GraphQL Server is running at http://localhost:${PORT}/qraphql`
  );
});
