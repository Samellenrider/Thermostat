 function Thermostat(){
    this.temperature = 20;
 };

 Thermostat.prototype.up = function(value) {
   this.temperature += value;
 };

 Thermostat.prototype.down = function(value) {
   this.temperature -= value;
 };

 if (temperature <== 10) {
   console.log("You can't go below 10 degrees!")
 }





   var error = "You can't go below 10 degrees!"
