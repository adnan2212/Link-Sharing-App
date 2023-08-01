import Input from "./Input";

const BasicDetails = ({
  firstName,
  lastName,
  email,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
}) => {
  return (
    <fieldset className="mx-auto flex w-[92%] flex-col justify-center gap-3 rounded-xl bg-[#FAFAFA] px-0 py-5 sm:mb-6 sm:h-auto sm:w-[92%] sm:p-5">
      <Input
        type="text"
        label="First name*"
        name="firstName"
        placeholder="e.g. John"
        value={firstName}
        onChange={onFirstNameChange}
        required
      />
      <Input
        type="text"
        label="Last name*"
        name="lastName"
        placeholder="e.g. Doe"
        value={lastName}
        onChange={onLastNameChange}
        required
      />
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="e.g. email@example.com"
        value={email}
        onChange={onEmailChange}
        required
      />
    </fieldset>
  );
};

export default BasicDetails;
