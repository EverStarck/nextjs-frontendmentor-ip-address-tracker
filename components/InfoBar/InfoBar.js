import styled from "@emotion/styled";
import CardBar from './CardBar';

const SectionInfoBar = styled.section`
  height: 200px;
  width: 70vw;
  margin: 0 auto;
  margin-top: -100px;
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 15px;
  display: flex;
`;

export default function InfoBar() {
  return (
    <SectionInfoBar>
        <CardBar
         text="ip address"
         hrDisplay="none"/>
        <CardBar
         text="Location"/>
        <CardBar
         text="Timezone"/>
        <CardBar
         text="ISP"/>
    </SectionInfoBar>
  );
}
