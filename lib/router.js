
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: '404',
   yieldTemplates: {
	    'header': {to: 'header'},
	    'footer': {to: 'footer'}
	    }
	 
});

// Router.onBeforeAction(function(pause) {
//   if (! Meteor.userId()) {
//     this.setLayout(null);
//     this.render('mento');
//     pause();
//   } else {
//     this.setLayout(this.lookupLayoutTemplate());
//   }
// });


Router.map( function () {
	  this.route('mento' ,'mento');
  	  this.route('about' ,'about');  
  	  this.route('posts' ,'posts');  
});


