import express from 'express';
const router = express.Router();


router.get('/get-ai-response', (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }
    
    ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt })
        .then(response => {
            res.json({ response: response.text });
        })
        .catch(error => {
            console.error("Error generating AI response:", error);
            res.status(500).json({ error: "Failed to generate AI response" });
        });
});




export default router;