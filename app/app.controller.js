(function() {
  'use strict';

  angular
    .module('app')
    .controller('budgettrackerController', budgettrackerController);

  budgettrackerController.$inject = [];

  /* @ngInject */
  function budgettrackerController() {
    var vm = this;

    vm.incomes = [];
    vm.addIncome = function() {
      vm.incomes.push(vm.newIncome);

      vm.newIncome = {};
    };

    vm.expenses = [];
    vm.addExpense = function() {
      vm.expenses.push(vm.newExpense);

      vm.newExpense = {};
    };

    vm.getTotalIncome = function() {
      var totalSum = vm.incomes.reduce(function(accumulatedValue, current) {
        return accumulatedValue + current.amount;
      }, 0);

      return totalSum;
    };

    vm.getTotalExpenses = function() {
      var totalSum = vm.expenses.reduce(function(accumulatedValue, current) {
        return accumulatedValue + current.amount;
      }, 0);

      return totalSum;
    };

  }

})();
