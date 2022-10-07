import axios from 'axios';
import config from './config';

const get = async (path: string, params?: object) =>
  await axios.get(config.server.baseUrl + path, params);

const post = async (path: string, params?: object) =>
  await axios.post(config.server.baseUrl + path, params);

const put = async (path: string, params?: object) =>
  await axios.put(config.server.baseUrl + path, params);

const _delete = async (path: string, params?: object) =>
  await axios.delete(config.server.baseUrl + path, params);

export default {
  get,
  post,
  put,
  delete: _delete
};