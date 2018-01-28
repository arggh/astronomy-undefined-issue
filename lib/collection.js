import { Class } from 'meteor/jagi:astronomy';

Items = new Mongo.Collection('items');

Item = Class.create({
  name: 'Item',
  collection: Items,
  secured: false,
  events: {
   beforeUpdate: function(e) {
    console.log('Updating item', JSON.stringify(e));
   }
  },
  fields: {
    title: {
      type: String,
      optional: true
    },
    date: {
      type: Date,
      optional: true
    }
  }
});
