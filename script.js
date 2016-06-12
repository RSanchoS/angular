var app = angular.module("app", ['ngRoute']);
 
 
app.config(['$routeProvider',function($routeProvider) {

//Las rutas apuntan a la palantilla grupos.html y mediante los controller se
//modifican los textos , videos e imagenes.


//Paginas en Construccion-------
  $routeProvider.when('/foo', {
  templateUrl: "enContruccion.html",
  controller: "enContruccionController"
  }); 

  $routeProvider.when('/bar', {
  templateUrl: "enContruccion.html",
  controller: "enContruccionController"
  });
//-----------------------------------

//Paginas de Grupos--------
  $routeProvider.when('/the-rolling-stone', {
    templateUrl: "grupos.html",
    controller: "the-rolling-stoneController"
  });
   
  $routeProvider.when('/the-beatles', {
    templateUrl: "grupos.html",
    controller: "the-beatlesController"
  });
   
  $routeProvider.when('/queen', {
    templateUrl: "grupos.html",
    controller: "queenController"
  });   
   
//-------------------------------------

//Pagina por Error--------------------
  $routeProvider.otherwise({
        redirectTo: '/home'
  });   
 
}]);

app.controller("homeController", ["$scope",function($scope) {
}]);
 
//Los controladores de los Grupos tienen :
// - video : para decidir que video es mostrado
// - imgUrl : para decidir que imagen es mostrada 
// - texto : pone el texto de la wikipedia
 
app.controller("the-rolling-stoneController", ["$scope",function($scope) {
  $scope.video="trs";
  $scope.imgUrl="http://www.cubadebate.cu/wp-content/uploads/2016/02/The-Rolling-Stones.jpg"
  $scope.texto="The Rolling Stones es una banda britanica de rock originaria de Londres. La banda se fundo en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en 1969, falleciendo al poco tiempo, siendo reemplazado por el guitarrista Mick Taylor, que dejaria el grupo en 1975 y seria a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyo al bajista Darryl Jones que, aunque toca con la banda desde la grabacion del album Voodoo Lounge en 1994, no es un miembro oficial.";
  $scope.titulo="The Rolling Stones";
}]);
 
app.controller("the-beatlesController", ["$scope",function($scope) {
  $scope.video="tbeatles";
  $scope.imgUrl="http://cdn.lopezdoriga.com/wp-content/uploads/2016/05/The-Beatles-Rolling-Stone.jpg"
  $scope.texto="The Beatles fue una banda de pop/rock inglesa activa durante la decada de 1960, y reconocida como la mas exitosa comercialmente y criticamente aclamada en la historia de la musica popular.1 2 3 4 5 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra ritmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (bateria, vocalista)";
  $scope.titulo="The Beatles";
}]);
 
 
app.controller("queenController", ["$scope",function($scope) {
  $scope.imgUrl="http://playradio.es/wp-content/uploads/2016/04/queen-ii-photo-session-in-late-1973.jpg";
  $scope.video="queen";
  $scope.texto="Queen es una banda britanica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, fallecido en 1991, y John Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continuan trabajando bajo el nombre Queen, por lo que la banda aun es considerada activa.4";
  $scope.titulo="Queen"

}]);

app.controller("enContruccionController", ["$scope",function($scope) {
}]);