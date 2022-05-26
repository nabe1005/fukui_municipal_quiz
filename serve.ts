#!/usr/bin/env -S deno run --allow-net --watch
import { serve } from "https://deno.land/std@0.89.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello, Fukui\n" });
}
