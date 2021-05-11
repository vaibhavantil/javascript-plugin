import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";

import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const [value, setValue] = useState(demoText);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <GrammarlyEditorPlugin clientId={demoClientId}>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <Editable placeholder="Enter some plain text..." />
      </Slate>
    </GrammarlyEditorPlugin>
  );
};
