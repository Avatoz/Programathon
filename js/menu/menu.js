$( "#divCamino1" ).click(function () {
  console.log("Test");
});

function handler1() {
  console.log( "handler1" );
}

$( document ).ready(function() {
    console.log( "document loaded" );
});

var $test = $( "#divCamino1" );

$test.on( "click", handler1);