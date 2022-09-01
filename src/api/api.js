import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return response;
};

export const postForm = async (formData) => {
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    formData
  );
  return response;
};
