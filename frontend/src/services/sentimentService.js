export const analyzeSentiment = async (text) => {
    try {
        const response = await fetch("http://localhost:8080/api/sentiment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        return data.sentiment;
    } catch (error) {
        console.error("Error:", error);
        return "Error";
    }
};
