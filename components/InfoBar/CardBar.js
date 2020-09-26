import styled from "@emotion/styled";

const Card = styled.article`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  width: 25%;
  position: relative;
  /* background: aliceblue; */
  h4 {
    color: var(--Gray);
    font-weight: 700;
    margin-bottom: 0px;
    text-transform: uppercase;
    word-wrap: break-word;
    font-size: clamp(12px, 2vw, 14px);
  }
  h2 {
    color: var(--Dark);
    font-weight: 500;
    text-transform: uppercase;
    word-wrap: break-word;
    margin-top: 10px;
    font-size: clamp(18px, 2vw, 32px);
  }
  &::after {
    content: "";
    background-color: var(--Gray);
    position: absolute;
    width: 1px;
    height: 80px;
    top: 40px;
    left: 10px;
    /* top: -50%; */
    /* position: absolute; */
    display: ${(props) => props.hrDisplay};
  }
  /* Laptop */
  @media screen and (max-width: 1024px) {
    padding: 20px 20px;
    h4 {
      word-wrap: normal;
    }
  }
  /* IPAD */
  @media screen and (max-width: 768px) {
    &::after {
      top: 20px;
    }
  }
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    text-align: center;
    width: 100%;
    padding: 0 12px;
    &::after {
      display: none;
    }
  }
`;

export default function InfoBar({ text, hrDisplay = "inline-block", data }) {
  return (
    <>
      <Card hrDisplay={hrDisplay}>
        <h4>{text}</h4>
        <h2>{data}</h2>
      </Card>
    </>
  );
}
