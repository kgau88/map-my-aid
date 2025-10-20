from flask import Flask, request, jsonify
from ai_studio import query_ai_studio
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

@app.route("/api/query", methods=["POST"])
def handle_query():
    data = request.json
    user_question = data.get("question", "")

    if not user_question:
        return jsonify({"response": "Please provide a question."}), 400

    ai_response = query_ai_studio(user_question)
    return jsonify({"response": ai_response})

if __name__ == "__main__":
    app.run(debug=True)
