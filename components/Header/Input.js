import styled from "@emotion/styled";

const FormFrame = styled.form`
  .input-container {
    width: 600px;
    display: flex;
    margin: 0 auto;
    input {
      /* width: 600px; */
      width: 100%;
      padding: 20px;
      border: none;
      border-radius: 15px 0 0 15px;
      font-size: 18px;
      color: var(--Dark);
    }
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--Dark);
      min-width: 80px;
      border-radius: 0 15px 15px 0;
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
    }
  }
  /* MOBILE 375 */
  @media screen and (max-width: 375px) {
    .input-container {
      width: 90vw;
      input {
        padding: 15px;
      }
    }
  }
`;

export default function Input() {
  return (
    <FormFrame>
      <div className="input-container">
        <input type="text" placeholder="Search for any IP address or domain" />
        <i>
          <img src="/../assets/images/icon-arrow.svg" alt="" srcSet="" />
        </i>
      </div>
    </FormFrame>
  );
}
