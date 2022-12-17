import axios from "axios";
import { useEffect, useState } from "react";

export function Categories() {
  const Category = async () => {
    const categories = await axios.get("http://localhost:8080/categories");
    setName(categories.data);
  };

  useEffect(() => {
    Category();
  }, []);

  let intialState = [];

  const [categoriesState, setName] = useState(intialState);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>

      { categoriesState.map(usercategory=>{

        return(
               <tr>
                <th scope="row">{usercategory.id}</th>
                <td>{usercategory.name}</td>
               </tr> 

        )
      })
      }
      </tbody>




      </table>
    </div>
  );
}
