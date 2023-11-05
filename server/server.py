from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import json

openai.api_key = "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"

app = Flask(__name__)
CORS(app)

def simulate_conversation(personality, user_messages, bio):
    messages = [
        {"role": "system", "content": "You are a chatbot that simulates a conversation with the personality of "+personality+"described. Please respond in a manner consistent with this personality's known communication style. The current person's personality is based of this bio:" + bio}
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
        textHistory = data.get('textHistory')
        conversation_history = [{"role": "user", "content": textHistory +" Latest Question: " + user_question}]
        personality = data.get('personality', "Elon Musk")  # Default personality
        bio = data.get('bio')
        

        response = simulate_conversation(personality, conversation_history, bio)

        return jsonify({"response": response})

    return jsonify({"error": "Invalid request"}), 400


if __name__ == "__main__":
    app.run(debug = True)
