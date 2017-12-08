document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    FCMPlugin.getToken(
        function(token){
            console.log("token :"+ token)
        },
        function(err){
            console.log('error retrieving token: ' + err);
        }
    );
    FCMPlugin.onNotification(
        function(data){
            if(data.wasTapped){
                console.log( JSON.stringify(data) );
                console.log('아아아');
            }else{
                console.log( JSON.stringify(data) );
                console.log('오오오');
            }
        },
        function(msg){
            console.log('onNotification callback successfully registered: ' + msg);
        },
        function(err){
            console.log('Error registering onNotification callback: ' + err);
        }
    );
}
