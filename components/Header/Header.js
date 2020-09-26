import Input from "./Input";
import styled from "@emotion/styled";

const HeaderFrame = styled.header`
  max-width: 100vw;
  height: 32vh;
  background: var(--Dark);
  background-image: url(/../assets/images/pattern-bg.png);
  background-size: cover;
  .header-wrapper {
    text-align: center;
    padding: 40px 0 40px 0;
    /* background: aliceblue; */
    h1 {
      font-weight: 500;
      color: #fff;
      margin-top: 0;
    }
  }
  /* MOBILE 375 */
  @media screen and (max-width: 600px) {
    height: 50vh;
    background-position-x: 50%;
    background-size: contain;
    h1 {
      font-size: 28px;
    }
  }
`;

export default function Header({ ipValue, setIipValue, fetchNewData, setSearchType }) {
  return (
    <HeaderFrame>
      <div className="header-wrapper">
        <h1>IP Address Tracker</h1>
        <Input
          ipValue={ipValue}
          setIipValue={setIipValue}
          fetchNewData={fetchNewData}
          setSearchType={setSearchType}
        />
      </div>
    </HeaderFrame>
  );
}
