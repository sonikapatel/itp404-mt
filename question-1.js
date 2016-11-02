var url = 'http://itp-api.herokuapp.com/api/v1/me';


var promise = $.ajax({
      url: url,
      type: 'get',
    });
promise.then(function(response){
   //console.log(response);
        var templateSource = $('#name-template').html();
        var template = Handlebars.compile(templateSource);


        var html = template({
          person: response});
        
        $('#information').html(html);
         }, function(){
         console.log("there was an error");
     
   });

// <!-- http://jsbin.com/huzexoxuno/edit?html,js,console,output JSBIN file-->