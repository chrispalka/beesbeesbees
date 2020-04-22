var ForagerBee = function(food, eat, color) {
  Bee.call(this, food, eat, color);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly= true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

