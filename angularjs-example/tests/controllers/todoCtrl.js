/*global angular*/

define([
  'intern/chai!expect',
  'intern!bdd',
  'intern/order!angular/angular',
  'intern/order!angular-mocks/angular-mocks',
  'intern/order!todo/app',
  'intern/order!todo/controllers/TodoCtrl',
  'intern/order!todo/directives/todoBlur',
  'intern/order!todo/directives/todoEscape',
  'intern/order!todo/directives/todoFocus',
  'intern/order!todo/services/todoStorage'
], function (expect, bdd) {

  function inject (fn) {
    return function() {
      angular.injector(['ng', 'ngMock', 'todomvc']).invoke(fn);
    }
  }

  bdd.describe('Todo Controller', function () {
    var ctrl, scope;
    var todoList;
    var todoStorage = {
      storage: {},
      get: function () {
        return this.storage;
      },
      put: function (value) {
        this.storage = value;
      }
    };

    bdd.beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('TodoCtrl', { $scope: scope });
    }));

    bdd.it('should not have an edited Todo on start', function () {
      expect(scope.editedTodo).to.be.null;
    });

    bdd.it('should not have any Todos on start', function () {
      expect(scope.todos).to.have.length(0);
    });

    bdd.it('should have all Todos completed', function () {
      scope.$digest();
      expect(scope.allChecked).to.be.true;
    });

    bdd.describe('the path', function () {
      bdd.it('should default to "/"', function () {
        expect(scope.location.path()).to.equal('/');
      });

      bdd.describe('being at /active', function () {
        bdd.it('should filter non-completed', inject(function ($controller, $rootScope) {
          ctrl = $controller('TodoCtrl', {
            $scope: scope,
            $location: {
              path: function () { return '/active'; }
            }
          });

          scope.$digest();
          expect(scope.statusFilter.completed).to.be.false;
        }));
      });

      bdd.describe('being at /completed', function () {
        bdd.it('should filter completed', inject(function ($controller) {
          ctrl = $controller('TodoCtrl', {
            $scope: scope,
            $location: {
              path: function () { return '/completed'; }
            }
          });

          scope.$digest();
          expect(scope.statusFilter.completed).to.be.true;
        }));
      });
    });

    bdd.describe('having no Todos', function () {
      var ctrl;

      bdd.beforeEach(inject(function ($controller) {
        todoStorage.storage = [];
        ctrl = $controller('TodoCtrl', {
          $scope: scope,
          todoStorage: todoStorage
        });
        scope.$digest();
      }));

      bdd.it('should not add empty Todos', function () {
        scope.newTodo = '';
        scope.addTodo();
        scope.$digest();
        expect(scope.todos).to.have.length(0);
      });

      bdd.it('should not add items consisting only of whitespaces', function () {
        scope.newTodo = '   ';
        scope.addTodo();
        scope.$digest();
        expect(scope.todos).to.have.length(0);
      });


      bdd.it('should trim whitespace from new Todos', function () {
        scope.newTodo = '  buy some unicorns  ';
        scope.addTodo();
        scope.$digest();
        expect(scope.todos).to.have.length(1);
        expect(scope.todos[0].title).to.equal('buy some unicorns');
      });
    });

    bdd.describe('having some saved Todos', function () {
      var ctrl;

      bdd.beforeEach(inject(function ($controller) {
        todoList = [{
            'title': 'Uncompleted Item 0',
            'completed': false
          }, {
            'title': 'Uncompleted Item 1',
            'completed': false
          }, {
            'title': 'Uncompleted Item 2',
            'completed': false
          }, {
            'title': 'Completed Item 0',
            'completed': true
          }, {
            'title': 'Completed Item 1',
            'completed': true
          }];

        todoStorage.storage = todoList;
        ctrl = $controller('TodoCtrl', {
          $scope: scope,
          todoStorage: todoStorage
        });
        scope.$digest();
      }));

      bdd.it('should count Todos correctly', function () {
        expect(scope.todos).to.have.length(5);
        expect(scope.remainingCount).to.equal(3);
        expect(scope.completedCount).to.equal(2);
        expect(scope.allChecked).to.be.false;
      });

      bdd.it('should save Todos to local storage', function () {
        expect(todoStorage.storage).to.have.length(5);
      });

      bdd.it('should remove Todos w/o title on saving', function () {
        var todo = todoList[2];
        todo.title = '';

        scope.doneEditing(todo);
        expect(scope.todos).to.have.length(4);
      });

      bdd.it('should trim Todos on saving', function () {
        var todo = todoList[0];
        todo.title = ' buy moar unicorns  ';

        scope.doneEditing(todo);
        expect(scope.todos[0].title).to.equal('buy moar unicorns');
      });

      bdd.it('clearCompletedTodos() should clear completed Todos', function () {
        scope.clearCompletedTodos();
        expect(scope.todos).to.have.length(3);
      });

      bdd.it('markAll() should mark all Todos completed', function () {
        scope.markAll();
        scope.$digest();
        expect(scope.completedCount).to.equal(5);
      });

      bdd.it('revertTodo() get a Todo to its previous state', function () {
        var todo = todoList[0];
        scope.editTodo(todo);
        todo.title = 'Unicorn sparkly skypuffles.';
        scope.revertEditing(todo);
        scope.$digest();
        expect(scope.todos[0].title).to.equal('Uncompleted Item 0');
      });
    });
  });
});
