
import './Product.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

async function fetchProducts() {
    const response = await axios.get('http://localhost:8080/personss');
    console.log(response);
}

function Product(props) {

    const handleDelete = (event) => {

    }

    useEffect(() => {
        fetchProducts();
    }, [])


    const [productList, setProductList] = useState(props.productList)

    return (
        <table border={1} cellPadding={10}>

            <tr key={"header"}>
                {Object.keys(productList[0]).map((key) => (
                    <th>{key}</th>
                ))}
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            {productList.map((p) => (
                <tr key={p.id}>
                    {Object.values(p).map((val) => (
                        <td>{val}</td>
                    ))}
                    <td><input type={'button'} value='Edit' onClick={handleDelete} /></td>
                    <td><input type={'button'} value='Delete' onClick={handleDelete} /></td>
                </tr>
            ))}

        </table>
    )
}

export default Product