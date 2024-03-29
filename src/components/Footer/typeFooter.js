import styled from "styled-components";
import { Button, Input } from "antd";

export const Footer = styled('div')`
  background-color: #222;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  padding: 50px 0;
`;

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
`;

export const Row = styled('div')`
  display: flex;
`;

export const Col3 = styled('div')`
  width: 25%;
  .title{
    font-size: 15px;
    line-height: 1.6;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff
  }
  .question{
    color: #b2b2b2;
    font-size: 14px;
  }
  ul{
    list-style-type: none;
    padding: 0;
    li{
      a{
        font-size: 14px;
        color: #b2b2b2;
        text-decoration: none;
        line-height: 1.923;
        &:hover{
          color: #717fe0;
        }
      }
    }
  }
`;

export const Subcribe = styled('div')`
  margin-top: 20px;
`;

export const CopyRight = styled('div')`
  text-align: center;
  margin-top: 100px;
  color: #b2b2b2;
  font-size: 14px;
  a{
    color: #007bff;
    text-decoration: none;
    &:hover{
      color: #004c9e;
    }
  }
  div{
    a{
      margin-right: 3px;
    }
    margin-bottom: 10px;
  }
`;

export const FocusInput = styled('div')`
  margin-top: 5px;
  border-bottom: 2px solid #464646;
`;

export const InputEmail = styled(Input)`
  background-color: #222;
  border: none;
  color: #b2b2b2;
  font-size: 16px;
  width: 100%;
  padding: 0;
  &:focus{
    outline: none;
    border: none;
  }
  &::placeholder{
    color: #b2b2b2;
    font-size: 14px;
  }
`;

export const BtnSubcribe = styled(Button)`
  cursor: pointer;
  background-color: #717fe0;
  border: 1px solid #717fe0;
  border-radius: 25px;
  height: 45px;
  width: 150px;
  font-size: 15px;
  line-height: 1.466667;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  &:hover{
    background-color: #fff;
    border: 1px solid #fff;
    color: #717fe0;
  }
  &:focus{
    outline: none;
    background-color: #717fe0;
    color: #fff;
    border: 1px solid #717fe0;
  }
`;