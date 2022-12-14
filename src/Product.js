import axios from "axios";
import { useState } from "react";
import Reviews from "./Review";

function Product(props) {
  
  return (
        <div>
            <ol>{props.name}
                <Reviews productName={props.name}/>

            </ol>
        </div>
    );
}

export default Product;