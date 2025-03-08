import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

 
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 4000;  

 
app.use(express.static(path.join(__dirname, '../public')));

 
const openai = new OpenAI({
  // apiKey: "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",
  baseURL: "https://models.inference.ai.azure.com",  
});

 
app.get('/chat', async (req, res) => {
  const userMessage = req.query.message;

  if (!userMessage) {
    return res.status(400).send("Message is required");
  }

  try {
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userMessage },
      ],
      temperature: 1.0,
      max_tokens: 1000,
    });

     
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).send("Error processing request");
  }
});

 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
