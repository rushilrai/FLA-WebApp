# module imports
from finite_automata import DFA, NFA

# flask imports
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

# app setup
app = Flask(__name__)
CORS(app, support_credentials=True)

# default route | returns all endpoints
@app.route('/')
def defaultEndpoint():
    return render_template('index.html')

# dfa route | returns string accepted by given model or not
@app.route('/dfa', methods=['GET', 'POST'])
def dfa():
    if request.method == 'GET':
        return render_template('dfa.html')
    dfa_recv = request.json
    print(dfa_recv)
    dfa = DFA(dfa_recv['model'])
    accepted = dfa.checkInput(dfa_recv['input'])
    dfaOutput = {
        "output": accepted
    } 
    print(dfaOutput)
    return jsonify(dfaOutput)

# nfa route | returns string accepted by given model or not
@app.route('/nfa', methods=['GET', 'POST'])
def nfa():
    if request.method == 'GET':
        return render_template('nfa.html')
    nfa_recv = request.json
    nfa = NFA(nfa_recv['model'])
    accepted = nfa.checkInput(nfa_recv['input'])
    dfaOutput = {
        "output": accepted
    }
    return jsonify(dfaOutput)

# know more page for team and project info
@app.route('/more', methods=['GET'])
def know_more():
    return render_template('know_more.html')

# app run
if __name__ == '__main__':
    # for hot reload and tracking static files and templates
    from os import path, walk

    extra_dirs = ['templates/', 'static/']
    extra_files = extra_dirs[:]
    for extra_dir in extra_dirs:
        for dirname, dirs, files in walk(extra_dir):
            for filename in files:
                filename = path.join(dirname, filename)
                if path.isfile(filename):
                    extra_files.append(filename)

    # flask app run
    app.run(debug=True, extra_files=extra_files)