import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAW7S_SEJGbe3K04--L_Pzxko1biUHCiw4",
  authDomain: "resta-79683.firebaseapp.com",
  databaseURL: "https://resta-79683.firebaseio.com",
  projectId: "resta-79683",
  storageBucket: "resta-79683.appspot.com",
  messagingSenderId: "200019669559"
};
firebase.initializeApp(config);

Template.promo.onRendered (function () {
  // show first screen animation
  setTimeout (function () {
    $('.promo').addClass('active');
  }, 600);

  // form validation
  $("#subscribe-top").validate({
        rules: {
          subscribe_top__email: {
              required: true,
              email: true
           },
        },
        messages: {
          subscribe_top__email: {
           required: "",
           email: ""
          },
        },
      submitHandler: function (form) {
        let mDate = new Date();
        let newRef = firebase.database().ref ('list/').push();
        newRef.set ({
          'mail': $('#fb_input_1')[0].value,
          'timestamp': mDate.toString(),
          'code': 0
        });
        alertify.success ('Thanks for subscribing!');
        return false; // required to block normal submit since you used ajax
      }
  });
});

Template.subscribe.onRendered (function () {
  $("#subscribe-bot").validate({
    rules: {
      subscribe_bot__email: {
          required: true,
          email: true
       },
    },
    messages: {
      subscribe_bot__email: {
       required: "",
       email: ""
       },

     },
     submitHandler: function (form) {
       let mDate = new Date();
       let newRef = firebase.database().ref ('list/').push();
       newRef.set ({
         'mail': $('#fb_input_2')[0].value,
         'timestamp': mDate.toString(),
         'code': 0
       });
       alertify.success ('Thanks for subscribing!');
       return false; // required to block normal submit since you used ajax
     }
  });
});
