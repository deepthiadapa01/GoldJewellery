import sqlite3
from flask import Flask, request

app = Flask(__name__)

@app.route('/login.py', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Connect to SQLite database
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Check if user exists
    cursor.execute('SELECT * FROM users WHERE username=? AND password=?', (username, password))
    user = cursor.fetchone()

    if user:
        return "Login successful!"
    else:
        return "Invalid username or password."

if __name__ == '__main__':
    app.run(debug=True)
