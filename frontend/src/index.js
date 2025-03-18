import React from "react";
import SentimentAnalyzer from "./components/SentimentAnalyzer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <SentimentAnalyzer />
            <Footer />
        </div>
    );
}

export default App;
