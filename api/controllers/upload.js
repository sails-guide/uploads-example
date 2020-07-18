module.exports = {
  friendlyName: 'Upload',
  description: 'Upload something.',

  files: [
    'profileImage'
  ],

  inputs: {
    name: {
      type: 'string',
      required: true
    },

    profileImage: {
      type: 'ref'
    }
  },

  exits: {

  },

  fn: async function (inputs) {
    var uploadedFile = await sails.uploadOne(inputs.profileImage);

    console.log('Form inputs', {
      name: inputs.name,
      uploadedFile
    })

    // All done.
    return {
      name: inputs.name,
      uploadedFile: uploadedFile || 'No file uploaded'
    }
  }
}
