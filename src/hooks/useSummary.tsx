import { useTransaction } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export function useSummary() {
  const { transactions } = useTransaction()

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        }

        if (transaction.type === 'outcome') {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transactions])

  return summary
}
