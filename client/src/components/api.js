import React, { Component } from 'react'


export class api extends Component {

  

   constructor(props){
      super(props)

      

      this.state = {
        afam_minor: '',
        crimj_minor: '',
        anth_minor: '',
        AMST_minor: '',
        ACCTG_minor: '',
        data_points: this.props.attribute,
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
   
     
      fetch(`https://u5xhpx66ueezszicbjxmqnhipu0mkmwm.lambda-url.us-east-1.on.aws?course=${this.props.attribute}`, {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(data => {
                
                // Adding spaces in Array output
                let array1_joined = data[0].join('  ');
            
                data[0] = array1_joined

                let array2_joined = data[1].join('  ');
            
                data[1] = array2_joined
                
                let array3_joined = data[2].join('  ');
            
                data[2] = array3_joined

                this.setState({
                  afam_minor: data
                });
              });
            }
          });

       fetch(`https://veilya35nemgbnaece7k3dwxh40ncjaa.lambda-url.us-east-1.on.aws?course=${this.props.attribute}`, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(data => {
              
                // Adding spaces in Array output
                let array1_joined = data[0].join('  ');
            
                data[0] = array1_joined

                let array2_joined = data[1].join('  ');
            
                data[1] = array2_joined
                
     

                this.setState({
                crimj_minor: data
              });
              });
            }
          });

        fetch(`https://75kcy4oyr6qyy6d5ag5pvd7mcu0keejj.lambda-url.us-east-1.on.aws?course=${this.props.attribute}`, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(data => {
              
                // Adding spaces in Array output

                console.log(data)
                let array1_joined = data[0].join('  ');
            
                data[0] = array1_joined

                let array2_joined = data[1].join('  ');
            
                data[1] = array2_joined
                
                let array3_joined = data[2].join('  ');
            
                data[2] = array3_joined

                this.setState({
                anth_minor: data
              });
              });
            }
          });
        fetch(`https://jonqy7psmpnch2pusn44u6xaqm0oymyq.lambda-url.us-east-1.on.aws/?course=${this.props.attribute}`, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(data => {
              
                // Adding spaces in Array output

                console.log(data)
                let array1_joined = data[0].join('  ');
            
                data[0] = array1_joined

                let array2_joined = data[1].join('  ');
            
                data[1] = array2_joined
                
                let array3_joined = data[2].join('  ');
            
                data[2] = array3_joined

                this.setState({
                AMST_minor: data
              });
              });
            }
          });
          fetch(`https://uzncm4afd43cuu57ioensdlf4u0mdulo.lambda-url.us-east-1.on.aws/?course=${this.props.attribute}`, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          ).then(response => {
            if (response.ok) {
              response.json().then(data => {
              
                // Adding spaces in Array output

                console.log(data)
                let array1_joined = data[0].join('  ');
            
                data[0] = array1_joined

                let array2_joined = data[1].join('  ');
            
                data[1] = array2_joined
                
                let array3_joined = data[2].join('  ');
            
                data[2] = array3_joined

                this.setState({
                  ACCTG_minor: data
              });
              });
            }
          });

    }
  


  render() {
    return (
      <div className='overflow-x-hidden'>
          
          <div id='AFAM Minor'>
            <h1 className=' pt-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >AFAM Minor</h1>
            {Object.entries(this.state.afam_minor).map(([key, value]) => (
              <tr key={key}>
                <br/>
                  <td className='text-md text-gray-900 font-medium px-6 py-4'><br/>{value}</td>
              </tr>
          ))}
          </div>
          <div id='CRIMJ Minor'>
            <h1 className=' pt-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >CRIMJ Minor</h1>
            {Object.entries(this.state.crimj_minor).map(([key, value]) => (
              <tr key={key}>
                <br/>
                  <td className='text-md text-gray-900 font-medium px-6 py-4'><br/>{value}</td>
              </tr>
          ))}
          </div>

          <div id='ANTH Minor'>

            <h1 className=' pt-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >ANTH Minor</h1>
          
                 
            {Object.entries(this.state.anth_minor).map(([key, value]) => (
              <tr className="border-b" key={key}>
                <br/>
                  <td className='text-md text-gray-900 font-medium px-6 py-4'><br/>{value}</td>
              </tr>
              
          ))}     
          </div>

          <div id='AMST Minor'>

            <h1 className=' pt-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >AMST Minor</h1>
          
                 
            {Object.entries(this.state.AMST_minor).map(([key, value]) => (
              <tr className="border-b" key={key}>
                <br/>
                  <td className='text-md text-gray-900 font-medium px-6 py-4'><br/>{value}</td>
              </tr>
              
          ))}     
          </div>

          <div id='ACCTG Minor'>

            <h1 className=' pt-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600' >ACCTG Minor</h1>
          
                 
            {Object.entries(this.state.ACCTG_minor).map(([key, value]) => (
              <tr className="border-b" key={key}>
                <br/>
                  <td className='text-md text-gray-900 font-medium px-6 py-4'><br/>{value}</td>
              </tr>
              
          ))}     
          </div>
          
          <form onSubmit={this.afam_minor_function}>
            <div>
              <button type='submit' className="mt-3 mb-2  w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Run Report
              </button>
            </div>
          </form>
      </div>
    )
  }
}

export default api