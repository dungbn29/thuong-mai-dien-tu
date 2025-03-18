from flask import Flask, request, jsonify
from ai_model import analyze_sentiment

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data.get("text", "")
    sentiment = analyze_sentiment(text)
    return jsonify({"sentiment": sentiment})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
