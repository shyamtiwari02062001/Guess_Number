import React, { Component } from 'react'
import { Button, View,TextInput,Text } from 'react-native';
import List from './list'

export class guessnumberofrangeonetoten extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:"",
             randomNumber:Math.floor(Math.random() * 1001+1),
             numbers:[ ],
             x:0,
             message:"",
             memo:"",
             reload:" "
        }
        this.onchangeHandeler = (inputText)=> {
            this.setState({ number: inputText }) 
        }  
        this.onClickHandler =()=>{
            this.setState({
                numbers:this.state.numbers,
            })
            
            this.state.numbers[this.state.x]=this.state.number;
            console.log(this.state.numbers);
            this.state.x++;
        }
        
    }
    handelSubmit = event =>{
        if(this.state.number == this.state.randomNumber){
            alert('Success')
            this.setState({
                reload:"true"
            });  
        }
        if(this.state.randomNumber<this.state.number){
            this.setState({
                memo:"Random Number is less than the Guessed Number you are"
            }
            )
        }
        else{
            this.setState({
                memo:"Random Number is greater than the Guessed Number you are"
            }
            ) 
        }
        const num=this.state.randomNumber-this.state.number;
        if(Math.abs(num)>500){
            this.setState({
                message:"VERY FAR"
            }
            )
        }
        else if(Math.abs(num)<=500 && Math.abs(num)>=100){
            this.setState({
                message:"FAR"
            }
            )
        }
        else if(Math.abs(num)<=100 && Math.abs(num)>=50){
            this.setState({
                message:"near"
            }
            )
        }
        else if(Math.abs(num)<=50 && Math.abs(num)>=20){
            this.setState({
                message:"close"
            }
            )
        }
        else if(Math.abs(num)<=20){
            this.setState({
                message:"Very Close"
            }
            )
        }
    }    

    render() {
        if(this.state.reload==="true"){
            return(<List/>)
        }
        else{
        return (
            <View style={{width:'100%',padding:'1%'}}>
                    <TextInput  style={{ height: 40,width:"80%",marginLeft:"8%",marginBottom:'5%', borderColor: 'gray', borderWidth: 1 }} value={this.state.number} onChangeText={this.onchangeHandeler} keyboardType={'numeric'}  />
                    <View style={{height: 40,width:"40%",marginLeft:"30%",marginBottom:'5%'}}>
                    <Button  type="submit" title="Submit" value={this.state.numbers} onPress={() => { this.onClickHandler();this.handelSubmit()}}/>
                    </View>
                    <View style={{width:'100%',padding:'2%',marginBottom:'5%',alignItems: 'center'}}>
                        <Text>{this.state.numbers.join(", ")}</Text>
                    </View>
                    <View style={{width:'100%',padding:'2%',marginBottom:'5%',alignItems: 'center'}}>
                    <Text>{this.state.memo}  {this.state.message}</Text> 
                    </View>
                    
            </View>
        )
    }
}
}

export default guessnumberofrangeonetoten
