const polka = require("polka");
const next = require("next");
const { postgraphile } = require("postgraphile");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let db = "postgres";

if (process.env.NODE_ENV === "test") {
  db = "test";
}

app.prepare().then(() => {
  polka()
    .use(
      postgraphile(
        process.env.DB_URL ||
          `postgres://postgres:postgres@localhost:5432/${db}`,
        "public",
        {
          watchPg: dev,
          graphiql: true,
          enhanceGraphiql: dev,
          subscriptions: true,
          exportGqlSchemaPath: "./graphql/schema.graphql"
        }
      )
    )
    .all("*", (req, res) => handle(req, res))
    .listen(3000, err => {
      if (err) throw err;
      console.log("READY! LGTM!");
    });
});
