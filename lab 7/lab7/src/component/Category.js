const Category = (props) => {
    return (
      <div>
        <h3>Category: </h3>
        <label>Name</label>
        <span>{props.category.name}</span>
        <label>Comment</label>
        <span>{props.category.comment}</span>
      </div>
    );
  };
  
  export default Category;