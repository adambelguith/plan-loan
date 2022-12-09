import { LoanCard } from "@components/loan-card"
import React from "react"
import "./styles.css"

const LoanPage = () => {
    return (
        <div className="loan-page">
            <h1>
                Let's plan your <span>loan</span>.
            </h1>
            <LoanCard />
        </div>
    )
}

export default LoanPage
