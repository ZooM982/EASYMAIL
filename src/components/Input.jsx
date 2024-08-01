import React from "react";
import styled from "styled-components";

/**
 *
 * @param {
 *  {
 *    type: String,
 *    name: String,
 *    value: String | Number,
 *    onChange: Function,
 *    label: String,
 *    errorMessage: String,
 *    icon: {
 *      name: String,
 *      color: String,
 *      size: Number
 *    },
 *    style: {},
 *    inputContainerStyle: {}
 *    height: Number,
 *    extraOptions: {}
 *  }
 * }
 * @returns
 */

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  backgroundColor: #fff;
  position: relative;
  margin: 0.5rem 0;
`
const InputForm = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem;
`
const IconContainer = styled.span`
  position: absolute;
  left: -1px;
`

function Input({
  type,
  value = '',
  onChange,
  label,
  errorMessage,
  icon,
  extraOptions,
  name
}) {
  return (
    <Label>
      <IconContainer>
        {icon && (
          <icon.name
            color={icon?.color ?? "gray"}
            style={{ marginLeft: 12 }}
            size={icon?.size ?? 20}
          />
        )}
      </IconContainer>
      <InputForm
        placeholder={label}
        type={type ?? "text"}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        {...extraOptions}
      />
      {errorMessage && (
        <div style={{ marginTop: 10, fontSize: 13, color: "red" }}>
          Veuillez remplir toute les input
        </div>
      )}
    </Label>
  );
}

export default Input;
