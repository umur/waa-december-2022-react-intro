
import axios from "axios"
import { useEffect, useState } from "react";

 export function Products(){

    const fetchProducts = async()=>{
        const products = await axios.get("http://localhost:8080/products");
        setName(products.data);
    }
    
    useEffect(()=>{
    fetchProducts();
    }, []);

    let initialState=[]
    const[productsState, setName]= useState(initialState);

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">name</th>
                    <th scope="col">Rating</th>
                </tr>
            </thead>

            <tbody>
             {productsState.map(userproducts=>{
                return(
                <tr>
                    <th scope="row">{userproducts.id}</th>
                    <td>{userproducts.name}</td>
                    <td>{userproducts.rating}</td>
                </tr>

                )

             })
             }

            </tbody>

        </table>
      // <h3>Products</h3>
    )

 }