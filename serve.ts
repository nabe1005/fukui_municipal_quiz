#!/usr/bin/env -S deno run --allow-net --allow-read --watch
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveFile, serveDir } from "https://deno.land/std@0.140.0/http/file_server.ts";
import { createQuestions } from "./quiz.ts";

serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);

  if (req.method === "GET" && pathname === "/api/mock") {
    return new Response(await Deno.readTextFile("mock.json"), {
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
  }

  if (req.method === "GET" && pathname === "/api/questions") {
    const questions = createQuestions();
    return new Response(JSON.stringify(questions), {
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
  }

  if (pathname === "/") {
    return await serveFile(req, getFilePath("src/index.html"));
  }


  if (pathname === "/question") {
    return await serveFile(req, getFilePath("src/question.html"));

  if (pathname === "/styles.css") {
    return new Response(await Deno.readTextFile("./src/css/styles.css"), { headers: { "Content-Type": "text/css" } });
  }

  if (pathname.startsWith("/images")) {
    return serveDir(req, {
      fsRoot: "assets/municipal_images",
      urlRoot: "images",
      showDirListing: true,
      enableCors: true,
    });
  }

  return await serveFile(req, getFilePath("src/not-found.html"));

}, { port: 8000 });


function getFilePath(relativePath: string): string {
  return `${Deno.cwd()}/${relativePath}`;
}
