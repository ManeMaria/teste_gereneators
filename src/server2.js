import { createServer } from "http";

async function handler(req, res) {
  if (req.method === "POST" && req.url.includes("cart")) {
    for await (const data of req) {
      const item = JSON.parse(data);

      console.log("received", item);

      return res.end(JSON.stringify(item));
    }
  }
 
  return res.end("hey! 1");
}

createServer(handler).listen("4000", () => console.log("rodando 4000"));
