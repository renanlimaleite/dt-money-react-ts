import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Transactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[]
}

const TransactionContext = createContext<TransactionContextType | null>(null);

interface TransactionsProviderType {
  children: ReactNode;
}

export function TransactionsProvider({children}: TransactionsProviderType) {
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
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('You should use the TransactionProvider')
  }

  return context;
}