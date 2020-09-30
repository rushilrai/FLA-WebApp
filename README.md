# FLA Web Application Backend API

API for simulating FA Models powering the F.L.A.P. Web App.

## Getting Started

* Fork this repository
* Clone your repository forked from this one

```bash
git clone https://github.com/:username/FLA-WebApp
```

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
* The schema and rules for each FA Model can be found at [FA_SCHEMA.md](https://github.com/rushilrai/FLA-WebApp/blob/master/FA_SCHEMA.md).
* The input schema for requests to the API can be found at [API_SCHEMA.md](https://github.com/rushilrai/FLA-WebApp/blob/master/API_SCHEMA.md).
