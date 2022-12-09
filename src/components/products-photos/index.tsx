import React, { SetStateAction } from "react"
import "./styles.css"

type ProductPhotoProps = {
    products: []
    setSelectedProductId: React.Dispatch<SetStateAction<undefined | string>>
}

export const ProductPhoto = ({ products, setSelectedProductId }: ProductPhotoProps) => {
    return (
        <div className="gobal-prod">
            {products.map((product: any) => {
                const str = product.image
                return (
                    <button
                        className="btn-photo"
                        key={product.id}
                        onClick={() => setSelectedProductId(product.id)}>
                        <img src={str} className="img-travel" />
                    </button>
                )
            })}
        </div>
    )
}
