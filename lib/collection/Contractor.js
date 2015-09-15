Contractors = new Meteor.Collection('contractors');

ContractorModel = function(name) {
  this.name = name;
};

Meteor.methods({
  contractorCreate: function(doc) {
    Contractors.insert(doc);
  }
});
