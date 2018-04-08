# ProtoJsonView

A JsonView component working with ProtoBuf for React

![](https://travis-ci.org/HuQingyang/ProtoJsonView.svg?branch=master)

## Features

- Parsing JSON string with big number to ProtoBuf schema
- Documentation tips
- Pretty UI with color schema

## Preview

![Preview](preview.png)

## Install

`npm i -S proto-json-view`

## Example

```jsx harmony
import React from 'react';
import { render } from 'react-dom';
import ProtoJsonView from '../../';

import './index.scss';


const source = '{"retCode":144115199742103.334,"isValid":false,"list":[1, 2, 3],"retData":{"respBodyMsg":{"users":[{"uid":2639271515,"class_id":0,"ts":1522659325},{"uid":144115199742103334,"class_id":0,"ts":1522728716,"uid_type":2}],"shards":1,"tid":2000006564,"cid":76629},"respHeader":{"time":324,"remote":"/10.60.38.128:35770","errmsg":"","errcode":0}},"retMsg":null}';

const App = () => (
  <ProtoJsonView
    src={source}
    collapsed={false}
    rootName="ROOT"
  />
);

const container = document.createElement('div');
document.body.appendChild(container);

render(<App />, container);
```

## PropTypes

- **src: String | Array | Object** Field infos  
- **rootName: String (Optional)** Displayed name of root node  
- **collapsed: Boolean | Int (Optional)** "True" to collapse all nodes; "False" to expand all nodes, number to expand nodes with the specified nested depth  
- **mode: "proto" | "json" (Optional)** Default to "proto", passing "json" to use it as ordinary JsonView