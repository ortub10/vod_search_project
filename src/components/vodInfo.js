import React from "react";
import { useParams } from "react-router-dom";

function VodInfo() {
  const prams = useParams();
  return <div>{prams.id}</div>;
}

export default VodInfo;
