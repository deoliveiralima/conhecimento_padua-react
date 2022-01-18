import http from './http-common'

const getAll = () => {
  return http.get("/link");
};

const get = id => {
  return http.get(`/link/${id}`);
};

const create = data => {
  return http.post("/link", data);
};

const update = (id, data) => {
  return http.put(`/link/${id}`, data);
};

const remove = id => {
  return http.delete(`/link/${id}`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove,

};