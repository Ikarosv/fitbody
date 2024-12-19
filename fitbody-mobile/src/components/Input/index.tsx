import React from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  id: string;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "creditCardExpiration"
    | "creditCardExpirationMonth"
    | "creditCardExpirationYear"
    | "creditCardSecurityCode"
    | "creditCardType"
    | "creditCardName"
    | "creditCardGivenName"
    | "creditCardMiddleName"
    | "creditCardFamilyName"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode"
    | "birthdate"
    | "birthdateDay"
    | "birthdateMonth"
    | "birthdateYear"
    | undefined;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const ControlledInput = ({
  value,
  onChange,
  id,
  className,
  textContentType = "none",
  placeholder,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <TextInput
      value={value}
      id={id}
      textContentType={textContentType}
      onChange={onChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      className={`flex bg-white rounded-2xl border border-white border-solid max-w-[311px] min-h-[45px] pl-3 ${className}`}
    />
  );
};

export default ControlledInput;
