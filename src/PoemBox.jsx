import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { poemStyles } from './styles.js';
import { getErrorMessage } from "./utils/errorMessages";

export default function PoemBox() {
    const [response, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [selectedPoet, setSelectedPoet] = useState("");
    const [styleIndex, setStyleIndex] = useState(0);

    const fetchPoem = async (poetName) => {
        try {
            const basePrompt = "write a short poem about an aspect of nature";
            const stylePrompt = poetName ? ` in the style of ${poetName}` : "";
            const finalPrompt = basePrompt + stylePrompt;

            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(finalPrompt);
            const text = result.response.text();
            setResponse(text);
            setError(null);
            setPoem(result.response.text());
        } catch (err) {
            console.error("API Error:", err);    
            const errorMessage = getErrorMessage(err); 
            setResponse(errorMessage);
            setError(errorMessage);
        }
    };
    
    // This useEffect will run when `selectedPoet` changes
    useEffect(() => {
        fetchPoem(selectedPoet);
    }, [selectedPoet]);

    // This useEffect handles the style and the timer
    useEffect(() => {
        const poemIntervalId = setInterval(() => {
            setStyleIndex((prevIndex) => (prevIndex + 1) % poemStyles.length);
        }, 120000); // 2 minutes

        return () => {
            clearInterval(poemIntervalId);
        };
    }, []);

    // This useEffect handles applying the styles to the body
    useEffect(() => {
        document.body.style.backgroundColor = poemStyles[styleIndex].background;
        document.body.style.color = poemStyles[styleIndex].color;
    }, [styleIndex]);

    return (
        <div className="poem-container" style={{ fontFamily: poemStyles[styleIndex].fontFamily }}>
            <input 
                type="text" 
                placeholder="Enter a poet's name" 
                value={selectedPoet}
                onChange={(e) => setSelectedPoet(e.target.value)}
            />
            {error ? <p>{error}</p> : <p>{response}</p>}
        </div>
    );
}
