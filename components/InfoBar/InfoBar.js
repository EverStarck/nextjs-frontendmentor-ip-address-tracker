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

const ErrorIPCss = styled.h1`
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #ff3333;
`;

export default function InfoBar({ data }) {
  // 192.212.174.101
  const { ip, isp, location = "Invaid IP" } = data;
  const { city, country, timezone } = location;

  // Change the message if the API return error
  function ErrorIPHtml() {
    return <ErrorIPCss>Please enter a valid IP Address</ErrorIPCss>;
  }
  function ValidIpAddress() {
    return (
      <>
        <CardBar data={ip} text="ip address" hrDisplay="none" />
        <CardBar data={`${city} [${country}]`} text="Location" />
        <CardBar data={`UTP${timezone}`} text="Timezone" />
        <CardBar data={isp} text="ISP" />
      </>
    );
  }
  function IpValidator() {
    const testLocation = location;
    if (testLocation === "Invaid IP") {
      return <ErrorIPHtml />;
    }
    return <ValidIpAddress />;
  }

  return (
    <SectionInfoBar>
      <div className="infoWrapper">
        <IpValidator />
      </div>
    </SectionInfoBar>
  );
}
