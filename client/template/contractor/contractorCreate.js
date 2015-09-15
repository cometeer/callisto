Template.contractorCreate.events({
  'submit form': function(e) {
    e.preventDefault();
  },
  'click .addOption': function(e) {
    var options = Session.get('configOptions');
    if (typeof options === 'undefined') {
      Session.set('configOptions', []);
    }
    var option = {};
    var name = $('#newConfigOptionName').val();
    var value = $('#newConfigOptionValue').val();
    option.name = name;
    option.value = value;
    console.log(options);
    options.push(option);
    Session.set('configOptions', options);
  },
});

Template.contractorCreate.helpers({
  configOptions: function() {
    return Session.get('configOptions');
  },
});

Template.configOption.helpers({
  logThis: function(){
    console.log(this);
  }
});
