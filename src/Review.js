import Reviewlist from "./ReviewList";
import Product from "./Product";

const Reviews = (props) => {
    return (
        <div>
          {props.listName}
            <Reviewlist listName={props.productName}/>
        </div>
    );
}

export default Reviews;