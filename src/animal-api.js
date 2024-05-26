export const baseUrl = 'https://pixabay.com/api/';
export const API_KEY = '44085465-e6844db63fbe7101afd8032eb';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
