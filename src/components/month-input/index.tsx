import React, { SetStateAction } from "react"
import "./styles.css"

type MonthInputProps = {
    count: number
    setCount: React.Dispatch<SetStateAction<number>>
    minTenure: number
    maxTenure: number
}

export const MonthInput = ({ count, setCount, minTenure, maxTenure }: MonthInputProps) => {
    const handelChange = (e: any) => {
        setCount(e.target.value)
    }

    const decrease = () => {
        if (count > minTenure) {
            setCount((s) => +s - 1)
        }
    }

    const increase = () => {
        if (count < maxTenure) {
            setCount((s) => +s + 1)
        }
    }

    return (
        <div className="global-month">
            <label htmlFor="" className="label1">
                Number of Months
            </label>
            <label htmlFor="" className="label2">
                Reach goal by
            </label>
            <div className="month-input">
                <button className="flesh" onClick={decrease}>
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                            fill="#8A9CA9"
                        />
                    </svg>
                </button>
                <div>
                    <input
                        type="text"
                        className="center-input"
                        value={count}
                        onChange={handelChange}
                    />
                </div>
                <button className="flesh" onClick={increase}>
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                            fill="#8A9CA9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
