    /*
    since functions are [objects]  here we define a static properites for function 'start'. 
    and they will be initiated once .
    */
    start.min=start.sec=0; //start with sec , min = 0.
    start.isOn=false; // this variables used to indicate if the user stopped or started the sopwatch.
    start.count=null ; // this variable will be used to turn off stopwatch.



    function start(){ // should be invoked when user click start.

        if(start.isOn)// check if the stopwatch is on ? true ==> exit the function.   
            return;

    // ==> false turn on the stopwatch.
    start.isOn=true


    start.count= setInterval(function(){
    if(start.sec==59)
    {
    start.sec=0;
    start.min++;
    }
    else
    start.sec++;

    // print seconds,minutes with 2 digits.

    start.min=(start.min.toString().length<2)  ? 0+""+start.min : start.min ;
    start.sec=(start.sec.toString().length<2)  ? 0+""+start.sec : start.sec ;
    time.innerHTML=start.min+" : "+start.sec;
    },1000) }

    function stop(){
        start.isOn=false;
        clearInterval(start.count); 

    }

    function reset(){
        start.sec=start.min=0;
        time.innerHTML='00:00';
        stop();
    }



    // [in html file] elements that that have id , will be defined as prop for the windows object.
    startButton.addEventListener('click',start);
    stopButton.addEventListener('click',stop);
    resetButton.addEventListener('click',reset);