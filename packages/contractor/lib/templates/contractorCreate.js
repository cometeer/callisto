Template.contractorCreate.events({
  'submit form': function(e) {
    e.preventDefault();
  },
  'click .addOption': function(e) {
    // get the set of options
    var options = Session.get('configOptions');
    // if there where no options, create empty array, and load it right away.
    if (typeof options === 'undefined') {
      Session.set('configOptions', []);
      options = Session.get('configOptions');
    }
    // create a new option with the values of the fields
    var option = {};
    option.name = $('#newConfigOptionName').val();
    option.value = $('#newConfigOptionValue').val();
    // clear the fields for a new entry
    document.getElementById("newConfigOptionName").value = '';
    document.getElementById("newConfigOptionValue").value = '';
    // push and save it in session
    options.push(option);
    Session.set('configOptions', options);
  },
});

Template.contractorCreate.helpers({
  configOptions: function() {
    return Session.get('configOptions');
  },
});
