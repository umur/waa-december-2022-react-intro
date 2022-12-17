import { useNavigate } from "react-router";


function Product(props) {


   const navigate =  useNavigate();

    const onShowDetailClicked = (id) => {
        // navigate to ProductDetail with id
       navigate('/Product-detail/' + id);
    }

    return (
        <div>
            <div>
                 Name : {props.name}
            </div>

            <div>
                Price : {props.price}
            </div>

            <input 
                type="button" 
                value="Show Detail" 
                onClick={() => { onShowDetailClicked(props.id)}} />

            ======
        </div>
    )
}

export default Product;