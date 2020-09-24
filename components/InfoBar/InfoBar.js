import styled from "@emotion/styled";
import CardBar from "./CardBar";

const SectionInfoBar = styled.section`
  min-height: 200px;
  width: 70vw;
  margin: 0 auto;
  margin-top: -100px;
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 15px;
  display: flex;

  /* IPAD */
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 170px;
  }
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: 100%;
    margin-top: -150px;
  }
`;

export default function InfoBar() {
  return (
    <SectionInfoBar>
      <CardBar text="ip address" hrDisplay="none" />
      <CardBar text="Location" />
      <CardBar text="Timezone" />
      <CardBar text="ISP" />
    </SectionInfoBar>
  );
}
