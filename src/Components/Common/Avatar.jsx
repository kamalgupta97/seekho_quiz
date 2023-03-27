import React from "react";

const Avatar = ({ width = 40, height = 40, className }) => {
  return <div className={className} style={{ width, height, borderRadius: "100%" }}></div>;
};

export default Avatar;
