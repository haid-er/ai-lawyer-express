
const { OpenAI } = require("openai")

const key = process.env.OPENAI_API_KEY;

const createOpenAIConnection = () => {
    try {
        const res = new OpenAI({
            apiKey: key,
        });
        // console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createOpenAIConnection }