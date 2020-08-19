import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import {ReactComponent as MoonIcon} from '../icons/night.svg';



const Button = styled.div`
  background: ${({ theme }) => theme.background};
//  border: 0px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 10rem;
  height: 4rem;
  float:right;
  vertical-align: middle;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
  }


`;

const Toggle = ({theme,  toggleTheme }) => {

    return (
        <Button className={theme} onClick={toggleTheme} id="Knop">
        <span id="toggleknop"><MoonIcon/> Dark Mode</span>
        </Button>
        

    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;