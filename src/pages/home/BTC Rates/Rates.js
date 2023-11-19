import React from 'react';
import { OptionSvg, ArrowSvg, ArrowCircleSvg } from '../../../assets/svgs';
import {
  ArrowWrapper,
  CurrencyName,
  CurrencyWrapper,
  GradientTitle,
  HeadingWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles';

export default function Rates() {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>Conversion Rate to Naira</Title>
        <OptionSvg />
      </HeadingWrapper>
      <TitleWrapper>
        <div>
          <GradientTitle>iTunes Card</GradientTitle>
        </div>
        <div>
          <GradientTitle>Amazon Card</GradientTitle>
        </div>
        <div>
          <GradientTitle>Bitcoin</GradientTitle>
        </div>
      </TitleWrapper>
      <div
        style={{
          display: 'flex',
        }}
      >
        <CurrencyWrapper>
          <div>
            <CurrencyName>USA Physical</CurrencyName>
            <CurrencyName>USA E-Code card</CurrencyName>
            <CurrencyName>UK Physical Card</CurrencyName>
            <CurrencyName>UK E-Code Card</CurrencyName>
          </div>
          <div>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
          </div>
        </CurrencyWrapper>
        <CurrencyWrapper>
          <div>
            <CurrencyName>USA Physical</CurrencyName>
            <CurrencyName>USA E-Code card</CurrencyName>
            <CurrencyName>UK Physical Card</CurrencyName>
            <CurrencyName>UK E-Code Card</CurrencyName>
          </div>
          <div>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
          </div>
        </CurrencyWrapper>
        <CurrencyWrapper>
          <div>
            <CurrencyName>Bitcoin BTC</CurrencyName>
            <CurrencyName>Bitcoin BTC</CurrencyName>
            <CurrencyName>Bitcoin BTC</CurrencyName>
            <CurrencyName>Bitcoin BTC</CurrencyName>
          </div>
          <div>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
            <CurrencyName>N400.00</CurrencyName>
          </div>
        </CurrencyWrapper>
        <ArrowWrapper>
          <ArrowSvg className="arrow" />
          <ArrowCircleSvg style={{ position: 'relative' }} />
        </ArrowWrapper>
      </div>
    </Wrapper>
  );
}
