import { FC, useCallback } from "react";
import styled from "styled-components";

const berries = ["Berry", "Gold Berry", "Mint Berry"];

const BerryTitle = styled.h1`
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
`;

const BerrySelecter = styled.select`
  height: 40px;
  width: 300px;
`;

export const BerrySelect: FC<any> = ({ onBerrySelected, selectedBerry }) => {
  const handleBerrySelected = useCallback((e: any) => {
    onBerrySelected(e.currentTarget.value);
  }, []);

  return (
    <>
      <BerryTitle>Select Berry:</BerryTitle>

      <BerrySelecter value={selectedBerry} onChange={handleBerrySelected}>
        {berries.map((berry) => (
          <option key={berry} value={berry}>
            {berry}
          </option>
        ))}
      </BerrySelecter>
    </>
  );
};
