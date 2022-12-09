import { Button } from "@components/button"
import React, { useEffect, useState } from "react"
import "./styles.css"
import { Result } from "@components/result"
import { AmountInput } from "@components/amount-input"
import { MonthInput } from "@components/month-input"
import { ProductPhoto } from "@components/products-photos"
import products from "../../../build/public/products.json"

export const LoanCard = () => {
    const [count, setCount] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
    const [minTenure, setMinTenure] = useState<number>(0)
    const [maxTenure, setMaxTenure] = useState<number>(0)
    const [minAmount, setMinAmount] = useState<number>(0)
    const [maxAmount, setMaxAmount] = useState<number>(0)
    const [interest, setInterest] = useState<number>(0)
    const [selectedProductId, setSelectedProductId] = useState<undefined | string>(undefined)

    useEffect(() => {
        let values
        if (selectedProductId === undefined) {
            values = products[0]
        } else {
            values = products.filter((p) => p.id === selectedProductId)[0]
        }

        const { min_tenure, max_tenure, min_amount, max_amount, interest } = values
        setInterest(interest)
        setMinTenure(min_tenure)
        setMaxTenure(max_tenure)
        setMinAmount(min_amount)
        setMaxAmount(max_amount)
    }, [selectedProductId])

    useEffect(() => {
        setCount(minTenure)
    }, [minTenure, maxTenure])

    useEffect(() => {
        setAmount(minAmount)
    }, [minAmount, maxAmount])

    return (
        <div className="loan-card">
            <ProductPhoto products={products} setSelectedProductId={setSelectedProductId} />
            <div className="inputs">
                <AmountInput
                    amount={amount}
                    setAmount={setAmount}
                    minAmount={minAmount}
                    maxAmount={maxAmount}
                />
                <MonthInput
                    count={count}
                    setCount={setCount}
                    minTenure={minTenure}
                    maxTenure={maxTenure}
                />
            </div>
            <Result amount={amount} count={count} interest={interest} />
            <Button text="Apply Now" />
        </div>
    )
}
