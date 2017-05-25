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
                            var latestData;
                            var haveLatest = false
                            successResponse.data.with.forEach( data => {
                                if(!haveLatest && data && data.created){
                                    latestData = data;
                                    haveLatest = true;
                                }
                                else {       
                                        var latestTime = new Date(latestData.created)
                                        var now = new Date(data.created)
                                        if( now.getTime()  - latestTime.getTime() > 0)
                                            latestData = data;
      
                                }
                            })
                            resolve(latestData)
                        },
                        errorResponse => {}
                    )

                }  )
                return p;
            }
            

        }


    })