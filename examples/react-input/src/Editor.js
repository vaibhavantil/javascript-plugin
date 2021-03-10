import React, { useState } from "react";

import { GrammarlyInput } from "@grammarly/react-textarea";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const [value, setValue] = useState(demoText);
  return (
    <GrammarlyInput
      clientId={demoClientId}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};
