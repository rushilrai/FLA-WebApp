# Schema for FA Models

## DFA Schema

```json
{
    "inputs": [],
    "inputstate": ,
    "finalstates": [],
    "transit-table": {
        "": [],
        "": [],
    }
}
```

* No. of key-value pairs in `transit-table` must be equal to length of `states`.

* There must be exactly one `inputstate`.

* Length of each value (for any state) in `transit-table` must be equal to length of inputs.

* List of transition output states must match the index of of `inputs`

## NFA Schema

```json
{
    "inputs": [],
    "inputstate": ,
    "finalstates": [],
    "transit-table": {
        "": [],
        "": [],
    }
}
```

* No. of key-value pairs in `transit-table` must be equal to length of `states`.

* There must be exactly one `inputstate`.

* Length of each value (for any state) in `transit-table` may not be equal to length of inputs.

* List of transition output states must match the index of of `inputs`.
