import express from "express";
import graphqlHTTP from "express-graphql";

const app = express();

const PORT = 8000;

app.use("/qraphql",graphqlHTTP({
    
}))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
