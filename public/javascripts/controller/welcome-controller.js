require(['service/welcome-service'], function(welcomeService){
    $('#testBtn').click(function() {
      welcomeService.test();
    });
});