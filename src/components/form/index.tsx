import { Input } from "./components";

const FormControl = ({ control, ...rest }: any) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
