import React, { createContext, useState } from "react";

const CardContext = createContext({
  targetCard: null,
  chooseTargetCard: null
});

export const CardProvider = ({ children }) => {
  const [targetCard, setTargetCard] = useState({ content: "" });

  return (
    <CardContext.Provider
      value={{
        targetCard,
        chooseTargetCard: (theContent) => {
          theContent && setTargetCard(theContent);
        }
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
