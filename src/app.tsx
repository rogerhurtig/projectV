import React from "react";

interface AppProps {
  todo: number
}

const App = ({ todo }: AppProps) => {
  return (
    <div>
      {todo}
    </div>
  );
};

export default App;
