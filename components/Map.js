import styled from "@emotion/styled";

const Section = styled.section`
  max-width: 100vw;
  height: calc(100vh - 30vh);
  font-size: 50px;
  color: #fff;
  background: var(--Dark);
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    height: 100vh;
  }
`;

export default function Map() {
  return <Section>MAP</Section>;
}
