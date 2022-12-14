import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/myReducer";
import { RootState } from "../../redux/store";
import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";

const ContainerWrapper = styled(Container)``;
const Home: React.FC = (props) => {
  // const state = useSelector(
  //   (state: RootState) => state?.counterReducer?.currentValue
  // );
  // const dispatch = useDispatch();

  // const increase = () => {
  //   dispatch(increment());
  // };

  // const decrease = () => {
  //   dispatch(decrement());
  // };
  return <div></div>;
};

export default Home;
