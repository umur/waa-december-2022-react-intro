import Products from "../products/Products"

const products = [
    { id: 1, name: 'iPad', price: 799.0 },
    { id: 2, name: 'iPhone11', price: 699.0 },
    { id: 3, name: 'iPhone12', price: 799.0 }
]

function Dashboard() {
    const dashView =
        <div>
            <h1>
                Dashboard
            </h1>

            <Products
                products={products}
            />
        </div>

    return dashView
}

export default Dashboard