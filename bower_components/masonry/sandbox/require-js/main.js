requirejs.config({paths:{jquery:"../../bower_components/jquery/dist/jquery"}}),requirejs(["require","jquery","../../dist/masonry.pkgd"],function(r,e,i){r(["jquery-bridget/jquery.bridget"],function(){e.bridget("masonry",i),e("#basic").masonry({columnWidth:60})})});