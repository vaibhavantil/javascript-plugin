import React from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  return (
    <Grammarly clientId={demoClientId}>
      <h2>Textarea</h2>
      <GrammarlyEditorPlugin>
        <textarea defaultValue={demoText}></textarea>
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
