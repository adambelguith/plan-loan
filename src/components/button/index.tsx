import React from "react"
import { ButtonProps } from "./types"
import "./styles.css"

export const Button = ({ text }: ButtonProps) => {
    return <button className="btn">{text}</button>
}
