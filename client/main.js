import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.body.onCreated(function bodyOnCreated() {
  this.subscribe('items');
});

Template.body.helpers({
  items() {
    return Item.find({}, {});
  }
})

Template.body.events({
  'click button.undefined'() {
    const item = Item.findOne({});
    item.title = undefined;
    console.log('Set to undefined', item);
    item.save({ fields: ['title'], forceUpdate: true });
  },
  'click button.null'() {
    const item = Item.findOne({});
    item.title = null;
    console.log('Set to null', item);
    item.save({ fields: ['title'] });
  }
});
