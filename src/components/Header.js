import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, SetBurgerStatus] = useState(false);

  return (
    <Container>
      <div>
        <Logo
          src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg"
          alt="Tesla"
        />
      </div>
      <Menu>
        <p>Model S</p>

        <p>Model 3</p>

        <p>Model X</p>

        <p>Model Y</p>
      </Menu>
      <RightMenu>
        <p>Shop</p>
        <p>Tesla Account</p>
        <CustomMenu onClick={() => SetBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => SetBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <p>EXISTING INVENTORY</p>
        </li>
        <li>
          <p>USED INVENTORY</p>
        </li>
        <li>
          <p>TRADE-IN</p>
        </li>
        <li>
          <p>CYBERTRUCK</p>
        </li>
        <li>
          <p>ROADSTER</p>
        </li>
        <li>
          <p>SEMI</p>
        </li>
        <li>
          <p>CHARGING</p>
        </li>
        <li>
          <p>POWERWALL</p>
        </li>
        <li>
          <p>COMMERCIAL ENERGY</p>
        </li>
        <li>
          <p>UTILITIES</p>
        </li>
        <li>
          <p>TEST DRIVE</p>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100px;
  margin-top: -15px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-top: -13px;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: -13px;

  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-top: -1px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 260px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    p {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
