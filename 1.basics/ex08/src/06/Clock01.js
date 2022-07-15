import React from 'react';

function Clock01() {
    const date = new Date();

    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if(minutes<10){
        minutes ='0'+minutes // 스트링 형변환
    }

    if(seconds<10){
        seconds ='0'+seconds // 스트링 형변환
    }

    let session ='AM';
    if(hours > 12){
        session = 'PM';
    }

    if(hours <10){ // 먼저 세션계산한다음에 해야해서 밑에서 해주는거 ㅇㅇ 위에서하면 문자열 되버려서 
        hours = '0'+hours;
    }

    return (
        <div>
               {hours}:{minutes}:{seconds} {session}
        </div>
    );
}

export default Clock01;