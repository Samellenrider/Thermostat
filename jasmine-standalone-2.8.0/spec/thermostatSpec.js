describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


  describe("returns fizz when divided by 3", function() {
    it('fizz for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });
});
