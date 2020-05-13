import React, { Component } from 'react'
import './index.css';
export default class index extends Component{

    constructor(props){
        super(props);
        this.state = {

            'input1': ' ',
            'input2': ' ',
            'result': ' '


        }

    }
    handleInputChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({

            [name]: value

        })
        console.log(this.state.input1);
        console.log(this.state.input2);
    }
    fetchData = (e) => {

        e.preventDefault();
        const result = parseInt(this.state.input1) + parseInt(this.state.input2);
        this.setState({

            result : result
        })

    }


    render(){


        return(

            <div className="addNumbers"> 
            <form onSubmit={this.fetchData}>
                     <input className="input" name="input1" onChange={this.handleInputChange} value={this.state.input1} type="text" placeholder="Enter Value " />
                    <input className="input" name="input2" onChange={this.handleInputChange} value={this.state.input2} type="text"  placeholder="Enter Value" />
                <button className="add"> Add </button>
            </form>
                <input className="result" type="text" value={this.state.result} disabled />
            </div>


        )


    }




}