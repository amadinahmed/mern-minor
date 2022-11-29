import React, { Component } from 'react'


export class api extends Component {

  

   constructor(props){
      super(props)

      

      this.state = {
         values: 'Loading ...'
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
             this.setState({
              values: json
            });
           });
         }
       });
  }



  render() {
   const {values} = this.state
    return (
      <div>
            <form onSubmit={this.api_function}>
    
            <div>
               <button type='submit'>Some</button>
               </div>
            </form>
            <p>{values}</p>
      </div>
    )
  }
}

export default api