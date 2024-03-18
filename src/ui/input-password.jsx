import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputPassword({ change }) {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const validateEmail = (value) =>
    value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{12,20}$/
    );

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      size="lg"
      name="password"
      onChange={(e) => change(e)}
      isInvalid={isInvalid}
      onValueChange={setValue}
      value={value}
      placeholder="Ejemplo1234@"
      label="Contraseña"
      variant="underlined"
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && "Ingrese una contraseña valida"}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}

export default InputPassword;
