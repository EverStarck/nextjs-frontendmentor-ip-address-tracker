import React, { useState } from "react";
import styled from "@emotion/styled";

const FormFrame = styled.div`
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
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--Dark);
      min-width: 80px;
      border-radius: 0 15px 15px 0;
      border: none;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  /* MOBILE 375 */
  @media screen and (max-width: 640px) {
    .input-container {
      width: 90vw;
      input {
        padding: 15px;
      }
    }
  }
`;

const Error = styled.p`
  color: red;
  background: #fff;
  display: inline-block;
  transition: all .4s ease;
`;
export default function Input({ipValue, setIipValue, fetchNewData,setSearchType}) {
  const [error, setError] = useState(false);

  const onChange = e => {
    setIipValue(e.target.value);
    // Verify if is a IP
    if(ipValue === "") {
      setSearchType("");
    } else if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipValue)) {
      setSearchType("&ipAddress=");
    } else {
      setSearchType("&domain=");
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    // Validation
    if (ipValue.trim() === "") {
      setError(true);
      return;
    }
    // Call to the API
    fetchNewData();

    // Delete the error state
    setError(false);
    setIipValue("");
    // props.search(ipValue);
  }


  return (
    <FormFrame>
      <form onSubmit={onSubmit} className="input-container">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipValue}
          onChange={onChange}
          // onChange={(e) => {
          //   setIipValue(e.target.value);
          // }}
          />
        <button type="submit">
          <img src="/../assets/images/icon-arrow.svg" alt="" srcSet="" />
        </button>
      </form>
      {error ? <Error>Complete the field</Error> : null}
    </FormFrame>
  );
}
