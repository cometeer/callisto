Contractors = new Meteor.Collection('contractors');

ContractorModel = function(name) {
  this.contractorName = name;
  this.configOptions = [];
  this.addConfigOption = function(object) {
    this.configOptions.push(object);
  };
  this.isValid = function() {
    if (this.contractorName) {
      return true;
    }
  };
};

ContractorModelLoad = function(id){
  var data = Contractors.findOne({_id: id});
  return new ContractorModel(data);
};

Meteor.methods({
  contractorCreate: function(doc) {
    var c = new ContractorModel(doc);
    if (c.isValid()) {
      Contractors.insert(doc);
    }
  }
});
