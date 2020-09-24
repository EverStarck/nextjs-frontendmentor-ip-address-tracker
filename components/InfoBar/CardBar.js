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
    font-size: 14px;
  }
  h2 {
    color: var(--Dark);
    font-weight: 500;
    text-transform: uppercase;
    word-wrap: break-word;
    margin-top: 10px;
    font-size: 32px;
  }
  &::after {
    content: "";
    background-color: var(--Gray);
    position: absolute;
    width: 1px;
    height: 80px;
    top: 60px;
    left: 10px;
    /* top: -50%; */
    /* position: absolute; */
    display: ${(props) => props.hrDisplay};
  }
  /* IPAD */
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
    h4 {
      font-size: 12px;
    }
    h2 {
      font-size: 20px;
      /* word-wrap: break-word; */
    }
  }
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    text-align: center;
    width: 100%;
    height: auto;
    padding: 0 12px;
    h2 {
      font-size: 18px;
    }
    &::after {display: none}
  }
`;

export default function InfoBar({ text, hrDisplay="inline-block" }) {
  return (
    <>
      <Card hrDisplay={hrDisplay}>
        <h4>{text}</h4>
        <h2>192.212.174.101</h2>
      </Card>
    </>
  );
}
