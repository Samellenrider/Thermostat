describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("temperature is 20 by default", function() {
    it('20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("temperature increase with up", function() {
    it('raises temperature by 5 degrees', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("temperature decrease with down", function() {
    it("lowers temperature by 5 degrees", function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15);
    });
  });

  describe("temperature low is 10 degrees", function() {
    it("error lower than 10 degrees", function() {
      expect(thermostat.down(11)).toEqual("You can't go below 10 degrees!");
    });
  });
});
