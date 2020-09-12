# FLA Web Application

Flask-React Web Application for simulating Finite Automata.

## Getting Started

* Fork this repository
* Clone your repository forked from this one

```bash
git clone https://github.com/:username/FLA-WebApp
```

### React Frontend

* To run the React-based frontend change directory to `client-app`.

```bash
cd client-app
```

* Install all `npm` libraries.

```bash
npm install
```

* Run the included development server.

```bash
npm start
```

* You can view the frontend at `localhost:3000/` in your browser.

### Flask Backend

* To run the Flask-based backend API change directory to `server-api`.

```bash
cd server-api
```

* Install all `pip` libraries.

```bash
pip install requirements.txt
```

* Run the included development server.

```bash
python app.py
```

* You can view the frontend at `localhost:5000/` in your browser.

## Schema

* The API is capable of simulating FA Models (currently NFA and DFA).
* The input schema for requests to the API can be found at [SCHEMA.md](https://github.com/rushilrai/FLA-WebApp/blob/master/SCHEMA.md).
