import React from "react";
import DropDown from "../DropDown/DropDown";
import {
  CircleSvg,
  LoaderSvg,
  VectorSvg,
  Vector2Svg,
  GraphSvg,
  CalenderSvg,
  TriangleSvg,
  TriGreenSvg,
} from "../../assets/svgs";
import {
  Box,
  BoxStatus,
  BoxWrapper,
  CircleWrapper,
  GraphNumber,
  GraphWrapper,
  HeadingText,
  HeadingWrapper,
  Numbers,
  Title,
  TitleWrapper,
} from "./styles";

export default function Overview(props) {
  const optionStyle = {
    position: "absolute",
    right: "-30px",
    top: "-36px",
  };

  const data = [
    {
      numbers: 15000,
      totalnumText: "User",
      percent: "22.8%",
    },
    {
      numbers: 43498,
      totalnumText: "Trade",
      percent: "11.8%",
    },
    {
      numbers: 24642,
      totalnumText: "Transactions",
      percent: "11.8%",
    },
  ];

  return (
    <React.Fragment>
      <div>
        <HeadingWrapper>
          <HeadingText>Agent Management   System Overview</HeadingText>
          <HeadingText>
            Accounts  |  AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </HeadingText>
        </HeadingWrapper>
      </div>
      <div>
        <TitleWrapper>
          <Title>Overview</Title>
          <CalenderSvg className="calender" />
        </TitleWrapper>
        <BoxWrapper>
          {data?.map((item, index) => {
            const { numbers, totalnumText, percent } = item;
            return (
              <Box key={index}>
                <CircleWrapper>
                  <CircleSvg className="circle" />
                  <LoaderSvg className="loader" />
                  <VectorSvg className="vector" />
                  <Vector2Svg className="vector2" />
                  <Numbers>{numbers}</Numbers>
                </CircleWrapper>
                <BoxStatus>
                  <Title>
                    Total Number <br /> Of {totalnumText}
                  </Title>
                  <GraphWrapper>
                    <GraphNumber>
                      {percent} <TriGreenSvg />
                    </GraphNumber>
                    <GraphSvg className="s-graph" />
                  </GraphWrapper>
                  <DropDown
                    style={optionStyle}
                    index={index}
                    optionList={[{ label: "Veiw" }, { label: "Delete" }]}
                  />
                </BoxStatus>
              </Box>
            );
          })}
        </BoxWrapper>
      </div>
    </React.Fragment>
  );
}
