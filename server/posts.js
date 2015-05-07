Meteor.publish("posts", function(limit) {
  return Posts.find({
    user_id: this.userId
  });
});