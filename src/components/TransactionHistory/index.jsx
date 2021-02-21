import React from 'react';
import TransactionItem from "../TransactionItem";


const TransactionHistory = ({ items }) => (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                items.map(({ id, type, amount, currency }) => (
                    <TransactionItem
                        id={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                   /> 
                ))
                }
            </tbody>
        </table>
);


export default TransactionHistory;