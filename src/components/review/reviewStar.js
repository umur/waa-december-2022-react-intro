import React, { useEffect, useState } from 'react';
import starLogo from '../../images/star.png'

function ReviewStar(props) {

    const [arr, setArr] = useState([]);

    const fillArray = function (size) {
        const myArr = [];
        for (let i = 0; i < size; i++) {
            myArr[i] = i;
        }
        setArr(myArr);
    }

    useEffect(() => {
        fillArray(props.size);
    }, [props.size]);

    return (
        <div>
            {
                arr.map((a,index) => {
                    return (
                        <img key={index} src={starLogo} alt='star' height='20px' />
                    )
                })
            }
        </div>
    );
}

export default ReviewStar;