import { Client, query } from "faunadb";

const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});

const q = query;
export { fauna, q };
