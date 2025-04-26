const { createEmbedding } = require("../utils/embeddingService")

const { upsertVector,
    queryVector,
    initializeIndex, } = require("../utils/pineconeServices")

const dummyChatController = async (req, res, next) => {
    try {
        const msg = req.body.message.toLowerCase();
        const emb = await createEmbedding(msg);
        console.log(emb)
        let reply = 'hello embedding';
        // initializeIndex();
        // upsertVector(emb, msg)
        const helo = await queryVector(emb,msg ,1);
        // switch (msg) {
        //     case "hello":
        //         reply = "Hy! How can I help you today!";
        //         break;
        //     case "how are you":
        //         reply = "I'm good! Whats about you?";
        //         break;
        //     default:
        //         reply = "I can't understand your message trying to improve myself. Thank you!"
        //         break;
        // }
        res.status(200).json({
            status: "success",
            message: helo
        })
    } catch (error) {
        next(error);
    }
}

module.exports = dummyChatController;