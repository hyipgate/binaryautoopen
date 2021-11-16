var terpasang = false;
var k1Terpasang = false;
var opK1="";
var currentTIme;
var mulai = setInterval(function(){
    var myArray = {
        "00:03":"S",
        "00:08":"S",
        "00:13":"B",
        "00:18":"S",
        "00:23":"B",
        "00:28":"B",
        "00:33":"S",
        "00:38":"B",
        "00:43":"B",
        "00:48":"S",
        "00:53":"B",
        "00:58":"S",
        "01:03":"S",
        "01:08":"B",
        "01:13":"S",
        "01:18":"B",
        "01:23":"S",
        "01:28":"B",
        "01:33":"B",
        "01:38":"S",
        "01:43":"S",
        "01:48":"B",
        "01:53":"S",
        "01:58":"S",
        "02:03":"B",
        "02:08":"S",
        "02:13":"S",
        "02:18":"B",
        "02:23":"S",
        "02:28":"S",
        "02:33":"B",
        "02:38":"S",
        "02:43":"S",
        "02:48":"B",
        "02:53":"B",
        "02:58":"B",
        "03:03":"S",
        "03:08":"B",
        "03:13":"S",
        "03:18":"S",
        "03:23":"S",
        "03:28":"S",
        "03:33":"S",
        "03:38":"B",
        "03:43":"B",
        "03:48":"B",
        "03:53":"S",
        "03:58":"S",
        "04:03":"S",
        "04:08":"S",
        "04:13":"B",
        "04:18":"S",
        "04:23":"B",
        "04:28":"S",
        "04:33":"S",
        "04:38":"S",
        "04:43":"B",
        "04:48":"B",
        "04:53":"S",
        "04:58":"B",
        "05:03":"B",
        "05:08":"S",
        "05:13":"B",
        "05:18":"B",
        "05:23":"B",
        "05:28":"S",
        "05:33":"S",
        "05:38":"B",
        "05:43":"B",
        "05:48":"S",
        "05:53":"S",
        "05:58":"B",
        "06:03":"S",
        "06:08":"S",
        "06:13":"B",
        "06:18":"S",
        "06:23":"B",
        "06:28":"B",
        "06:33":"S",
        "06:38":"S",
        "06:43":"B",
        "06:48":"S",
        "06:53":"B",
        "06:58":"S",
        "07:03":"B",
        "07:08":"B",
        "07:13":"S",
        "07:18":"S",
        "07:23":"B",
        "07:28":"S",
        "07:33":"B",
        "07:38":"S",
        "07:43":"S",
        "07:48":"B",
        "07:53":"S",
        "07:58":"S",
        "08:03":"S",
        "08:08":"B",
        "08:13":"B",
        "08:18":"S",
        "08:23":"B",
        "08:28":"S",
        "08:33":"S",
        "08:38":"B",
        "08:43":"S",
        "08:48":"S",
        "08:53":"B",
        "08:58":"B",
        "09:03":"B",
        "09:08":"S",
        "09:13":"B",
        "09:18":"S",
        "09:23":"B",
        "09:28":"B",
        "09:33":"S",
        "09:38":"B",
        "09:43":"S",
        "09:48":"B",
        "09:53":"S",
        "09:58":"B",
        "10:03":"S",
        "10:08":"B",
        "10:13":"B",
        "10:18":"S",
        "10:23":"S",
        "10:28":"B",
        "10:33":"B",
        "10:38":"S",
        "10:43":"B",
        "10:48":"S",
        "10:53":"B",
        "10:58":"B",      
    };
     var today = new Date();
     var jam = (today.getHours()<10?'0':'') + today.getHours();
     var menit = (today.getMinutes()<10?'0':'') + today.getMinutes()
     var detik = (today.getSeconds()<10?'0':'') + today.getSeconds()
     var time = jam + ":" + menit;
    //  console.log('waktu '+time)
    //  console.log('array waktu '+ myArray[time])

    
     if (myArray[time] != undefined) {
        k1Terpasang = false;
        if (!terpasang) {
            if (myArray[time] =='B') {
                opK1 = 'B';
                currentTIme = menit;
                document.getElementsByName("deal-up_bg")[0].click();
                console.log(time+' Buy')
                terpasang = true;
             } else {
                opK1 = 'S';
                currentTIme = menit;
                document.getElementsByName("deal-down_bg")[0].click()
                console.log(time+' Sell')
                terpasang = true;
             }
        }


        
     } else {
                 //k1 Logic
        var k1 = false;

        if (k1) {
            const x = document.querySelector("#trade > div > div > app-toasts > app-option-toast > div.win");
            if(x){
                console.log(time+' PROFIT K1')
                k1 = false;
                } {
                    console.log(time+' LOSE K1')
                    k1 = false;
                }
        }
        const x = document.querySelector("#trade > div > div > app-toasts > app-option-toast > div.win");
        if(x){
           console.log(time+' PROFIT ONESHOT')

           } else if(!x && parseInt(menit) == (parseInt(currentTIme)+1)){
               if (!k1Terpasang) {
                if (opK1 == "B") {
                    console.log('K1 Buy')
                    document.getElementsByName("deal-up_bg")[0].click(); 
                    k1Terpasang = true;
                    k1 = true;
                   } else {
                    console.log('K1 Sell')
                    document.getElementsByName("deal-down_bg")[0].click()
                    k1Terpasang = true;
                    k1 = true;
                   }
               }


           }
         terpasang = false;
     }

    }, 1000);
