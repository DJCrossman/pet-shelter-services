/**
 * Pet.js
 *
 * @description :: A pet is a domestic or tamed animal kept for companionship or pleasure.
 * @docs        :: https://github.com/DJCrossman/pet-shelter-services#pet
 */

function uuid() {
 function s4() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 }
 return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = {
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function() {
        return uuid();
      }
    },

    name: {
      type: 'string',
      required: true
    },

    typeName: {
      type: 'string',
      required: true
    },

    breedName: {
      type: 'string',
      required: true
    },

    location: {
      type: 'string',
      required: true
    },

    lat: {
      type: 'float',
      required: true
    },

    long: {
      type: 'float',
      required: true
    }
  }
};
