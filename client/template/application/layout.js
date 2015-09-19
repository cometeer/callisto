Template.layout.helpers({
  language: function() {
    return Session.get('currentLanguage');
  }
});

Template.layout.events({
  'click .lang': function(e) {
    var currentLanguage = Session.get('currentLanguage');
    if (currentLanguage === 'nl') {
      Session.set('currentLanguage', 'en');
    } else {
      Session.set('currentLanguage', 'nl');
    }
    console.log(currentLanguage);
    TAPi18n.setLanguage(Session.get('currentLanguage'));
  }
});

Template.layout.onRendered(
  function() {
    if (!Session.get('currentLanguage')) {
      Session.set('currentLanguage', 'nl');
    }
    TAPi18n.setLanguage(Session.get('currentLanguage'));
  }
);
