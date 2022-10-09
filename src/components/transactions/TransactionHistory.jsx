import PropTypes from 'prop-types'
import { Table, Thead, TheadTh, TbodyTr, TbodyTh } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return <Table className="transaction-history">
  <Thead>
    <tr>
      <TheadTh>Type</TheadTh>
      <TheadTh>Amount</TheadTh>
      <TheadTh>Currency</TheadTh>
    </tr>
  </Thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) =>
                <TbodyTr key={id}>
                    <TbodyTh>{type}</TbodyTh>
                    <TbodyTh>{amount}</TbodyTh>
                    <TbodyTh>{currency}</TbodyTh>
                </TbodyTr>)}
  </tbody>
</Table>
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}