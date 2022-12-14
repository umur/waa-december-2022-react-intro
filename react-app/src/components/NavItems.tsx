import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerWrapper = styled(Container)``;
const NavItems: React.FC = (props) => {
  return (
    <ContainerWrapper fluid>
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link>Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav.Item>
      </Nav>
    </ContainerWrapper>
  );
};

export default NavItems;
