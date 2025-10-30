import styled from "styled-components";

export const CloseArea = styled.div`
  content: " ";
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(196, 196, 196, 0.4);
  cursor: pointer;
  z-index: 10;
`;
