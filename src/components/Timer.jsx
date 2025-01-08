import { React, useState, useRef, useEffect} from 'react'


const Timer = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const revealDate = new Date('07 February 2025 09:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = revealDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000* 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0){
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

            // console.log(days, minutes, hours, seconds)
        }, 1000); 
    }

    useEffect(() => {
        startTimer();
    });
  
  
  
    return ( 
        <div class="timer">
            <span className="time day">{timerDays < 10 ? '0'+timerDays : timerDays}</span>
            <span className="time-sep">:</span>
            <span className="time hour">{timerHours < 10 ? '0'+timerHours : timerHours}</span>
            <span className="time-sep">:</span>
            <span className="time minute">{timerMinutes < 10 ? '0'+timerMinutes : timerMinutes}</span>
            <span className="time-sep">:</span>
            <span className="time second">{timerSeconds < 10 ? '0'+timerSeconds : timerSeconds}</span>
        </div>
  )
}

export default Timer