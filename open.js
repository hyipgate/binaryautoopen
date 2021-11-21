var terpasang = false;
var k1Terpasang = false;
var opK1="";
var k1 = false;
var k1Profit = false;
var oneShoot = false;
var currentTIme;
var saldoAwal = document.getElementById("qa_trading_balance").innerHTML;
var mulai = setInterval(function(){
    var myArray = {
        "07:34":"S",
        "07:49":"SKIP",
        "07:44":"B",
        "07:59":"S",
        "07:54":"S",
        "08:09":"S",
        "08:04":"S",
        "08:19":"B",
        "08:14":"S",
        "08:29":"S",
        "08:24":"S",
        "08:39":"B",
        "08:34":"B",
        "08:49":"S",
        "08:44":"S",
        "08:59":"S",
        "08:54":"S",
        "09:09":"B",
        "09:04":"B",
        "09:19":"S",
        "09:14":"B",
        "09:29":"B",
        "09:24":"B",
        "09:39":"S",
        "09:34":"S",
        "09:49":"S",
        "09:44":"B",
        "09:59":"S",
        "09:54":"B",
        "10:09":"B",
        "10:04":"B",
        "10:19":"S",
        "10:14":"B",
        "10:29":"B",
        "10:24":"B",
        "10:39":"B",
        "10:34":"B",
        "10:49":"S",
        "10:44":"B",
        "10:59":"S",
        "10:54":"B",
        "11:09":"S",
        "11:04":"B",
        "11:19":"S",
        "11:14":"B",
        "11:29":"S",
        "11:24":"S",
        "11:39":"B",
        "11:34":"SKIP",
        "11:49":"B",
        "11:44":"B",
        "11:59":"B",
        "11:54":"S",
        "12:09":"S",
        "12:04":"B",
        "12:19":"S",
        "12:14":"B",
        "12:29":"B",
        "12:24":"B",
        "12:39":"S",
        "12:34":"S",
        "12:49":"S",
        "12:44":"S",
        "12:59":"S",
        "12:54":"B",
        "13:09":"B",
        "13:04":"S",
        "13:19":"S",
        "13:14":"B",
        "13:29":"S",
        "13:24":"S",
        "13:39":"B",
        "13:34":"S",
        "13:49":"S",
        "13:44":"B",
        "13:59":"B",
        "13:54":"B",
        "14:09":"S",
        "14:04":"B",
        "14:19":"B",
        "14:14":"B",
        "14:29":"B",
        "14:24":"B",
        "14:39":"B",
        "14:34":"S",
        "14:49":"SKIP",
        "14:44":"B",
        "14:59":"S",
        "14:54":"B",
        "15:09":"B",
        "15:04":"B",
        "15:19":"B",
        "15:14":"B",
        "15:29":"S",
        "15:24":"S",
        "15:39":"S",
        "15:34":"B",
        "15:49":"S",
        "15:44":"B",
        "15:59":"S",
        "15:54":"S",
        "16:09":"B",
        "16:04":"B",
        "16:19":"S",
        "16:14":"S",
        "16:29":"B",
        "16:24":"S",
        "16:39":"B",
        "16:34":"S",
        "16:49":"S",
        "16:44":"B",
        "16:59":"B",
        "16:54":"S",
        "17:09":"B",
        "17:04":"B",
        "17:19":"B",
        "17:14":"B",
        "17:29":"B",
        "17:24":"S",
        "17:39":"B",
        "17:34":"B",
        "17:49":"S",
        "17:44":"S",
        "17:59":"S",
        "17:54":"S",
        "18:09":"B",
        "18:04":"S",
        "18:19":"B",
        "18:14":"S",
        "18:29":"S",
        "18:24":"B",
        "18:39":"B",
        "18:34":"B",
        "18:49":"S",
        "18:44":"B",
        "18:59":"B",
        "18:54":"S",
        "19:09":"B",
        "19:04":"B",
        "19:19":"S",
        "19:14":"S",
        "19:29":"S",
        "19:24":"B",
        "19:39":"S",
        "19:34":"S",
        "19:49":"S",
        "19:44":"B",
        "19:59":"S",
        "19:54":"B",
        "20:09":"B",
        "20:04":"S",
        "20:19":"B",
        "20:14":"B",
        "20:29":"S",
        "20:24":"B",
        "20:39":"B",
        "20:34":"S",
        "20:49":"B",
        "20:44":"B",
        "20:59":"B",
        "20:54":"B",
        "21:09":"S",
        "21:04":"S",
        "21:19":"B",
        "21:14":"S",
        "21:29":"S",
        "21:24":"S",
        "21:39":"S",
        "21:34":"S",
        "21:49":"B",
        "21:44":"B",
        "21:59":"B",
        "21:54":"S",
        "22:09":"S",
        "22:04":"B",
        "22:19":"B",
        "22:14":"B",
        "22:29":"B",
        "22:24":"S",
        "22:39":"B",
        "22:34":"B",
        "22:49":"S",
        "22:44":"B",
        "22:59":"B",
        "22:54":"S",
        "23:09":"S",
        "23:04":"B",
        "23:19":"B",
        "23:14":"S",
        "23:29":"S",
        "23:24":"B",
        "23:39":"S",
        "23:34":"B",
        "23:49":"B",
        "23:44":"B",
        "23:59":"S",
        "23:54":"B",
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
            console.log("Saldo Awal "+saldoAwal);
            oneShoot = false;
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
        const profit = document.querySelector("#qa_trading_expectedIncome.text-accent");

        if (profit && detik === "59") {
            oneShoot = true;
        }

        
     } else {
                 //k1 Logic
                 const profit = document.querySelector("#qa_trading_expectedIncome.text-accent");
                 if (profit && detik === "59") {
                     k1Profit = true;
                 }
                 setTimeout(function(){ 
  

                    setTimeout(() => {
                        if (k1 && parseInt(menit) == (parseInt(currentTIme)+1)) {
                            const x = document.querySelector("#trade > div > div > app-toasts > app-option-toast > div.win");
                            if(k1Profit || x){
                                var saldoSaatIni = document.getElementById("qa_trading_balance").innerHTML;
                                var saldoSaatIniInteger = parseFloat(saldoSaatIni.trim().substring(2).replace(/,/g,""));
                                var saldoAwalInteger = parseFloat(saldoAwal.trim().substring(2).replace(/,/g,""));
                                console.log(time+' PROFIT K1')
                                console.log("Saldo Saat Ini "+saldoSaatIniInteger);
                                console.log("Profit Saat Ini "+(saldoSaatIniInteger - saldoAwalInteger));
                                k1 = false;
                                k1Profit = true;
                                } else if (!x && !k1Profit) {
                                
                                console.log(time+' LOSE K1')
                                console.log("Saldo Saat Ini "+document.getElementById("qa_trading_balance").innerHTML);

                                    k1 = false;
                                }
                        }
                    }, 1000);
                    
                    const x = document.querySelector("#trade > div > div > app-toasts > app-option-toast > div.win");
                
                    if(x && oneShoot){
                       console.log(time +' PROFIT OneSHOOT');
                       var saldoSaatIni = document.getElementById("qa_trading_balance").innerHTML;
                       var saldoSaatIniInteger = parseFloat(saldoSaatIni.trim().substring(2).replace(/,/g,""));
                       var saldoAwalInteger = parseFloat(saldoAwal.trim().substring(2).replace(/,/g,""));
                       console.log("Saldo Saat Ini "+saldoSaatIni);
                       console.log("Profit Saat Ini "+(saldoSaatIniInteger - saldoAwalInteger));
                       oneShoot = true;
                       } else if(!x && parseInt(menit) == (parseInt(currentTIme)+1) && !oneShoot){
                           
                        k1Profit = false;
                           if (!k1Terpasang) {
                            if (opK1 == "B") {
                                console.log(time+' K1 Buy')
                                document.getElementsByName("deal-up_bg")[0].click(); 
                                setTimeout(() => {
                                    document.getElementsByName("deal-up_bg")[0].click()
                                }, 200);
                                k1Terpasang = true;
                                k1 = true;
                                currentTIme= menit;
                               } else {
                                console.log(time+' K1 Sell')
                                document.getElementsByName("deal-down_bg")[0].click(); 
                                setTimeout(() => {
                                    document.getElementsByName("deal-down_bg")[0].click()
                                }, 200);
                                k1Terpasang = true;
                                k1 = true;
                                currentTIme= menit;

                               }
                           }
            

                       }
                }, 500);
        
         terpasang = false;
     }

    }, 1000);
