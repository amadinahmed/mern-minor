import React, { Component } from 'react'


export class api extends Component {

  

   constructor(props){
      super(props)

      

      this.state = {
        afam_minor: ''
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

   
  // Minor AFAM,
  afam_minor_function = (e) => {
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
            
             // Adding spaces in Array output
   
             let array1_joined = json[1].join(', ');
            
             json[1] = array1_joined

             let array2_joined = json[5].join(', ');
            
             json[5] = array2_joined

             let array3_joined = json[7].join(', ');
            
             json[7] = array3_joined

            

             json[2] = [json[2],' ', json[3], ' ', json[4]];

             json[3] = ''
             json[4] = ''
             json.splice(3, 4);
         

             let arrayLength = json.length;
             for (let i = 0; i < arrayLength; i++) {
                 console.log(json[i]);
                 //Do something
             }

             this.setState({
              afam_minor: json
            });
           });
         }
       });
    }
  


  render() {
    return (
      <div>
          
          <div id='AFAM Minor'>
            <h1 className='font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >AFAM Minor</h1>
            {Object.entries(this.state.afam_minor).map(([key, value]) => (
              <tr key={key}>
                <br/>
                  <td><br/>{value}</td>
              </tr>
          ))}
          </div>

          
          <form onSubmit={this.afam_minor_function}>
            <div>
              <button type='submit' class="mt-3 mb-2  w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Run Report
              </button>
            </div>
          </form>
      </div>
    )
  }
}

export default api