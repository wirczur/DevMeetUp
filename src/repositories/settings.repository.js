import HttpService from './http.service';

const resource = 'settings.json';

export default {
  async get() {
    const { data } = await HttpService.get(resource);
    return data;
  },
};
