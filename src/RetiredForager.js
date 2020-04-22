var RetiredForagerBee = function(food, eat, treasureChest) {
  ForagerBee.call(this, food, eat, treasureChest);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest =[];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}