import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },

  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },

  async update(todo) {
    const result = await axios.patch(ENDPOINT_URL + "/" + todo.id, todo);
    console.log(result);
    return result.data;
  },

  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
    return result.data;
  },
};

export default todoApi;
