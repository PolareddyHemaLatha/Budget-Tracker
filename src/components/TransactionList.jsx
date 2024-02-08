import React from "react";
function TransactionList({transactions}){
    return (
        <ul>
            {/* map over all the transactions array passes as a prop to his component 
            for each transaction that is done by the user and render it inside the li tag*/}
            {transactions.map (({id, text, amount, type}) => (
                <li key={id}>
                    {/* display the transaction details here */}
                    {type === "income" ? "📈" : "📉"}{text} - ${amount} ({type})
                     </li>
            ))}
        </ul>
    )
}
export default TransactionList;