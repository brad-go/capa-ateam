import React, { useRef } from 'react';
import styled from 'styled-components';
import logo from '~assets/image/logo.png';
import colorLogo from '~assets/image/color_logo.png';
import { ReactComponent as HambergerSVG } from '~assets/svg/hamburger.svg';
import { COLORS } from '~constants/styles';
import { useDrawer } from '~hooks/useDrawer';
import NavItem from './NavItem';

const Navbar = () => {
  const drawerRef = useRef(null);
  const { isOpen, toggleDrawer } = useDrawer(drawerRef);

  return (
    <Nav>
      <Hamburger onClick={toggleDrawer}>
        <HambergerSVG />
      </Hamburger>
      <Logo href="#">
        <img src={logo} alt="logo" />
      </Logo>
      <NavItem title="A 가공 업체" />
      <Drawer open={isOpen} ref={drawerRef}>
        <div>
          <Logo href="#">
            <img src={colorLogo} alt="color_logo" />
          </Logo>
        </div>
        <NavItem title="파트너 정밀가공" isOpen />
      </Drawer>
      {isOpen && <BackGround />}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 40px;
  background-color: ${COLORS.PRIMARY[700]};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 100;

  ul {
    color: ${COLORS.WHITE};

    li:last-child::before {
      content: '|';
      margin: 0 31px;
      background-image: linear-gradient(
        180deg,
        ${COLORS.WHITE},
        ${COLORS.WHITE}
      );
      background-repeat: repeat-y;
      background-size: 2px 16px;
      background-position: 1px 0;
    }
    button {
      color: ${COLORS.WHITE};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 13px 60px;

    ul {
      display: none;
    }
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    display: inline-block;
    img {
      width: 91.8px;
      height: 12px;
    }
  }
`;

const Hamburger = styled.button`
  position: absolute;
  top: 16px;
  left: 23px;
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: inline-block;
  }
`;

const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? 0 : -280)}px;
  width: 280px;
  height: 100%;
  background-color: ${COLORS.WHITE};
  transition: left 0.3s ease-out;
  z-index: 1000;

  div {
    padding: 29px 20px;
    border-bottom: 1px solid ${COLORS.BACKGROUND.BASE};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 32px;
    gap: 24px;
    color: ${COLORS.GRAY[900]};

    li:last-child:before {
      display: none;
    }

    button {
      color: ${COLORS.GRAY[900]};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    div {
      padding: 13px 20px;
    }
  }
`;

const BackGround = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${COLORS.GRAY[900]};
  opacity: 0.5;
`;

export default Navbar;
