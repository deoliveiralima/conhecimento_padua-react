import http from './http-common'

const getAll = () => {
  return http.get("/tutorial");
};

const get = id => {
  return http.get(`/tutorial/${id}`);
};

const create = data => {
  return http.post("/tutorial", data);
};

const update = (id, data) => {
  return http.put(`/tutorial/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorial/${id}`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove,

};