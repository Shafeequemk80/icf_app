import React from "react";

function CrashTest() {
  throw new Error("Test crash from CrashTest component");
}

export default CrashTest;
