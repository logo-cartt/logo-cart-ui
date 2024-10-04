import { useFormContext, UseFormReturn } from "react-hook-form";

type Props = {
  children: (methods: UseFormReturn) => React.ReactNode;
};

export const ConnectForm = ({ children }: Props) => {
  const methods = useFormContext();

  return children({ ...methods });
};
