import './assets/main.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById('root'));






// import {createControlPanel} from './js/view/controlPanel/createControlPanel';
// import {SortState} from './js/controller/SortState';
// import {addPersonsInDOM} from './js/controller/addPersonsInDOM';

// const app = document.getElementById('root');
// const sortState = new SortState(app);
// const controlPanel = createControlPanel();

// app.append(controlPanel);

// sortState.installOld().then(() => {
//   sortState.save(addPersonsInDOM);
// }).then(() => {
//   sortState.change(addPersonsInDOM);
// })