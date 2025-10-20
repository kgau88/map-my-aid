import os
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GOOGLE_AI_STUDIO_API_KEY")

def query_ai_studio(prompt: str) -> str:
    url = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"
    params = {"key": API_KEY}  # API key goes here
    payload = {
        "prompt": {"text": prompt},
        "temperature": 0.2,
        "maxOutputTokens": 256
    }

    response = requests.post(url, params=params, json=payload)
    if response.status_code == 200:
        data = response.json()
        return data.get("candidates", [{}])[0].get("output", "")
    else:
        print("Error:", response.status_code, response.text)
        return "Failed to get response from AI Studio."


