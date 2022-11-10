import React, { Component } from 'react'
import axios from 'axios'
import cors from 'cors'

export class api extends Component {

   constructor(props){
      super(props)

      this.state = {
         userID:'',
         title: ''
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
   /*

   var data = JSON.stringify({
      "body": "dadda"
    });
    
    var config = {
      mode: 'no-cors',
      method: 'POST',
      url: 'https://zedvzzv9m0.execute-api.us-east-1.amazonaws.com/dev/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
 */
   
   var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

   var raw = JSON.stringify({
      "body": "feaefaeafe"
      });

   var requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

   fetch("https://zedvzzv9m0.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }


  render() {
   const {userId, title, body} = this.state
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
     
      </div>
    )
  }
}

export default api