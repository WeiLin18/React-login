import React from "react";
import LoginSection from "./pages/LoginSection";
import { CardProvider } from "./CardContext";
const App = () => {
  return (
    <div className="App">
      <CardProvider>
        <LoginSection />
      </CardProvider>
    </div>
  );
};

export default App;
