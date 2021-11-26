// Notes taken to practice forms (Scrimba React)
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  //   We handle all inputs with the same eventhandler. Registering everysingle state change
  function handleChange(event) {
    //   We destructure the events in the properties we need (they will be declared in the JSX in "return" statement)
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        //   We make sure we keep everything that was there. Except for the handled change
        ...prevFormData,
        // Depending on what type of change, we update the "name" property in the state object
        // The "name" property is declared in the state object and in the JSX element. They all will have the same name so we can use this syntax
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        // All inputs need a name so we can identify them in the event handler
        name="firstName"
        // Value is updated here once the state is updated. This way, React keeps control of the component:
        // Instead of the input dictating just the state, it also dictates the value and closes the circle: input -> state -> value
        // This way, the component is "controlled"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      {/* We link the label via "htmlFor" */}
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />

      {/* Declaring a field with radio buttons and a legend */}
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          //   We add an id to it so it can be associated with a label
          id="unemployed"
          //   All radio buttons have the same name. This way we tell react that they are part of the same element
          //   They are essentially 3 different responses for the same question
          name="employment"
          value="unemployed"
          //   Converting the "checked" attribute into boolean statement of employment being equal to its value to control the status of it being checked or not
          checked={formData.employment === "unemployed"}
          //   Change is handled by the same event handler
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        {/* The first option initializes the select menu with the option "--Choose--" */}
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      {/* The form will be submitted with a button. By default is "type=submit" */}
      <button>Submit</button>
    </form>
  );
}
