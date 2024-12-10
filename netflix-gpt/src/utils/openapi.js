// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constant";

// const openai = new OpenAI({
//     apiKey: OPENAI_KEY,
//     organization: "org-o4Z1FUQlAA6zs4AHrWXyC0mw",
//     dangerouslyAllowBrowser: true
// });

// export default openai;

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-o4Z1FUQlAA6zs4AHrWXyC0mw",
    apiKey: "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", // Replace with your API key
});

const openai = new OpenAIApi(configuration);

export default openai;