import React from "react";

export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey welcome to my Web Page,
          <br />
          My name is{" "}
          <span style={{ color: "#FF6347" }}>Syeda um-e-habiba fatima</span>
          <br />I am Next JS Developer!
        </div>
        <div className="childContainer"></div>
      </div>
    </>
  );
}