function displayData(n){
    result.value+=n
}

function allClear(){
    result.value=""
}

function evalExprsn(){
    // n=result.value
    // out=eval(n)
    // result.value=out

    result.value=eval(result.value)
}

//-----------------------------------------------------------------
//-----------------------------------------------------------------

//slice ==> only we can use in method
//-------------
//s.slice(0,-1)
//s.slice(0,3)
//s.slice(2,-1)
//eg: 12345 ==> removing 1 by 1

function backSpace(){
    s=result.value
    result.value=s.slice(0,-1)
}

//-----------------------------------------------------------------
//-----------------------------------------------------------------