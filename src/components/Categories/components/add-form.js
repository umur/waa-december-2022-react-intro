import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setReload } from '../../../redux/categoryReducer';
import { handleError, handleSuccess } from '../../../utilities';

function AddCategory(props){

    const categoryRef = useRef();
    const dispatch = useDispatch();
    const [btnLabel, setBtnLabel] = useState("Add");

    const { categories } = useSelector(state => state.categoryReducer);

    const addCategory = function(event){
        event.preventDefault();

        const catName = categoryRef.current.name.value;

        if(catName){

            //get new id
            let id = categories.map(o => o.id).reduce((x, y) => x > y ? x : y);
            const obj = {
                id: props.data.id || id + 1,
                name: categoryRef.current.name.value
            }

            //update
            if(props.data.id){
                axios.put('/categories/' + props.data.id, obj)
                    .then((result) => {
                        handleSuccess('Category updated successfully!', dispatch);
                        dispatch(setReload(true));
                    })
                    .catch(error => handleError(error, dispatch));
            } else {
                axios.post('/categories', obj)
                .then((result) => {
                    handleSuccess('Category added successfully!', dispatch);
                    dispatch(setReload(true));
                })
                .catch(error => handleError(error, dispatch));
            }
        }  
    }

    useEffect(()=> {
        if(props.data.id){
            categoryRef.current.name.value = props.data.name;
            setBtnLabel('Update');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data])

    return (
        <div>
            <Form onSubmit={addCategory} ref={categoryRef} className='form-inline'>
                <Form.Control className='add-name' name ='name' placeholder='name'/>
                <Button variant='primary' type='submit'>{btnLabel}</Button>
            </Form>
        </div>
    )
}

export default AddCategory;