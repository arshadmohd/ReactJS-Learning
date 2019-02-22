import React from 'react';

class ErrorBoundary extends React.Component{
    state = {hasError: false};

    componentDidCatch(err){
        console.log('error occured', err);
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){return <p>Something went wrong !!! OOPS</p>}
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;