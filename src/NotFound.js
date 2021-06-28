import React from "react";

const NotFound = (props) => {
  return (
    <>
      <h1>잘못된 주소에요</h1>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        홈으로 돌아가기
      </button>
    </>
  );
};

export default NotFound;
