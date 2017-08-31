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


    it('raises temperature by 5 degrees', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });



    it("lowers temperature by 5 degrees", function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15);
    });
  

  it('temperature cant be decreased lower than 10', function() {
    expect(function() {thermostat.down(11)}).toThrow('cannot decrease temperature lower than min');
  });
});
