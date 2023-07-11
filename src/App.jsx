//componente de partida

import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Example from "./components/Example";

const App = () => {
  return (
    <div>
      <h1>hola dese react</h1>
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Heading className="text-danger" text="hola desde react" />
      <Paragraph />
      <Example num={1} active={true}  name={'name'} obj={{a: 1, b: 2}} notas={[1,1,2,3,4,6,5]} />
    </div>
  );
};

export default App;
