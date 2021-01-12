function total(){ 
    var first= document.getElementById("first").value
    var secned= document.getElementById("secned").value
    var third= document.getElementById("third").value
    var forth= document.getElementById("forth").value
    var fifth= document.getElementById("fifth").value
    var sixth= document.getElementById("sixth").value
    var totall = +first + + secned + + third + + forth + + fifth + + sixth
    var totelMarkes = 600
    var percentage= totall/600*100 + '%'
    document.getElementById("marks").innerHTML=totall
    document.getElementById("totelMarkes").innerHTML=totelMarkes
    document.getElementById("percentage").innerHTML=percentage
    if (totall = 80<=100){
        // document.getElementById("grade").innerHTML='grade A'
    }
    else if(totall = 60<=79){
        // document.getElementById("grade").innerHTML='grade B'
    }
    else if(totall = 40<=59){
        // document.getElementById("grade").innerHTML='grade C'
    }
    else{
        // document.getElementById("grade").innerHTML='fail'
    }
}