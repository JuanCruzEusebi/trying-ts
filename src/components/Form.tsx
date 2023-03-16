import { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonts"
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          value={inputValues.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;
