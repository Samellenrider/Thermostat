function Thermostat(){
    this.temperature = 20;
  };

  Thermostat.prototype.up = function(value) {
   this.temperature += value;
  };

  Thermostat.prototype.down = function (value){
    if (this.temperature - value < 10) {
       throw 'cannot decrease temperature lower than min';
    } else {
      this.temperature -= value;
    };
   };
