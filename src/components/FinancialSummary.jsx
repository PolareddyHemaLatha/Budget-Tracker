import React from "react";
function FinancialSummary({transaction}){
    // calculate total income if user input type is income 
    const totalIncome = transaction
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, curr) => acc+ curr.amount,0)
    const totalExpense = transaction
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, curr) => acc+ curr.amount,0)

    // calculate the net Savings 
    const netSavings = totalIncome- totalExpense;
    // netSavings = negative ?? loss
    // netSavings =positive ?? profit
    return(
        <div>
        <h3>👝Total Income: ${totalIncome.toFixed(2)}</h3>
        <h3>💳 Total Expenses: ${totalExpense.toFixed(2)} </h3>
        <h3>🌱 🤑 Net Savings: ${netSavings.toFixed(2)}</h3>
        </div>
    )

}

export default FinancialSummary;