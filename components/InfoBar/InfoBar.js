import styled from "@emotion/styled";
import CardBar from "./CardBar";

const SectionInfoBar = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  transform: translateY(-50%);
  .infoWrapper {
    width: 70vw;
    display: flex;
    background: #fff;
    border-radius: 15px;
    /* IPAD */
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
    /* MOBILE */
    @media screen and (max-width: 375px) {
      flex-direction: column;
    }
  }
`;

export default function InfoBar() {
  return (
    <SectionInfoBar>
      <div className="infoWrapper">
        <CardBar text="ip address" hrDisplay="none" />
        <CardBar text="Location" />
        <CardBar text="Timezone" />
        <CardBar text="ISP" />
      </div>
    </SectionInfoBar>
  );
}
