# Schema for Server API Endpoints

## GET /

* Returns all available endpoints

```json
{
    "all-endpoints": [
        "GET /",
        "POST /dfa",
        "POST /nfa"
    ]
}
```

## POST /dfa

* Takes [DFA Model](https://github.com/rushilrai/FLA-WebApp/blob/master/SCHEMA.md#dfa-schema) and example input string as parameters

```json
{
    "model": {
        "inputs": [],
        "inputstate": ,
        "finalstates": [],
        "transit-table": {
            "": [],
            "": [],
        }
    },
    "input": ""
}
```

* Returns whether the string has been accepted or not. Returns error (if any).

```json
{
    "accepted": "True"
}

OR

{
    "error": ""
}
```

## POST /nfa

* Takes [NFA Model](https://github.com/rushilrai/FLA-WebApp/blob/master/SCHEMA.md#nfa-schema) and example input string as parameters

```json
{
    "model": {
        "inputs": [],
        "inputstate": ,
        "finalstates": [],
        "transit-table": {
            "": [],
            "": [],
        }
    },
    "input": ""
}
```

* Returns whether the string has been accepted or. Returns error (if any).

```json
{
    "accepted": ""
}

OR

{
    "error": ""
}
```
