import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import * as S from "./styles";

interface Transactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: 'number';
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <S.PriceHighlight variant={transactions.type}>
                      {transactions.price}
                    </S.PriceHighlight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{transactions.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
