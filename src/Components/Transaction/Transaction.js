import React, { useContext } from 'react';
import DropDown from '../DropDown/DropDown';
import { RowWrapper, TransactionStatus } from './styles';
import ModeContext from '../../Context/Mode/ModeContext';

export default function Transaction({ item, index }) {
  const { Svg, status, name, bg, LightSvg } = item;
  const { mode } = useContext(ModeContext);
  return (
    <RowWrapper>
      <p className="dateDiv">14/01/2019</p>
      <p className="trDiv">12345678</p>
      <div className="typeDiv">
        {mode ? (
          <Svg className="type-img tr-title" />
        ) : (
          <LightSvg className="type-img tr-title" />
        )}
      </div>
      <p className="name">{name}</p>
      <p className="value">$100</p>
      <p className="return">#18000</p>
      <TransactionStatus style={{ background: bg }}>{status}</TransactionStatus>
      <DropDown
        optionList={[{ label: 'Edit' }, { label: 'Delete' }]}
        index={index}
      />
    </RowWrapper>
  );
}
