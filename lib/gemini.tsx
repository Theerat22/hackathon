import axios from 'axios';
const GEMINI_API_URL = 'https://your-gemini-api-endpoint'; // Replace with the actual endpoint

export const createGeminiPrompt = async (prompt: string) => {
    try {
        const response = await axios.post(
            GEMINI_API_URL,
            {
                prompt: prompt,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating prompt:', error);
        throw error;
    }
};