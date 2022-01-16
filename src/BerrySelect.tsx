import { ChangeEventHandler, FC, ReactEventHandler, useCallback } from "react";
import styled from "styled-components";

const berries = ["Berry", "Gold Berry", "Mint Berry"] as const;
export type Berry = typeof berries[number];

export type BerrySelectProps = {
  selectedBerry: Berry;
  onBerrySelected: (berry: Berry) => void;
};

const BerryTitle = styled.h1`
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
`;

const BerrySelecter = styled.select`
  height: 40px;
  width: 300px;
`;

export const BerrySelect: FC<BerrySelectProps> = ({ onBerrySelected, selectedBerry }) => {
  const handleBerrySelected = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
    onBerrySelected(e.currentTarget.value as Berry);
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
