from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import json

openai.api_key = "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"

app = Flask(__name__)
CORS(app)

def simulate_conversation(personality, user_messages):
    messages = [
        {"role": "system", "content": "You are a chatbot that simulates a conversation with the personality described. Please respond in a manner consistent with this personality's known communication style."}
    ] + user_messages

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages
        )

        return response.choices[0].message["content"]
    except Exception as e:
        print(f"An error occurred: {e}")
        return ""
#Members API route
@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/gpt", methods=['POST'])
def gpt():
    data = request.get_json()
    user_question = data.get('question')
    #return jsonify(user_question)

    #new code------
    if user_question:
        conversation_history = [{"role": "user", "content": user_question}]
        personality = data.get('personality', "Elon Musk")  # Default personality
    
        response = simulate_conversation(personality, conversation_history)

        return jsonify({"response": response})

    return jsonify({"error": "Invalid request"}), 400


if __name__ == "__main__":
    app.run(debug = True)
