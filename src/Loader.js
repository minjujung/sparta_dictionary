import React from "react";
import styled from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const Loader = (props) => {
  return (
    <Outter>
      <WbSunnyIcon style={{ fontSize: "150px", color: "orange" }} />
    </Outter>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffe8c257;
`;

export default Loader;
