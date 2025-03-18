from transformers import pipeline

# Load mô hình phân tích cảm xúc
sentiment_model = pipeline("sentiment-analysis")

def analyze_sentiment(text):
    result = sentiment_model(text)[0]
    return result["label"]  # Trả về 'POSITIVE' hoặc 'NEGATIVE'
