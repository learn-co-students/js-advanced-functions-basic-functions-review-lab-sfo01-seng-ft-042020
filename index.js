function saturdayFun(string="roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

function mondayWork(string='go to the office') {
  return `This Monday, I will ${string}.`;
}

function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
}

function actionApplyer (integer, array) {
  let a = integer

  for (let i of array) {
    a = i(a)
  }
  return a
}