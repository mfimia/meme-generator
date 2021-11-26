// Notes taken to practice forms (Scrimba React)
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
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

  return (
    <form>
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
    </form>
  );
}
