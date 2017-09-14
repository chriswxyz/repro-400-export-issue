import { createElement } from 'react';
import { render } from 'react-dom';

// All of these import kinds fail with 4.0.0,
// but succeed with 4.0.0-rc.16

// import { SelectList } from 'react-widgets';

// import * as RW from 'react-widgets';
// const SelectList = RW.SelectList;

// import RW from 'react-widgets';
// const SelectList = RW.SelectList;

const RW = require('react-widgets');
const SelectList = RW.SelectList;

const el = document.getElementById('test');

if(!SelectList){
    debugger;
}

render(
    createElement(SelectList, {}),
    el
);