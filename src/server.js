import { createServer } from "http";
import { parse } from "url";
import { randomUUID } from "crypto";

async function handler(req, res) {
  if (req.method === "GET" && req.url.includes("prod")) {
    const {
      query: { name },
    } = parse(req.url, true);
    const result = {
      id: randomUUID(),
      product: name,
    };
    return res.end(JSON.stringify(result));
  }

  return res.end("hey! 1");
}

createServer(handler).listen("3000", () => console.log("rodando 3000"));
