import React from 'react';
import  queryString from 'query-string';
export class InputForm extends React.Component{
    
    nameTxtBox = null;
    ageTxtBox = null;
    emailTxtBox =  null;
    
    submitForm(e){
        e.preventDefault();
        console.log('form submitted');
        console.log("name",this.nameTxtBox.value);
    }

    componentDidMount(){
        console.log("rest param ", this.props.match.params);
        const data = this.props.location.search;
        const parsed = queryString.parse(data);
        console.log('query string', parsed);
    }
    render(){  
        return(

            <form onSubmit={(e) => this.submitForm(e)}>
                <label>Name: </label>
                <input type="text" ref={ input => this.nameTxtBox = input}></input>
                <label>Age: </label>
                <input type="text" ref={ input => this.ageTxtBox = input}></input>
                <label>Email: </label>
                <input type="text" ref={ input => this.emailTxtBox = input}></input>

                <input type="submit" value="Submit"></input>
            </form>

        )
    }
}

export default InputForm;