import React, { useContext } from 'react';
import { Transaction } from './Transaction';

export const TransactionList = () => {
	return (
		<>
			<h3>History</h3>
			<ul className='list'>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};
