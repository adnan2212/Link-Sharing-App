import Input from "./Input";

const BasicDetails = () => {
  return (
    // <fieldset className="mx-auto mb-[115px] mt-0 flex  w-[92%] flex-col justify-center gap-3 rounded-xl bg-[#FAFAFA] px-0 py-5 sm:mb-6 sm:h-auto sm:w-[92%] sm:p-5">
    <fieldset className="mx-auto flex w-[92%] flex-col justify-center gap-3 rounded-xl bg-[#FAFAFA] px-0 py-5 sm:mb-6 sm:h-auto sm:w-[92%] sm:p-5">
      <Input
        type="text"
        label="First name*"
        name="firstName"
        placeholder="e.g. John"
        required
      />
      <Input
        type="text"
        label="Last name*"
        name="lastName"
        placeholder="e.g. Doe"
        required
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="e.g. email@example.com"
      />
    </fieldset>
  );
};

export default BasicDetails;
