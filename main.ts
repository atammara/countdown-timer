#! /usr/bin/env node
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

function* countdownTimer(second:number){
    while(second > 0){
        yield second;
        second--;
    }
}
let timerIterator = countdownTimer(10);

function displayCountdown(){
    let result = timerIterator.next();

    if(!result.done){
        const now = new Date();
        const countdownTimer = new Date(now.getTime() + (result.value * 1000))
        const remainingSeconds = differenceInSeconds(countdownTimer, now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)
        setTimeout(displayCountdown, 1000)
    } else{
        console.log("Countdown Complete!")
    }
}

displayCountdown();