import React, { Component } from 'react'
import { StyleSheet, Button, View } from 'react-native';
import Guessnumber from './guessnumberofrangeonetoten'
import Guessnumber1 from './guessnumberofrangeonetohundred'
import Guessnumber2 from './guessnumberofrangeonetothousand'


export class list extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counting:1,
             num:1,
             digit:1,
             reload:" "
        }
    }
    onclickHandler=()=>{
        this.setState({
            counting:2
        })
        console.log('Counting')
    }
    onclickHandler1=()=>{
        this.setState({
            num:2
        })
        console.log('num')
    }
    onclickHandler2=()=>{
        this.setState({
            digit:2
        })
        console.log('digit')
    }
    render() {
        if(this.state.counting!==1){
            return (<Guessnumber/>)
        }
        else if(this.state.num!==1){
            return (<Guessnumber1/>)
        }
        else if(this.state.digit!==1){
            return (<Guessnumber2/>)
        }
        else{
            return (
                <View >
                    <View style={{marginBottom:"5%"}}>
                        <Button title="Guess Random Number Between 1 to 10" onPress={this.onclickHandler}/>
                    </View>
                    <View style={{marginBottom:"5%"}}>
                        <Button title="Guess Random Number Between 1 to 100" onPress={this.onclickHandler1}/>
                    </View>
                    <View style={{marginBottom:"5%"}}>
                        <Button title="Guess Random Number Between 1 to 1000" onPress={this.onclickHandler2}/>
                    </View>
                    </View>
            )
        }
    }
}

export default list