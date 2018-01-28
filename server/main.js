import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Items.remove({});

  if (!Items.findOne()) {
    const item = new Item({
      title: Random.id(10),
      date: new Date(),
      order: 0
    });
    item.save();
  }
});

Meteor.publish('items', function () {
  return Items.find();
});