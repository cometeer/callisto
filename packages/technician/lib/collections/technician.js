Technicians = new Meteor.Collection('technicians');

TechnicianModel = function(data) {
  // if a mongo _id exists keep it, don't pollute the object if not.
  // certificates may only be set by sepcial methods, data can be loaded from database but not set as part of creating a new object.
  if (data._id) {
    this._id = data._id;
    this.userId = data.userId;
    this.certificates = data.certificates;
  }
  // model layout / accepted fields
  // person / contact data
  this.firstName = data.firstName;
  this.middleName = data.middleName;
  this.lastName = data.lastName;
  this.email = data.email;
  // home address
  this.homeAddress = {};
  this.homeAddress.street = data.address.street;
  this.homeAddress.houseNumber = data.address.houseNumber;
  this.homeAddress.houseNumberAdd = data.address.houseNumberAdd;
  this.homeAddress.city = data.address.city;
  this.homeAddress.country = data.address.country;

  // validate self logic
  this.isValid = function() {
    if (this.email) {
      return true;
    }
  };
  this.addCertificate = function(cert) {
    if (!this.certificates) {
      this.certificates = [];
    }
    var c = new CertificateModel(cert);
    if (c.isValid()) {
      this.certificates.push(c);
    }
  };
  this.createSystemUser = function() {
  // TODO figure this out for google auth.
  //   if (this.isValid()) {
  //     this.userId = Accounts.createUser({
  //       username: this.firstName + this.lastName,
  //       email: this.email,
  //     });
  //     Accounts.sendEnrollmentEmail(this.userId);
  //   }
  };
};

TechnicianModelLoad = function(id) {
  var data = Technicians.findOne({
    _id: id
  });
  return new TechnicianModel(data);
};

CertificateModel = function(cert) {
  var statusEnum = {
    active: 'active',
    pending: 'pending',
    closed: 'closed',
  };
  this.name = cert.name;
  this.status = statusEnum[cert.status];
  this.validFrom = cert.validFrom;
  this.validTo = cert.validTo;
  this.isValid = function() {
    if (this.status) {
      return true;
    }
  };
};

Meteor.methods({
  technicianCreate: function(doc) {
    var t = new TechnicianModel(doc);
    t.createSystemUser();
    if (t.isValid()) {
      Technicians.insert(t);
    }

  },
  technicianCertificateUpdate: function(techId, cert) {
    var t = TechnicianModelLoad(techId);
    t.addCertificate(cert);
    if (t.isValid()) {
      Technicians.update({
        _id: techId
      }, {
        $set: {
          certificates: t.certificates
        }
      });
    }
  }
});
