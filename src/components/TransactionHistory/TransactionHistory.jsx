import PropTypes from 'prop-types';
import {TransactionTable,TableBody,TableTd,TableHead,TableTr,} from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
  return <TransactionTable >
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </tr>
  </thead>
  <TableBody> 
    {items.map(({id,type,amount,currency}) => <TableTr key={id}>
          <TableTd>{type}</TableTd>
          <TableTd>{amount}</TableTd>
          <TableTd>{currency}</TableTd>
    </TableTr>)}       
  </TableBody>
</TransactionTable>
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
}