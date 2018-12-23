module.exports.default = class UserService {
  static get() {
    return [
      {
        id: 1,
        name: 'user1',
      },
      {
        id: 2,
        name: 'user2',
      },
    ];
  }

  static getById(id) {
    return {
      id,
      name: 'user1',
    };
  }
};
