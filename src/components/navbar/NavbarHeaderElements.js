// import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const SideNavLink = styled(ScrollLink)`
  width: auto;
  color: #8b8b8b;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #232340;
  }
`;

export const SideNavMenu = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: center;
  margin: 10px 0px;
`;
