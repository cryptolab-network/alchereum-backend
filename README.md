# Alchereum Signer

## Build

Put a file containing a json array to `/config/whitelist.json` folder, for example

```json
[
  "0x44541A6c3ed49bC7D36CFB464f986899Fa567753",
  "0x0c1cf31A3260c4F5c1e79ba2196617Eb070b6EE5"
]
```

## Run

`npm run start`

## Usage

POST `http://[your IP]:8080/api/sign` 
with a json body
```json
{
  "sender": "ETH Address"
}
```

to get a whitelist signature

POST `http://[your IP]:8080/api/whitelist`
with a json body
```json
{
  "account": "ETH Address
}
```

to verify whether an address is whitelisted
