const UserModel = require('../models/User.model');
const CountryModel = require('../models/Country.model');
const CustomerModel = require('../models/Customer.model');

module.exports = class ModelsLoader {
  constructor() {
    this.userModel = UserModel;
    this.countryModel = CountryModel;
    this.customerModel = CustomerModel;
  }
};
