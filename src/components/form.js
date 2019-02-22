import React from 'react';

export class InputForm extends React.Component{
    
    nameTxtBox = null;
    ageTxtBox = null;
    emailTxtBox =  null;
    
    submitForm(e){
        e.preventDefault();
        console.log('form submitted');
        console.log("name",this.nameTxtBox.value);
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