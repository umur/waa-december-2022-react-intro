import Category from "./Category";

const Product = (props)=>{
    return (
        <div>
            <label>Name</label>
            <span>{props.name}</span>
            <label>Price</label>
            <span>{props.price}</span>
            <label>Rating</label>
            <span>{props.rating}</span>
            {props.category && <Category category={props.category}/>}
        </div>
    )
};

export default Product;