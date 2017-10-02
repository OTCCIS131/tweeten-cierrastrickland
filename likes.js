 var add = (function () {
  var counter = 50;
    return function () {return counter += 1;}
           })();
                                
     function myFunction(){
      document.getElementById("likes").innerHTML = add();
 }
              