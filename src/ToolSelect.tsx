import React, { ChangeEventHandler, FC, useCallback } from "react";
import styled from "styled-components";

const tools = ["Keyboard", "Pen", "Coffee Mug"] as const;
export type Tool = typeof tools[number];

export type ToolSelectProps = {
  selectedTool: Tool;
  onToolSelected: (tool: Tool) => void;
};

const ToolSelector = styled.select`
  height: 40px;
  width: 300px;
`;

export const ToolSelect: FC<ToolSelectProps> = ({ onToolSelected, selectedTool }) => {
  const handleToolSelected = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      onToolSelected(e.currentTarget.value as Tool);
    },
    [onToolSelected]
  );

  return (
    <>
      <h1>Select Tool:</h1>

      <ToolSelector value={selectedTool} onChange={handleToolSelected}>
        {tools.map((tool) => (
          <option key={tool} value={tool}>
            {tool}
          </option>
        ))}
      </ToolSelector>
    </>
  );
};
