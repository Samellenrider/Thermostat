function Thermostat(){
    this.temperature = 20;
    this.powersavingmode = true;
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

   Thermostat.prototype.up = function (value){
     if (this.powersavingmode === true && this.temperature + value > 25) {
        throw 'You cannot go over 25 in PSM!'
     } else {
       this.temperature += value;
     };
    };
