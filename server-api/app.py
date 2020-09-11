# module imports
from utils import message, debug

# flask imports
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

# app setup
app = Flask(__name__)
CORS(app, support_credentials=True)

# default route | returns all endpoints
@app.route('/')
def defaultEndpoint():
    defaultResponse = {
        "all-endpoints": [
            "GET /",
            "GET /dfa",
            "GET /nfa",
            "GET /download-model",
            "POST /upload-model"
        ]
    }
    return jsonify(defaultResponse)

# dfa route | returns string accepted by given model or not
@app.route('/dfa', methods=['GET'])
def dfa():
    dfaOutput = {
        "output": 1
    }
    return jsonify(dfaOutput)

# nfa route | returns string accepted by given model or not
@app.route('/nfa', methods=['GET'])
def nfa():
    dfaOutput = {
        "output": 1
    }
    return jsonify(dfaOutput)

# # download automata models
# @app.route('/download-model', methods=['POST'])
# def downloadModel():
#     return None

# # upload ext models
# @app.route('/upload-model', methods=['POST'])
# def uploadModel():
#     return None

# app run
if __name__ == '__main__':
    app.run(debug=True)