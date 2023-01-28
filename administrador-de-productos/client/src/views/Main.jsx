import React from 'react'
import AdminProductoForm from '../components/AdminProductoForm'
import ProductoListado from '../components/ProductoListado'

const Main = () => {
    return (
        <div>
            <AdminProductoForm />
            <hr />
            <ProductoListado />
        </div>
    )
}

export default Main