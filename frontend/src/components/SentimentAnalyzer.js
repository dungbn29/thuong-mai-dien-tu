import React, { useState } from "react";
import { analyzeSentiment } from "../services/sentimentService";

const SentimentAnalyzer = () => {
    const [text, setText] = useState("");
    const [sentiment, setSentiment] = useState("");

    const handleAnalyze = async () => {
        const result = await analyzeSentiment(text);
        setSentiment(result);
    };

    return (
        <div>
            <h2>Sentiment Analysis</h2>
            <textarea
                rows="4"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập văn bản..."
            />
            <br />
            <button onClick={handleAnalyze}>Analyze</button>
            {sentiment && <h3>Result: {sentiment}</h3>}
        </div>
    );
};

export default SentimentAnalyzer;
