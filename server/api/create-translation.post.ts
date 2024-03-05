import fs from "fs";
import lang from "../../internationalization/pt-BR.json";
import { $openai } from "~/utils/openai";

export default defineEventHandler(async (event) => {
  const { message } = await readBody(event);
  const data = await $openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: "You only speak JSON.",
      },
      {
        role: "system",
        content: "The content of the JSON file is:\n\n" + JSON.stringify(lang),
      },
      {
        role: "system",
        content:
          "Translate only the values of the JSON file in the language define by the user",
      },
      {
        role: "system",
        content: "Provide the resutl in JSON format:\n\n",
      },
      {
        role: "user",
        content: message,
      },
    ],
    max_tokens: 4000,
    temperature: 1,
  });

  const dataTranslated = data.choices[0].message.content;
  if (dataTranslated) {
    fs.writeFileSync("internationalization/global.json", dataTranslated);
    console.log("File has been written");
    return JSON.parse(dataTranslated);
  }
});
