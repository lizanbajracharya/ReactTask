import React, { useEffect, useState } from "react";
import FormControl from "../components/FormControl";
import axios from "axios";
import { postForm } from "../api/api";
import { toast } from "react-toastify";
import MapContainer from "../components/MapContainer";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [lng, setLng] = useState("36.8233");
  const [lat, setLat] = useState("-1.2884");
  const [dropdownData, setDropdownData] = useState();
  const [message, setMessage] = useState();

  const validation = () => {
    setMessage("Please Select a user");
  };
  const removeValidation = () => {
    setMessage("");
  };
  async function fetchData() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setDropdownData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      title,
      body: description,
      userId: user,
    };

    if (user === "") {
      toast.error("Please select a user");
    } else {
      postForm(formData);
      toast.success("Successfully submitted form");
      setDescription("");
      setTitle("");
      setUser("");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl
          label={"User"}
          data={dropdownData}
          setUser={setUser}
          validation={validation}
          message={message}
          setLng={setLng}
          setLat={setLat}
          removeValidation={removeValidation}
        />
        {/* <MapContainer lat={lat} lng={lng} /> */}
        <label>
          Title:
          <input
            type="text"
            id={"title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
