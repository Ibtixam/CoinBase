import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  EyeSvg,
  UserSvg,
  TradeSvg,
  WalletSvg,
  TransactionSvg,
  StaticticSvg,
  SettingsSvg,
} from "../../assets/svgs";
import { Button, ButtonWrapper, ItemWrapper, SidebarWrapper } from "./styles";

export default function Sidebar() {
  let location = useLocation();

  const MenuItems = [
    {
      link: "/",
      name: "Overview",
      Svg: EyeSvg,
    },
    {
      link: "/userlist",
      name: "User",
      Svg: UserSvg,
    },
    {
      link: "/trade",
      name: "Trade",
      Svg: TradeSvg,
    },
    {
      link: "/wallet",
      name: "Wallet",
      Svg: WalletSvg,
    },
    {
      link: "/transactionlist",
      name: "Transactions",
      Svg: TransactionSvg,
    },
    {
      link: "/statistics",
      name: "Statistics",
      Svg: StaticticSvg,
    },
    {
      link: "/setting",
      name: "Settings",
      Svg: SettingsSvg,
    },
  ];

  const ScrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <SidebarWrapper className="sidebar">
      {MenuItems.map((item, index) => {
        const { name, link, Svg } = item;
        const active = location.pathname === link;
        return (
          <ButtonWrapper key={index} active={active} onClick={ScrollToTop}>
            <Link to={link}>
              <ItemWrapper>
                <Svg />
                {name}
              </ItemWrapper>
            </Link>
          </ButtonWrapper>
        );
      })}
      <Button>Referral</Button>
      <Button>Logout</Button>
    </SidebarWrapper>
  );
}
