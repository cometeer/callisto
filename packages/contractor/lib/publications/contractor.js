Meteor.publish("contractors", function() {
  return Contractors.find();
});
