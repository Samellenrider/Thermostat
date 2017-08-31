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
});
