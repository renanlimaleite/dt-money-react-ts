import * as S from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={20} color="#88b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={20} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={20} color="#fff" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
}
