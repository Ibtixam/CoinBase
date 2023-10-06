import React, { useContext } from "react";
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
import {
  LightTradeSvg,
  LightWalletSvg,
  LightTransactionSvg,
  LightStatisticsSvg,
  LightUserSvg,
  LightSettingsSvg,
  LightEyeSvg,
} from "../../assets/lightmodeSvgs";
import { Button, ButtonWrapper, ItemWrapper, SidebarWrapper } from "./styles";
import ModeContext from "../../Context/Mode/ModeContext";

export default function Sidebar() {
  let location = useLocation();

  const MenuItems = [
    {
      link: "/",
      name: "Overview",
      DarkModeSvg: EyeSvg,
      LightModeSvg: LightEyeSvg,
    },
    {
      link: "/userlist",
      name: "User",
      DarkModeSvg: UserSvg,
      LightModeSvg: LightUserSvg,
    },
    {
      link: "/trade",
      name: "Trade",
      DarkModeSvg: TradeSvg,
      LightModeSvg: LightTradeSvg,
    },
    {
      link: "/wallet",
      name: "Wallet",
      DarkModeSvg: WalletSvg,
      LightModeSvg: LightWalletSvg,
    },
    {
      link: "/transactionlist",
      name: "Transactions",
      DarkModeSvg: TransactionSvg,
      LightModeSvg: LightTransactionSvg,
    },
    {
      link: "/statistics",
      name: "Statistics",
      DarkModeSvg: StaticticSvg,
      LightModeSvg: LightStatisticsSvg,
    },
    {
      link: "/setting",
      name: "Settings",
      DarkModeSvg: SettingsSvg,
      LightModeSvg: LightSettingsSvg,
    },
  ];

  const ScrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  let Context = useContext(ModeContext);
  const { mode } = Context;

  return (
    <SidebarWrapper className="sidebar">
      {MenuItems.map((item, index) => {
        const { name, link, DarkModeSvg, LightModeSvg } = item;
        const active = location.pathname === link;
        return (
          <ButtonWrapper key={index} active={active} onClick={ScrollToTop}>
            <Link to={link}>
              <ItemWrapper mode={active}>
                {mode || active ? <DarkModeSvg /> : <LightModeSvg />}
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
