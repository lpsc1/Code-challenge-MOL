import React from "react";

import * as S from "./styles";

interface EmailCardsProps {
  array: string[];
  onClick: (item: string) => void;
}

export function Cards({ array, onClick }: EmailCardsProps) {
  return (
    <S.Container>
      {array.map((item) => (
        <S.EmailBox key={item}>
          <S.EmailText>{item}</S.EmailText>
          <S.ButtonDelete type="button" onClick={() => onClick(item)}>
            <S.Image src="/delete.svg"/>
          </S.ButtonDelete>
        </S.EmailBox>
      ))}
    </S.Container>
  );
}
