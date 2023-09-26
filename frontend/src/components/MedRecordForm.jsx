import React from "react";

const MedRecordForm = () => {
  const [formData, setFormData] = React.useState({
    medicine: "",
    temperature: "",
    notes: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <input
        type="number"
        className="form--temperature"
        step="0.1"
        min="92.0"
        max="112.0"
        className="form--temperature"
        value={formData.temperature}
        placeholder="Enter temperature"
      />
      <input
        type="text"
        className="form--medicine"
        value={formData.medicine}
        onChange={handleChange}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="form--notes"
        value={formData.notes}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default MedRecordForm;
