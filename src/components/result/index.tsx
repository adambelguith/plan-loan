import LoanPage from "@screens/loan"
import React, { useEffect, useState } from "react"
import "./styles.css"

type ResultType = {
    amount: number
    count: number
    interest: number
}

export const Result = ({ amount, count, interest }: ResultType) => {
    let totalAmount: number = Number(Number(amount) + Number(amount) * Number(interest))
    let monthlyAmount: number = totalAmount / count

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const da = new Date()
    let monthss = da.getMonth()

    let monthsse = Number(monthss) + Number(count)
    let ye = da.getFullYear()

    while (monthsse > 11) {
        ye += 1
        monthsse = monthsse - 11
    }

    let nameMonth = month[monthsse]

    return (
        <div className="result">
            <div className="result-headline">
                <h2>Monthly amount</h2>
                <span>${monthlyAmount}</span>
            </div>
            <p className="p-result">
                You’re planning {count} <span>monthly deposits</span> to reach your{" "}
                <span>${monthlyAmount}</span> goal by{" "}
                <span>
                    {" "}
                    {nameMonth} {ye}{" "}
                </span>
                . The total amount loaned will be <span>${totalAmount}</span>
            </p>
        </div>
    )
}
