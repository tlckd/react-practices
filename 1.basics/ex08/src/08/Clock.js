    import React from 'react';

    function Clock(props) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        /*
            코멘트1: jsx 밖은 자바스크립트 구문이 가능하다. 
        */
        return (
            <div
                //코멘트2
                className='colck' 
                title='시계' 
            >

                {
                    /*
                        코멘트3 
                    */
                }
                {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
                {' : '}
                {
                    // 코멘트03 : jsx는 html이 아니라서 <!-- --> 이거 html 주석 안됨 
                }
                {('0' + minutes).slice(-2)}
                {' : '} 
                {(('0')+seconds).slice(-2)}
                {' '} 
                {hours > 12 ? 'PM': 'AM'}
                //코멘트4 : jsx안에서 js 주석 구문을 사용하면 그대로 나옴 주석처리 안됨 
                // div 태그 안에다가 하면됨 
            </div>
            
        );
    }

    export default Clock;