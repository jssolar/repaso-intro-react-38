import React from "react";

const Example = (props) => {
  return (
    <div>
      Example
        
        {(props.active ? " verdadero " : " inactivo ")}
    </div>
  );
};

export default Example;
