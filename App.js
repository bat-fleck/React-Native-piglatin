import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
//import CustomButton from "./components/buttoncom";
//import {createAppContainer,createStackNavigator} from 'react-navigation';



class Homescreen extends Component{
  constructor(){
    super()
    this.state={
      text:"",
      result:""
      
    }
  }

  pigfun=()=>{
    if(this.state.text==""){
      this.setState({result:"No Input given"})
      return 0
    }

    let arr=this.state.text.split(" ")

    for(let i=0;i<arr.length;++i){
      let temp=arr[i][0].toLowerCase()
      let temp1=""
      for(let j=1;j<arr[i].length;++j){
        
        temp1+=arr[i][j]
      }
      temp1+=(temp+"ay")
      arr[i]=temp1
    }
    this.setState({result:arr.join(" ")})
    if(arr.join(" ")=="")
      this.setState({result:"No Input given"})

  }
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.inputText}>
          <TextInput
            placeholder="Type here to translate"
            onChangeText={(lol)=>this.setState({text:lol})}
          />  
        </View>

        <View style={styles.butt}>
          <Button onPress={()=>this.pigfun()} title="Translate"></Button>
        </View>

        <View style={styles.outputText}>
          <Text>
            {this.state.result}
          </Text>


        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  inputText:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  outputText:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },

  butt:{
    flex:1
  }


});



export default Homescreen;
