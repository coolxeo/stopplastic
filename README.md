# StopPlastic.app

## Why StopPlastic.app?
We are acumulating plastic everywhere and there are already lot of alternatives. By creating projects and providing them with support we contribute to reduce the problem of the plastic waste

The idea is that project creators can come to the platform to promote their projects. The visitors of the website can contribute with micro donations to these projects

The project uses Money Button and Unwriter fantastic tools(BitDB, Datapay and Databutton)

## How to run the project?
The project is just a react application, you can run a developer version by running
```shell
npm install
npm start
```

## Where to find the code?
Code was generated from Divjoy using Bulma as a CSS Framework. There is two main components with custom code:

### src/coreComponents/CreateProject/index.js
This component is a form that uses **MoneyButton** to push data to blockchain. Every time the user change some of the values of the form, a new **Moneybutton** is generated through **Databutton** using the function `refreshMoneyButton` we push the following data into blockchain:
- image
- title
- description
- url
- to

Here is an example of a transaction
https://whatsonchain.com/tx/cb64fcf144fba772d27df8e62a5b071b8ac18cfacef9221fbee8231fbd66bc40

### src/components/ContentCards/index.js
This component is the list of projects. At the initialization we call the function `fillContentCards` that fetch data from **BitDB**. We retry 10 transactions with a query for outputs with s2 that equals to **"stopplastic.app"**

https://genesis.bitdb.network/query/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnMyIjogInN0b3BwbGFzdGljLmFwcCIKICAgIH0sCiAgICAibGltaXQiOiAxMAogIH0KfQ==
```json
{
  "v": 3,
  "q": {
    "find": {
      "out.s2": "stopplastic.app"
    },
    "limit": 10
  }
}
```

After the query is executed we join outputs (confirmed & unconfirmed) and filter by projects that have image, title and description




## Origins
This project was created as a part of August 2019 Bitcoin Association Hackaton by Daniel Garcia Acosta (coolxeo@moneybutton.com)
