module.exports.default = class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  get(req, res) {
    res.send(this.userService.get());
  }

  getById(req, res) {
    const { id } = req.params;

    res.send(this.userService.getById(id));
  }
};
