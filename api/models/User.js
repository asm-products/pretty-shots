/**
* User.js
*
* @description :: Default user model
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },

    uuid: {
      type: 'string',
      primaryKey: true,
      required: true
    },

    email: {
      type: 'email',
      required: 'true'
    }

  }
};

