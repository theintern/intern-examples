/*global angular*/

define([
  'intern/chai!expect',
  'intern!bdd',
  'intern/order!angular/angular',
  'intern/order!angular-mocks/angular-mocks',
  'intern/order!todo/app',
  'intern/order!todo/directives/todoBlur',
  'intern/order!todo/directives/todoFocus'
], function (expect, bdd) {

  function inject (fn) {
    return function() {
      angular.injector(['ng', 'ngMock', 'todomvc']).invoke(fn);
    }
  }

  bdd.describe('todoBlur directive', function () {
    var scope, compile, browser;

    bdd.beforeEach(inject(function ($rootScope, $compile, $browser) {
      scope = $rootScope.$new();
      scope.mock = {
        called: false,
        call: function () { this.called = true; }
      };
      compile = $compile;
      browser = $browser;
    }));

    bdd.it('should $apply on blur', function () {
      var el = angular.element('<input todo-blur="mock.call()">');
      compile(el)(scope);

      el.triggerHandler('blur');
      scope.$digest();

      expect(scope.mock.called).to.be.true;
    });

    bdd.it('should focus on truthy expression', function () {
      scope.focus = false;

      var el = angular.element('<input todo-focus="focus">');
      compile(el)(scope);

      expect(browser.deferredFns).to.have.length(0);

      scope.$apply(function () {
        scope.focus = true;
      });

      expect(browser.deferredFns).to.have.length(1);
    });
  });
});
