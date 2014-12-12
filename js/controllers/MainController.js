
app.controller('MainController', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$filter',
    function MainController($scope, $rootScope, $http, $state, $stateParams, $filter) { 
        
    $scope.headlines = "Hi, ik ben hier gekomen via de controller!";
    $scope.sidemenu = false;

    $scope.toggle_sidemenu = function () {
    	$scope.sidemenu =! $scope.sidemenu;
    }

    $scope.cases = [
    {"price": ["\u20ac 8,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/413049/fractal-design-silent-series-r2-40mm.html"], "title": ["Fractal Design Silent Series R2 40mm"]},
{"price": ["\u20ac 6,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/468411/noiseblocker-blacksilent-xm1-40mm.html"], "title": ["Noiseblocker BlackSilent XM1, 40mm"]},
{"price": ["\u20ac 7,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/892039/scythe-slip-stream-120mm-fan-500rpm.html"], "title": ["Scythe Slip Stream 120mm Fan, 500rpm"]},
{"price": ["\u20ac 22,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/881015/noctua-nf-p12-120mm-fan.html"], "title": ["Noctua NF-P12 120mm Fan"]},
{"price": ["\u20ac 14,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/131656/coolermaster-megaflow-200mm-700rpm.html"], "title": ["CoolerMaster MegaFlow, 200mm, 700rpm"]},
{"price": ["\u20ac 7,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/131655/coolermaster-sickleflow-blue.html"], "title": ["CoolerMaster Sickleflow Blue"]},
{"price": ["\u20ac 9,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/131691/coolermaster-r4-bmbs-20pk-r0.html"], "title": ["CoolerMaster R4-BMBS-20PK-R0"]},
{"price": ["\u20ac 6,50"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/526027/gelid-silent-pwm-80mm-2000rpm-grijs.html"], "title": ["Gelid Silent PWM, 80mm, 2000rpm, Grijs"]},
{"price": ["\u20ac 6,50"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/526028/gelid-silent-pwm-92mm-2000rpm-grijs.html"], "title": ["Gelid Silent PWM, 92mm, 2000rpm, Grijs"]},
{"price": ["\u20ac 23,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/881023/noctua-nf-p14-flx.html"], "title": ["Noctua NF-P14 FLX"]},
{"price": ["\u20ac 7,50"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/131693/coolermaster-r4-bm8s-30pk-r0.html"], "title": ["CoolerMaster R4-BM8S-30PK-R0"]},
{"price": ["\u20ac 7,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/892041/scythe-slip-stream-120mm-fan-1200rpm.html"], "title": ["Scythe Slip Stream 120mm Fan, 1200rpm"]},
{"price": ["\u20ac 22,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/929002/be-quiet-silent-wings-2-120mm.html"], "title": ["Be Quiet! Silent Wings 2, 120mm"]},
{"price": ["\u20ac 6,50"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/468427/noiseblocker-blacksilent-xr1.html"], "title": ["Noiseblocker BlackSilent XR1"]},
{"price": ["\u20ac 22,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/881030/noctua-nf-f12-pwm-120mm-1500rpm.html"], "title": ["Noctua NF-F12 PWM, 120mm, 1500rpm"]},
	{"price": ["\u20ac 15,00"], "stock": ["Product is op voorraad"], "link": ["http://www.informatique.nl/538369/corsair-af140-140mm-1200rpm-rood.html"], "title": ["Corsair AF140, 140mm, 1200rpm, Rood"]}
]


	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams){ 
	      if($scope.sidemenu == true) {
	      $scope.sidemenu = false;
	    }
	})


    }
]);

