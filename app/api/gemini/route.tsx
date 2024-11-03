// app/api/gemini/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.GEMINI_API_KEY; // Ensure this is set in your .env.local
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    try {
        const data = await req.json(); // Parse the incoming request JSON

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Stringify the request body
        });

        if (!response.ok) {
            const errorDetails = await response.text(); // Capture error response
            throw new Error(`Failed to fetch from Google Generative AI: ${errorDetails}`);
        }

        const result = await response.json();
        return NextResponse.json(result); // Return the result as JSON
    } catch (error) {
        console.error('API error:', error);
        // return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
