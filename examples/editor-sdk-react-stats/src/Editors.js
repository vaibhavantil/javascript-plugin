import React, { useState } from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

const StatsOutput = ({ stats }) => <pre>{JSON.stringify(stats, null, 2)}</pre>;

export const Editors = () => {
  const [stats, setStats] = useState();

  const config = {
    onTextStats: (stats) => setStats(stats),
  };
  return (
    <Grammarly clientId={demoClientId}>
      <h2>Textarea</h2>
      <GrammarlyEditorPlugin config={config}>
        <textarea defaultValue={demoText.textarea} rows={10}></textarea>
      </GrammarlyEditorPlugin>
      {stats && <StatsOutput stats={stats} />}
    </Grammarly>
  );
};
