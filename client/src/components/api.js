import React, { Component } from 'react'


export class api extends Component {

   constructor(props){
      super(props)

      this.state = {
         userID:'',
         title: '',
         values: ''
      }
   }

   changeHandler=(e)  => {
      this.setState({
          [e.target.name]: e.target.value
      })
      
  }
  submitHandler = (e) => {
   e.preventDefault()
   console.log(this.state.title)
  }

  api_function = (e) => {
   e.preventDefault()
       
     
        fetch("https://u5xhpx66ueezszicbjxmqnhipu0mkmwm.lambda-url.us-east-1.on.aws?course=['ACCTG 211', 'ACCTG 310', 'ACCTG 371', 'ACCTG 472', 'CMPSC 121']\n", {
         // mode: 'no-cors',
         method: 'GET',
         headers: {
           Accept: 'application/json',
         },
       },
       ).then(response => {
         if (response.ok) {
           response.json().then(json => {
             console.log(json);
           });
         }
       });
  }



  render() {
   const {userId, title, values} = this.state
    return (
      <div>
            <form onSubmit={this.api_function}>
            <div>
                <input 
                type='text' 
                name ='userId' 
                onChange={this.changeHandler}
                value={userId}></input>
            </div>
            <div>
                <input 
                type='text' 
                name ='title' 
                    onChange={this.changeHandler}
                value={title}></input>
            </div>
            <div>
               <button type='submit'>Some</button>
               </div>
            </form>
         <p value={values}></p>
      </div>
    )
  }
}

export default api