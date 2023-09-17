import React from "react";
import { Panel } from "rsuite";
export default function SocialPost({
  activeTheme,
  image,
  description,
  hashtags,
}) {
  return (
    <Panel
      className="lg:w-1/3 "
      style={{
        color:
          activeTheme.active == "dark"
            ? activeTheme.dark.textCol
            : activeTheme.light.textCol,
        backgroundColor:
          activeTheme.active == "dark"
            ? activeTheme.dark.bg
            : activeTheme.light.bg,
      }}
    >
      <div className="w-full">
        <img src={image} className=" m-auto" />
      </div>

      <div className="mt-3">
        <img
          src="https://beconnected.esafety.gov.au/pluginfile.php/69186/mod_resource/content/1/t26_c4_a1_p7.png"
          width={"100px"}
        />
      </div>
      <div className="flex items-center justify-center">
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Panel>
  );
}
