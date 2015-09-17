Meteor.publish("technicians", function() {
  return Technicians.find();
});
