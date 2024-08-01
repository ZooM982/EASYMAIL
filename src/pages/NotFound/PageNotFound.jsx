import React from "react";
import styled from "styled-components";

const NotFoundPane = styled.h1`
  text-align: center;
`;

const PageNotFound = () => {
  return <NotFoundPane>
    <span>Page No found</span>
    <p>404</p>
  </NotFoundPane>;
};

export default PageNotFound;
