angular.module('dweet.core', [])
    .factory('Dweet', function( $http ){

        return {

            getTemperature : () => {
                //Dweet.getTemperature().then()
                var p = new Promise( (resolve, reject)  => {
                    $http({
                        method:"GET",
                        url:"https://dweet.io/get/dweets/for/temp-ng1-class"
                    }).then(
                        successResponse => {
                            //change data what ever
                            resolve(successResponse)
                        },
                        errorResponse => {}
                    )

                }  )
                return p;
            }
            

        }


    })