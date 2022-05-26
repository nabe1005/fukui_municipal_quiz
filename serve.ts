#!/usr/bin/env -S deno run --allow-net --allow-read --watch
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);


  if (pathname === "/") {
    return await serveFile(req, `${Deno.cwd()}/src/index.html`);
  }

  return await serveFile(req, `${Deno.cwd()}/src/not-found.html`);

}, { port: 8000 });

