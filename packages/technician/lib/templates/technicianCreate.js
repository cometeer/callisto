Template.technicianCreate.events({
  'submit form': function(e) {
    e.preventDefault();
    var technician = {};
    technician.firstName = $('#firstName').val();
    technician.middleName = $('#middleName').val();
    technician.lastName = $('#lastName').val();
    technician.email = $('#email').val();
    technician.address = {};
    technician.address.street = $('#street').val();
    technician.address.houseNumber = $('#houseNumber').val();
    technician.address.houseNumberAdd = $('#houseNumberAdd').val();
    technician.address.city = $('#city').val();
    technician.address.country = $('#country').val();
    Meteor.call('technicianCreate', technician);
  },
});
