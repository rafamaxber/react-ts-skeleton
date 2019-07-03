import { RepositoryType } from '../types';

export default ({ templateRepository }: RepositoryType) => ({
  async fetchPosts() {
    const response = await templateRepository.fetchPosts();

    return response;
  },
});
