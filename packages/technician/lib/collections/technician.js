Technicians = new Meteor.Collection('technicians');

TechnicianModel = function(data) {
  this.firstName = data.firstName;
  this.middleName = data.middleName;
  this.lastName = data.lastName;
  this.email = data.email;
  this.homeAddress = {};
  this.homeAddress.street = data.address.street;
  this.homeAddress.houseNumber = data.address.houseNumber;
  this.homeAddress.houseNumberAdd = data.address.houseNumberAdd;
  this.homeAddress.city = data.address.city;
  this.homeAddress.country = data.address.country;
  this.isValid = function(){
    if (this.email){
      return true;
    }
  };
};

Meteor.methods({
  technicianCreate: function(doc) {
    var t = new TechnicianModel(doc);
    if (t.isValid()){
      Technicians.insert(t);
    }
  },
  technicianUpdate: function(){},
  technicianDelete: function () {}
});
