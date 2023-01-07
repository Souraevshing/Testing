const mockRespone = {
  data: {
    results: [
      {
        name: {
          first: 'Sourav',
          last: 'Kumar',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'Admin',
        },
      },
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(mockRespone),
}
