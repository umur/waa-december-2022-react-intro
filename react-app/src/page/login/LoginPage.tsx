import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Form, Button, Container, Stack } from "react-bootstrap";
import { login } from "../../service/api/login";
import { setToken } from "../../utils/localStorage";

const ContainerComponent = styled(Container)`
  height: 100vh;
`;
const ButtonComponent = styled(Button)``;

const FormContainer = styled.div`
  display: flex;
  border: 1px solid #3528cc;
  padding: 5%;
  background-color: #eae5e5;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

interface FromSchema {
  email: string;
  password: string;
}

const saveTokenToStorage = (data) => {
  setToken("token", data);
};
const Login: React.FC = (props) => {
  const { Group, Control, Text, Label } = Form;
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    const postData: FromSchema = {
      email: userNameRef?.current?.value,
      password: passwordRef?.current.value,
    };
    try {
      login(postData).then((res) => {
        saveTokenToStorage(res?.data);
        window.location.href = "/";
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <ContainerComponent>
      <FormContainer>
        <Form onSubmit={submit}>
          <Stack direction="vertical" gap={5}>
            <Group>
              <Label>Email address</Label>
              <Control
                type="email"
                ref={userNameRef}
                placeholder="Enter your email address"
              />
            </Group>
            <Group>
              <Label>Password</Label>
              <Control
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
              />
            </Group>
            <ButtonComponent type="submit" variant="primary">
              Submit
            </ButtonComponent>
          </Stack>
        </Form>
      </FormContainer>
    </ContainerComponent>
  );
};

export default Login;
