Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Errors = new Mongo.Collection(null);
throwError = function(message) {
  Errors.insert({message: message});
};