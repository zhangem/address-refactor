beforeEach(function() {
  Contact.all = [];
});
describe("Contact", function() {
  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
    it("creates an empty array for the addresses property", function(){
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
  });
  describe("fullName", function() {
    it("combines first and last names", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Mary";
      testContact.lastName = "Jane";
      testContact.fullName().should.equal("Mary Jane");
    });
  });
  describe("create", function(){
    it("creates a new instance of a Contact", function(){
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
  describe("createAddress", function(){
    it("creates an address object", function(){
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
    describe("createPhoneNumber", function(){
    it("creates a phone number object", function(){
      var testContact = Contact.create();
      var testPhone = testContact.createPhoneNumber();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
    it("adds the phone number to the numbers property of the contact", function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhoneNumber();
      testContact.numbers.should.eql([testPhone]);
    });
  });
});

describe("Address", function(){
  describe("initialize", function(){
    it("sets the street, city and state", function(){
      var testAddress = Object.create(Address);
      testAddress.initialize("street", "city", "state");
      testAddress.street.should.equal("street");
      testAddress.city.should.equal("city");
      testAddress.state.should.equal("state");
    });
  });
  describe("fullAddress", function(){
    it("makes formatting nice on addresses", function(){
      var testAddress = Object.create(Address);
      testAddress.street = "street";
      testAddress.city ="city";
      testAddress.state = "state";
      testAddress.fullAddress().should.equal("street, city, state");
    });
  });
});

describe("Phone", function(){
  describe("initialize", function(){
    it("sets the area code, first three numbers and last four numbers", function(){
      var testPhone = Object.create(Phone);
      testPhone.initialize("123", "123", "1234");
      testPhone.areaCode.should.equal("123");
      testPhone.firstThree.should.equal("123");
      testPhone.lastFour.should.equal("1234");
    });
  });
  describe("fullPhone", function(){
    it("makes formatting nice on phone numbers", function(){
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "areaCode";
      testPhone.firstThree ="firstThree";
      testPhone.lastFour = "lastFour";
      testPhone.fullPhone().should.equal("areaCode-firstThree-lastFour");
    });
  });
  describe("valid", function(){
    it("returns true if the input is a valid phone number", function(){
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "123";
      testPhone.firstThree = "234";
      testPhone.lastFour = "1234";
      testPhone.valid().should.equal(true);
    });

    it("return false if the input is not a valid phone number", function() {
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "1@3";
      testPhone.firstThree = "555";
      testPhone.lastFour = "6666";
      testPhone.valid().should.equal(false);
    });
  });
});

