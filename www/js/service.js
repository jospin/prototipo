angular.module('starter.service', [])

.factory('confirmService', ['$http', 'PARSE_CREDENTIALS', function($http,PARSE_CREDENTIALS) {

        return {
            insert: function(url, data){

                return $http({ method: "get",
                      url: url,
                      params: {
                        'oauth_token': PARSE_CREDENTIALS.APP_TOKEN,
                        'oauth_consumer_key': PARSE_CREDENTIALS.OATH_CONSUMER_KEY,
                        'socialId': data.socialId,
                        'filiacao': data.filiacao,
                        'nome': data.nome,
                        'macAddress': data.macAddress,
                        'email': data.email,
                    },
                    response: {
                    }
                });
            }
        }
    }])

.value('PARSE_CREDENTIALS',{
    APP_TOKEN: '2d1f58a9c13dea2d5c3a1216b7093788054d4bafd',
    OATH_CONSUMER_KEY:'bb3ba08b364e9e525fddd5b36c136e2d054d3ca83'
});


    // function handleError( response ) {

    //     // The API response from the server should be returned in a
    //     // nomralized format. However, if the request was not handled by the
    //     // server (or what not handles properly - ex. server error), then we
    //     // may have to normalize it on our end, as best we can.
    //     if (!angular.isObject( response.data ) || !response.data.message) {
    //         return( $q.reject("An unknown error occurred.") );
    //     }

    //     // Otherwise, use expected error message.
    //     return( $q.reject( response.data.message ) );

    // }

    // // I transform the successful response, unwrapping the application data
    // // from the API response payload.
    // function handleSuccess( response ) {
    //     return( response.data );
    // }