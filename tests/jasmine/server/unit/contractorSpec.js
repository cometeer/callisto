describe('contractor', function() {
  // setup
  beforeEach(function() {

  });
  // teardown
  afterEach(function() {

  });
  // tests
  it('should save a new record', function() {
    spyOn(Contractors, "insert");
    var doc = new ContractorModel('UPC');
    Meteor.methodMap.contractorCreate(doc);
    expect(Contractors.insert).toHaveBeenCalledWith(doc);
  });
});
