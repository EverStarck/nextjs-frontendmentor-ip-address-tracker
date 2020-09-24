import styled from "@emotion/styled";

const Section = styled.section`
  background: var(--Dark);
  height: calc(100vh - 32vh);
  color: #fff;
  font-size: 50px;
  margin-top: -100px;
  /* IPAD */
  @media screen and (max-width: 768px) {
    height: calc(100vh - 28vh);
  }
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    height: calc(100vh - 27vh);
    margin-top: -151px;
  }
`;

export default function Map() {
  return <Section>MAP</Section>;
}
