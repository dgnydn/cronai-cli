#!/usr/bin/env node
export default async function main() {
  var args = process.argv.slice(2).join(" ");
  if (args.length == 0) {
    console.log("No arguments provided");
    return;
  }

  const request = await fetch("https://cron-ai.vercel.app/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: args,
    }),
  });

  const response = await request.json();
  const cron = response.result.replace("\n  ", "");
  console.log(cron);
}

main();
