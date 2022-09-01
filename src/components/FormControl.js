import React from "react";

const FormControl = ({
  label,
  data,
  setUser,
  message,
  validation,
  setLng,
  setLat,
  removeValidation,
}) => {
  const onChange = (e) => {
    setUser(e.target.value.split(",")[0]);
    setLng(e.target.value.split(",")[1]);
    setLat(e.target.value.split(",")[2]);
    if (e.target.value === "") {
      validation();
    } else {
      removeValidation();
    }
  };
  return (
    <div>
      <span style={{ color: "red" }}>{message || ""}</span>
      <label>
        {label}
        <select name="users" id="users" onChange={(e) => onChange(e)}>
          <option value="">Select User</option>
          {data?.map((d) => (
            <>
              <option
                value={[d?.id, d?.address?.geo?.lng, d?.address?.geo?.lat]}>
                {d?.name}
              </option>
            </>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FormControl;
