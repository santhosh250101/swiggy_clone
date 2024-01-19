import React from "react";
import ReactDOM from "react-dom/client";

// this heading is a react element, it is ultimately an object when it renders on dom it is html elememt
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1>JSX HEADING</h1>;

const Heading = ()=>{
    return <h1>My functional Component</h1>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<Heading/>)
