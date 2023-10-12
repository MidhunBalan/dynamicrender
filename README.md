# Dynamic Render In React Application

This repo will teach how to to load your react application from a JSON configuration. 

First you need to understand, why we need to go for the dynamic rendering. 
1. Code Reusability: You can make reusable components using dynamic rendering
2. Just update the configuration after the base setup is done, so that, it will dynamically render. 

## How we are doing this?
This can be achieve using React.createElement 


Step 1: 
Create two components first: 
1. Card
2. Button

`Card.jsx`
```
import React from "react";

function Card({ children }) {
  return (
    <React.Fragment>
      <div>Main</div>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default Card;

```
Then 
`Button.jsx`

```
import React from "react";

function Button() {
  return <div>MyButton</div>;
}

export default Button;

```

Step 2: 
Create a json configuration for your app

`AppConfig.js`

```
export const APP_CONFIG = [
  {
    component: "card",
    children: [
      {
        component: "button",
        children: "hello",
      },
    ],
  },
];

```
Step 3: 
Map your component to a key

`KeysToComponentMap.jsx`

```
import Button from "../components/Button";
import Card from "../components/Card";

export const KeysToComponentMap = {
  card: Card,
  button: Button,
};

```

Step 4: 
Add a dynamic render component

`DynamicRender.jsx`

```
import React from "react";
import { KeysToComponentMap } from "../app_config/KeysToComponentMap";

function DynamicRender(config) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {},
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => DynamicRender(c)))
    );
  }
  return null;
}

export default DynamicRender;
```


Step 5:
Call this in your `App.js` file using React.createElement

```
import { APP_CONFIG } from "./app_config/AppConfig";
import DynamicRender from "./dynamic/DynamicRender";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        {APP_CONFIG.map((config) => DynamicRender(config))}
      </div>
    </div>
  );
}

export default App;

```

