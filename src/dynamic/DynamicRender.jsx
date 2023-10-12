import React from "react";
import { KeysToComponentMap } from "../app_config/KeysToComponentMap";

function DynamicRender(config) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {},
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => DynamicRender(c)))
    );
  }
  return null;
}

export default DynamicRender;
