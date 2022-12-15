import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Product(props) {
  const [tableDataId, setTableDataId] = useState(props.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenVal = useSelector((state) => state.TokenReducer.tokenVal);
  console.log('product level token: ' + tokenVal);

  const onDeleteClicked = async () => {
    await axios
      .delete('/products/delete/' + props.id, {
        headers: {
          token: 'Bearer ' + tokenVal,
        },
      })
      .then((respone) => {
        navigate('/products');
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const onHoverTableData = (event) => {
    setTableDataId(
      <React.Fragment>
        {props.id}

        <span className=" form-floating p-5">
          <input
            type="button"
            className="btn-danger btn"
            value="Delete"
            onClick={onDeleteClicked}
          ></input>

          <input
            type="button"
            className="btn-primary btn"
            value="Edit"
            onClick={() => {
              navigate('/products/edit/' + props.id);
            }}
          ></input>
        </span>
      </React.Fragment>
    );
  };
  const onMouseOutChanged = () => {
    setTableDataId(props.id);
  };
  return (
    <React.Fragment>
      <tr onMouseLeave={onMouseOutChanged} onMouseOver={onHoverTableData}>
        <td>{tableDataId}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    </React.Fragment>
  );
}

export default Product;
