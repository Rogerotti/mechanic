import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';

// const Index = () => {
//   return <div>TEST</div> //<App brands={[]} models={[]} cities={[]} />;
// };

ReactDOM.render(<App brands={[]} models={[]} cities={[]} />, document.querySelector('#root'));