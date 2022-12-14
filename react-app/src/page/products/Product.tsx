import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Row, Modal, Form } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { getProducts, addProducts } from "../../service/api/product";
import { productTypes } from "../../types/productsTypes";
const Container = styled.div`
  padding: 3rem;
  border: 1px solid #ebebe8db;
  border-radius: 2%;
`;

const TableWrapper = styled(Table)``;
const Products: React.FC = (props) => {
  const [data, setData] = useState<any[]>();

  const nameRef = useRef(null);
  const priceRef = useRef(null);

  const fetchProducts = () => {
    try {
      getProducts().then((res) => setData(res?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!data) {
      fetchProducts();
    }
  }, [data]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const submitPrduct = () => {
    const data = {
      name: nameRef.current?.value,
      price: priceRef.current?.value,
      user: {
        id: 1,
      },
    };

    try {
      addProducts(data).then((res) => {
        if (res?.status === 200) {
          fetchProducts();
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="string"
                placeholder="enter product name"
                ref={nameRef}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>price</Form.Label>
              <Form.Control ref={priceRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitPrduct}>Add</Button>
          <Button onClick={() => setShowModal(false)} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <TableWrapper striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>{item?.user?.firstname}</td>
              </tr>
            );
          })}
        </tbody>
      </TableWrapper>
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
          <Button
            type="button"
            onClick={() => setShowModal(true)}
            variant="primary"
          >
            Add product
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
