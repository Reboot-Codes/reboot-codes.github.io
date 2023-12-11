import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { BsList, BsXLg } from 'react-icons/bs';

const Header = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  align-items: center;
  background-color: var(--bg);
`;

const BrandStyle = styled.h1`
  font-size: var(--step-up-1);
  font-weight: bold;
`;

const DesktopMenu = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`;

const DesktopMenuLinkStyle = styled.li`
  margin-left: 2em;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  -webkit-transition: border-bottom 0.3s ease 0.05s;
  transition: border-bottom 0.3s ease 0.05s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-bottom: 1px solid var(--color);
  }
`;

const MobileMenuButtonStyle = styled.button`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  border-width: 0;
  font-size: var(--step-up-3);
  color: var(--color);

  &:hover {
    background-color: rgba(115, 115, 115, 0.1);
  }
`;

const MobileMenuStyle = styled.div`
  width: ${(props) => (props.showDrawer ? `100%` : `0.00000001px`)};
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  right: 0;
  top: 0;
  height: 100vh;
`;

const MobileMenuCloseButtonStyle = styled.button`
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  border-width: 0;
  font-size: var(--step-up-3);
  color: var(--color);

  &:hover {
    background-color: rgba(115, 115, 115, 0.1);
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`;

const MobileMenuHeading = styled.h1`
  font-weight: bold;
`;

const MobileMenuLinkStyle = styled.div`
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  -webkit-transition: border-bottom 0.3s ease 0.05s;
  transition: border-bottom 0.3s ease 0.05s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: var(--step-up-2);
  display: flex;

  &:hover {
    border-bottom: 1px solid var(--color);
    cursor: pointer;
  }
`;

const Brand = ({ children }) => (
  <BrandStyle>
    <Link href="/">{children}</Link>
  </BrandStyle>
);

const DesktopMenuLink = ({ to, children }) => (
  <DesktopMenuLinkStyle>
    <Link href={to}>{children}</Link>
  </DesktopMenuLinkStyle>
);

const MobileMenuButton = ({ showDrawer, setDrawer, children }) => (
  <MobileMenuButtonStyle
    className="transition"
    onClick={() => {
      setDrawer(!showDrawer);
    }}
  >
    {children}
  </MobileMenuButtonStyle>
);

const MobileMenuCloseButton = ({ showDrawer, setDrawer }) => (
  <MobileMenuCloseButtonStyle
    onClick={() => {
      setDrawer(!showDrawer);
    }}
  >
    <span className="sr-only">Close Menu</span>
    <BsXLg />
  </MobileMenuCloseButtonStyle>
);

const MobileMenu = ({ showDrawer, setDrawer, children }) => (
  <MobileMenuStyle className="transition" showDrawer={showDrawer}>
    <MobileMenuContent>
      <MobileMenuCloseButton showDrawer={showDrawer} setDrawer={setDrawer} />
      {children}
    </MobileMenuContent>
  </MobileMenuStyle>
);

const MobileMenuLink = ({ showDrawer, setDrawer, to, children }) => (
  <MobileMenuLinkStyle
    onClick={() => {
      Router.push(to);
      setDrawer(!showDrawer);
    }}
  >
    <Link href={to}>{children}</Link>
  </MobileMenuLinkStyle>
);

export default function NavBar() {
  const [showDrawer, setDrawerRaw] = React.useState(false);
  const setDrawer = (state) => {
    setDrawerRaw(state);
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <Header>
      <Brand>Reboot Codes</Brand>
      <DesktopMenu>
        <DesktopMenuLink to="/">Home</DesktopMenuLink>
        <DesktopMenuLink to="/contact">Contact</DesktopMenuLink>
        <DesktopMenuLink to="/blog">Blog</DesktopMenuLink>
      </DesktopMenu>
      <MobileMenuButton setDrawer={setDrawer} showDrawer={showDrawer}>
        <span className="sr-only">Open Menu</span>
        <BsList />
      </MobileMenuButton>
      <MobileMenu showDrawer={showDrawer} setDrawer={setDrawer}>
        <MobileMenuHeading>Menu</MobileMenuHeading>
        <MobileMenuLink to="/" showDrawer={showDrawer} setDrawer={setDrawer}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="/contact" showDrawer={showDrawer} setDrawer={setDrawer}>
          Contact
        </MobileMenuLink>
        <MobileMenuLink to="/blog" showDrawer={showDrawer} setDrawer={setDrawer}>
          Blog
        </MobileMenuLink>
      </MobileMenu>
    </Header>
  );
}
