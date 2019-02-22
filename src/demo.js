import React from 'react';

class Demo extends React.Component{
    render(){

        let name =  'arshad';
        return(
            <div>
                <h1>Demo</h1>
                <p>Demo component</p>   
                <p>Hello !!! {name}, {1+8} times</p>
            </div>
        );
    }
}

export default Demo;