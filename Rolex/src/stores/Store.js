import { createPinia } from 'pinia';

const store = createPinia();

export const useStore = () => {
  return store();
};

export default store;