import React from "react";

/**
 *
 * @param {{title: String | Number, onChange: Function, errorMessage: String, Icon: {name: String, color: String, size: Number}}} param0
 * @returns
 */
function Button({
  title,
  onClick,
  buttonLabelStyle,
  icon,
  color,
  style,
  bgColor,
  height,
  radius,
  loading,
}) {
  return (
    <button
      style={{
        border: "1px solid " + bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: bgColor ?? "#fff",
        height: height ?? 40,
        overflow: "hidden",
        paddingLeft: 10,
        paddingRight: 10,
        cursor: "pointer",
        color: color ?? "black",
        borderRadius: radius ?? 5,
        ...style,
      }}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {icon?.name && icon.possition !== "right" && (
            <icon.name
              color={icon?.color ?? color ?? "gray"}
              style={{}}
              size={icon?.size ?? 15}
            />
          )}
          <div
            style={{
              fontSize: 15,
              marginLeft: 7,
              marginRight: 7,
              ...buttonLabelStyle,
            }}
          >
            {title}
          </div>
          {icon?.name && icon.possition === "right" && (
            <icon.name
              color={icon?.color ?? color ?? "gray"}
              style={{}}
              size={icon?.size ?? 15}
            />
          )}
        </>
      )}
    </button>
  );
}

export default Button;
