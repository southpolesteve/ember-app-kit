var App;

module('Acceptances - Ajax', {
  setup: function(){
    App = startApp();
    fakehr.start();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('ajax renders', function(){
  expect(2);

  visit('/ajax');
  httpRespond('/api/posts', [{"title": "a post"}, {"title": "another post"}]);
  andThen(function(){
      var list = find('ul li');

      equal(list.length, 2);
    });
});