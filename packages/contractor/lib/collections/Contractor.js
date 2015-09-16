Contractors = new Meteor.Collection('contractors');

ContractorModel = function(name) {
  this.contractorName = name;
  this.configOptions = [];
  this.addConfigOption = function(object){
    this.configOptions.push(object);
  };
};

Meteor.methods({
  contractorCreate: function(doc) {
    Contractors.insert(doc);
  }
});
