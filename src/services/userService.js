import { http } from './config';

export default {
  listUsers: () => {
    return http.get('users')
  },

  createUser: (val) => {
    return http.post('users', val);
  },

  delete: (id) => {
    return http.delete('/users/' + id);
  }


}