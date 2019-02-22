import React from 'react';

class FallbackImage extends React.Component{
    
    state = {hasFailed: false};

    swithToFallbackImage(){
        this.setState({hasFailed: true});
        console.log("Image failed to load");
    }
    render(){
        const source = this.state.hasFailed?'https://place-hold.it/100':this.props.src;
        return(
            <img src={source} onError={() => this.swithToFallbackImage()} width="100"></img>
        )
    }
}

export default FallbackImage;