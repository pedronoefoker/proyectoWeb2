
(function(){
  'use strict';
        //Nombre de la aplicación
                //Dependencias que nuestra aplicacion podría necesitar
angular
.module("myApp",[])
.controller("cursoCtrl", cursoCtrl);
//Un controlador es el encargado de manejar alguna funcionalidad de la página
function cursoCtrl(){
  var curso = this;

  curso.Android = [{'Android' : 'Android'}];
  curso.Arduino = [{'Arduino':'Arduino'}];
  curso.Bases    = [{'Bases':'Bases de Datos'}];
  curso.C1      = [{'C1':'C++'}];
  curso.C       = [{'C':'C'}];
  curso.C2      = [{'C2':'C#'}];
  curso.Di  = [{'Di':'Diseño WEB'}];
  curso.Emsamblado= [{'Emsamblado':'Emsamblado y Mantenimiento'}];
  curso.Computacion = [{'Computacion':'Computacion Forense'}];
  curso.Fortran = [{'Fortran':'Fortran'}];
  curso.IA = [{'IA':'Inteligencia Artificial'}];
  curso.Introduccion = [{'Introduccion':'Introduccion a la programacion'}];
  curso.ios = [{'ios' : 'ios'}];
  curso.Redes = [{'redes':'Redes'}];
  curso.Ruby = [{'Ruby':'Ruby'}]
  curso.ras = [{'ras':'Raspberry'}];
  curso.Python = [{'Python':'Python'}];
  curso.PHP = [{'PHP':'PHP'}];
  curso.Matlab= [{'Matlab':'Matlab'}];
  curso.Linux = [{'Linux':'Linux'},];
  curso.Laravel = [{'Laravel':'Laravel'}];
  curso.Java = [{'Java':'Java'}];
  


}

})();