/**
* Project.js
*
* @description :: This model represents each editing order of work.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    //User who is the purchaser for the project.
    owner: {
      type: 'string',
      required: true
    },

    //User who is doing the editing for the project
    editor: {
      type: 'string'
    },

    videodetails: {
      title: {
        type: 'string'
      },
      videotype: {
        type: 'string'
      },
      preferredlength: {        //This one is kind of unwieldy, will probably want to examine/change this
        type: 'string',
        enum: ['0 - 1 minutes', '1 - 3 minutes', '3 - 5 minutes', '5 - 8 minutes',
                  '8 - 10 minutes', ' 10 - 15 minutes', ' 15 - 20 minutes', '20+ minutes'],
        required: true
      },
      videourl: {
        type: 'string',
        required: true
      }
    },

    //Notes from the owner to the editor
    projectnotes: {
      type: 'string'
    },

    completionstatus: {
      type: 'boolean'
    }
  }
};

