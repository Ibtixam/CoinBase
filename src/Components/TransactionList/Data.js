import { Wallet, Bitcoin } from '../../assets/svgs';
import { LightWalletSvg, LightBitcoinSvg } from '../../assets/lightmodeSvgs';

export const Data = [
  {
    status: 'Completed',
    name: 'Bitcion',
    bg: '#5DF888',
    Svg: Bitcoin,
    LightSvg: LightBitcoinSvg,
  },
  {
    status: 'Failed',
    name: 'Amazon',
    bg: '#F85D5D',
    Svg: Wallet,
    LightSvg: LightWalletSvg,
  },
  {
    status: 'In Progress',
    name: 'Bitcion',
    bg: 'linear-gradient(185deg, #FD749B 0%, #281AC8 130%)',
    Svg: Bitcoin,
    LightSvg: LightBitcoinSvg,
  },
  {
    status: 'Completed',
    name: 'Bitcion',
    bg: '#5DF888',
    Svg: Wallet,
    LightSvg: LightWalletSvg,
  },
];
