import React from "react";
import theme from "../../theme";

export function Title(props: any) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${theme.theme.colors.primary[500]};
        }
      `}</style>
    </>
  );
}
