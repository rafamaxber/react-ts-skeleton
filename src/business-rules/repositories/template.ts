import { TemplateRepositoryType } from '../types';

export default (): TemplateRepositoryType => ({
  async fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();
  },
});
