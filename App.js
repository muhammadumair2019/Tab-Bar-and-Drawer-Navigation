
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,FlatList,StyleSheet,SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,useDrawerStatus } from '@react-navigation/drawer';


const DATA = [
  {
    title: 'Client 1',
    msg: 'final price?',
    pic: '',
    time: '6:51 PM',
    unread: '2'
    
  },
  {
    title: 'Client 2',
    msg: 'Parcel?',
    pic: '',
    time: '6:49 PM',
    unread: '1'
  },
  {
    title: 'Client 3',

    
    msg: 'need some info?',
    pic: '',
    time: '6:45 PM',
    unread: '5'
  },

  {
    title: 'Client 4',
    msg: 'Reply please',
    pic: '',
    time: '6:33 PM',
    unread: '1'
  },
  {
    title: 'Client 5',
    msg: 'Thanks',
    pic: '',
    time: '6:22 PM',
    unread: '3'
  },
  {
    title: 'Client 6',
    msg: 'Will buy more',
    pic: '',
    time: '5:51 PM',
    unread: '1'
  },

  {
    title: 'Client 7',
    msg: 'it was great',
    pic: '',
    time: '1:12 PM',
    unread: '1'
  },
  {
    title: 'Client 8',
    msg: 'Satisfied!!',
    pic: '',
    time: '8:54 PM',
    unread: '3'
  },
  {
    title: 'Client 10',
    msg: 'Product not recieved',
    pic: '',
    time: '4:50 PM',
    unread: '2'
  },

  {
    title: 'Client 11',
    msg: 'Dude, Lets meet',
    pic: '',
    time: '9:24 PM',
    unread: '4'
  },
  {
    title: 'Client 12',
    msg: 'Poor Service!',
    pic: '',
    time: '7:55 PM',
    unread: '9'
  },
  {
    title: 'Client 13',
    msg: 'Excellent job',
    pic: '',
    time: '3:59 PM',
    unread: '3'
  },
];

const DATA2 = [
  {
    title: 'A',
    key:0,
    data:[{key:0, title:'Ali Shan'}, {key:1, title:'Ahmad Fareed'}, {key:2, title:'Akhzar Nazir'}],
  },
  {
    title: 'B',
    key:0,
    data:[{key:0, title:'Bakir Raza'}, {key:1, title:'Bilal Ahmad'}, {key:2, title:'Beat Boxer'}],
  },
  {
    title: 'C',
    key:0,
    data:[{key:0, title:'Chaand Iftikhar'}, {key:1, title:'Chachu Ijaz'}],
  },
  {
    title: 'D',
    key:0,
    data:[{key:0, title:'Daniyal Khokar'}, {key:1, title:'Dad'}],
  },
  {
    title: 'F',
    key:0,
    data:[{key:0, title:'Faizan Chattha'}, {key:1, title:'Fatima Kashif'}, {key:2, title:'Fahad Fayyaz'}]
  },
    
];

function LoginScreen({navigation}) {
  return (
    
    <View style={{flex:1,backgroundColor: 'white'}}>

    <View style={{flex:17,backgroundColor: 'white'}}>
    <Image source={require('./android/app/src/main/assets/images/foodpanda_cover.png')}
    style={{width: 412,
            height: 190,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }}
    />
    </View>

    <View style={{flex:20,backgroundColor: 'white'}}>

      <View style={{flex: 0.65,flexDirection:'row',backgroundColor: 'white'}}>

      <Image source={require('./android/app/src/main/assets/images/user_icon.png')}
    style={{width: 25,
      height: 25,
      marginTop: 30,
      marginLeft: 30
     
    }}
    />

    <TextInput

    style={{height: 40,
      width: 300,
      marginLeft: 5,
      marginTop: 20,
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
      padding: 10,}}
    
      placeholder="Username"
    
  />
    </View>

    <View style={{flex: 0.9,flexDirection:'row',backgroundColor: 'white'}}>

    <Image source={require('./android/app/src/main/assets/images/email_icon.png')}
    style={{width: 25,
      height: 25,
      marginTop: 35,
      marginLeft: 30
     
    }}
    />
      <TextInput

      style={{height: 40,
        width: 300,
        marginLeft: 6,
        marginTop: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        padding: 10,}}

        placeholder="Email"

      />
    </View>

    <View style={{flex: 0.7,flexDirection:'row',backgroundColor: 'white'}}>

    <Image source={require('./android/app/src/main/assets/images/pass_icon.png')}
    style={{width: 25,
      height: 25,
      marginTop: 10,
      marginLeft: 30
     
    }}
    />

    <TextInput         

    style={{height: 40,
      width: 300,
      marginLeft: 6,
      marginTop: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
      padding: 10,}}
      
      placeholder="Password"
      secureTextEntry={true}
    
  />
  </View>

      
     
    </View>

    <View style = {{flex:8 ,alignItems: 'center',backgroundColor: 'white'}}>
      <TouchableOpacity 
      style={{
        backgroundColor: '#D50D62',
        width: 300,
        height: 50,
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 15,
        
        

      }}

      onPress={() => navigation.navigate('Details')}
      
    > 
      <Text style={{color:'#ffffff',fontWeight: 'bold'}}>REGISTER</Text>
    </TouchableOpacity>
      </View>

    <View style={{flex:5,flexDirection:'row',backgroundColor: 'white'}}>
    <TouchableOpacity style={{
        backgroundColor: '#FFD3D4',
        width: 90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        marginLeft: 63
        

      }}>
      <Image source = {require('./android/app/src/main/assets/images/fbb.jpg')}
        style={{width: 35,
          height: 30
          
          
          
      }}
      />
      
    </TouchableOpacity>

    <TouchableOpacity style={{
        backgroundColor: '#FFD3D4',
        width: 90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        marginLeft: 14
        

      }}
      
      >
      <Image source = {require('./android/app/src/main/assets/images/twitter2.jpg')}
        style={{width: 30,
          height: 30,
          
      }}
      />
      
    </TouchableOpacity>

    <TouchableOpacity style={{
        backgroundColor: '#FFD3D4',
        width: 90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        marginLeft: 14
        

      }}>
      <Image source = {require('./android/app/src/main/assets/images/mail.png')}
        style={{width: 40,
          height: 30,
          
          
          
      }}
      />
      
    </TouchableOpacity>
    
    </View>

    <View style={{flex:8,backgroundColor: 'white',alignItems: 'center'}}>
     <Text style={{color:'#D50D62',marginTop: 25}}>Already have an account? <Text style={{fontWeight:'bold',color:'#D50D62'}}>Login</Text></Text>
     
    </View>

  </View>

  );
}



function HomeScreen({navigation}){
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <View style={{flex:5,backgroundColor:'pink',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',color:'#D50D62',fontSize:20,marginLeft:85}}>Hello, Muhammad Umair</Text>
        <Text style={{fontWeight:'bold',color:'#D50D62',fontSize:20,marginLeft:100}}>Welcome to our store!</Text>

      </View>
      <View style={{flex:2,backgroundColor:'pink'}}>
        <TouchableOpacity style={{
          marginLeft:160,
          borderRadius:5,
          borderWidth:1,
          width:72,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Status')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>STATUS</Text>
        
        
      </TouchableOpacity>

      </View>

      <View style={{flex:5,backgroundColor:'pink'}}>
      <TouchableOpacity style={{
          marginLeft:160,
          borderRadius:5,
          borderWidth:1,
          width:70,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.popToTop()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Log Out</Text>
        
        
      </TouchableOpacity>

      </View>
       
    </View>
  );
}

function StatusScreen({navigation}){
  return (

    
     <View style={{flex:1,marginTop:150,marginLeft:65,}}>
        <View style={{backgroundColor:'pink',width:300,height:100,borderRadius:10,alignItems:'center'}}>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Order Number: <Text style={{fontWeight:'bold'}}>A-59841</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Reciever Name: <Text style={{fontWeight:'bold'}}>Muhammad Umair</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Cnic: <Text style={{fontWeight:'bold'}}>35202-2506888-1</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Payment Method: <Text style={{fontWeight:'bold'}}>Cash On Deivery</Text></Text>
       </View>
      </View>
       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:95,
          borderRadius:5,
          borderWidth:1,
          width:100,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Track')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Track Order</Text>
        
        
      </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:120,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
     </View>

  );

}

function TrackScreen({navigation}){
  return(
   <View style={{marginLeft:80,marginTop:150}}>
      <View style={{marginLeft:45,marginBottom:50}}>
      <Text style={{fontSize:22,color:'black',fontWeight:'bold'}}>Tracking System</Text>
      </View>
      <View>
      <Text style={{color:'black'}}>2:55 Pm: <Text style={{fontWeight:'bold'}}>Your Order is at TCS office</Text></Text>
      </View>
      <View>
      <Text style={{color:'black'}}>3:15 Pm: <Text style={{fontWeight:'bold'}}>Your Order is on way to Deliver</Text></Text>
      </View>

      <View style={{marginTop:30}}> 
      <TouchableOpacity style={{
          marginLeft:75,
          borderRadius:5,
          borderWidth:1,
          width:100,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.popToTop()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Go to Home</Text>
        
        
      </TouchableOpacity>
      </View>

      <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:105,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
   </View>

  );
}

function BuyScreen({navigation}){
  return (
    <View style={{ flex: 1 ,flexDirection:'row'}}>
      <View style={{flex:2,backgroundColor:'white'}}>
      <Image source={require('./android/app/src/main/assets/images/iphone.png')}
      style={{width: 100,
      height: 150,
      
     
    }}
    />
    <Image source={require('./android/app/src/main/assets/images/s20Fe.png')}
      style={{width: 100,
      height: 130,
      
     
    }}
    />

    <Image source={require('./android/app/src/main/assets/images/s21.png')}
      style={{width: 100,
      height: 130,
      marginTop:15
      
     
    }}
    />
      </View>

      <View style={{flex:3,backgroundColor:'white'}}>
        <View style={{marginTop:60}}><Text style={{fontWeight:'bold',color:'black'}}>Price : Rs. 2,75000 only</Text></View>
        <View style={{marginTop:120}}><Text style={{fontWeight:'bold',color:'black'}}>Price : Rs. 1,20000 only</Text></View>
        <View style={{marginTop:120}}><Text style={{fontWeight:'bold',color:'black'}}>Price : Rs. 1,75000 only</Text></View>
      </View>

      <View style={{flex:2,backgroundColor:'white'}}>
      <View>
        <TouchableOpacity style={{
            marginTop:55,
            borderRadius:5,
            borderWidth:1,
            width:80,
            backgroundColor: '#D50D62',
            borderColor:'#D50D62'
            

          }}
          onPress={() => navigation.navigate('BuyStatus')}
          >
          <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Buy Now</Text>
          
          
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={{
             marginTop:115,
            borderRadius:5,
            borderWidth:1,
            width:80,
            backgroundColor: '#D50D62',
            borderColor:'#D50D62'
            

          }}
          onPress={() => navigation.navigate('BuyStatus')}
          >
          <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Buy Now</Text>
          
          
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={{
             marginTop:115,
            borderRadius:5,
            borderWidth:1,
            width:80,
            backgroundColor: '#D50D62',
            borderColor:'#D50D62'
            

          }}
          onPress={() => navigation.navigate('BuyStatus')}
          >
          <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Buy Now</Text>
          
          
        </TouchableOpacity>
        </View>

       
      </View>

    </View>
  );
}

function BuyStatusScreen({navigation}){
  return (

    
     <View style={{flex:1,marginTop:150,marginLeft:65}}>

       <View>
         <Text style={{fontSize:18,color:'black'}}>Order Number: <Text style={{fontWeight:'bold'}}>A-59841</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Reciever Name: <Text style={{fontWeight:'bold'}}>Muhammad Umair</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Cnic: <Text style={{fontWeight:'bold'}}>35202-2506888-1</Text></Text>
       </View>
       <View>
         <Text style={{fontSize:18,color:'black'}}>Payment Method: <Text style={{fontWeight:'bold'}}>Cash On Deivery</Text></Text>
       </View>
      
       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:45,
          borderRadius:5,
          borderWidth:1,
          width:180,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('ConfirmOrder')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Proceed to Checkout</Text>
        
        
      </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:110,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
     </View>

  );

}

function ConfirmOrderScreen({navigation}){
  return(
    <View>
    <View style={{backgroundColor:'pink',alignItems:'center',width:350,marginTop:100,marginLeft:30}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Price: Rs. 2,75000</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Quantity: 1</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Delivery Date: 15th November</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Payment Type: COD</Text>
    </View>
    
    <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:150,
          borderRadius:5,
          borderWidth:1,
          width:120,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('OrderPlaced')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Confirm Order</Text>
        
        
      </TouchableOpacity>
       </View>

       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:190,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
       
       </View>
  );

}

function OrderPlacedScreen({navigation}){
  return (
    <View>
  <View>
    <View style={{backgroundColor:'pink',alignItems:'center',width:350,marginTop:100,marginLeft:30}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>THANK YOU!</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Muhammad Umair</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Your Order is Placed</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Tracking ID: 15543-2</Text>
    </View>
  </View>
  <TouchableOpacity style={{
          marginTop:30,
          marginLeft:160,
          borderRadius:5,
          borderWidth:1,
          width:100,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.popToTop()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Go to Home</Text>
        
        
      </TouchableOpacity>


  </View>
  );
}

function SellScreen({navigation}){
  return (
    <View style={{ flex:1}}>

      <View style={{flex:1,backgroundColor:'#f1c27d',alignItems:'center',elevation:3}}>
      <Text style={{color:'grey',fontSize:16}}>Now you can sell with only 5% commission</Text>
      </View>

      <View style={{flex:15,backgroundColor:'pink',alignItems:'center'}}>
      <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginTop:150}}>You Have New Offers on your Products!</Text>
      
      <TouchableOpacity style={{
          marginTop:30,
          marginLeft:20,
          borderRadius:5,
          borderWidth:1,
          width:110,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Offers')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Check Offers</Text>
        
        
      </TouchableOpacity>
      </View>
       
    </View>

    
  );
}

function OffersScreen({navigation}){
  return (
    <View style={{ flex: 1 ,flexDirection:'row',marginTop:30}}>
    <View style={{flex:2,backgroundColor:'white'}}>
    <Image source={require('./android/app/src/main/assets/images/iphonex.png')}
    style={{width: 100,
    height: 150,
    
   
  }}
  />
  <Image source={require('./android/app/src/main/assets/images/s9.png')}
    style={{width: 100,
    height: 130,
    
   
  }}
  />

  <Image source={require('./android/app/src/main/assets/images/oppoA5.png')}
    style={{width: 100,
    height: 130,
    marginTop:15
    
   
  }}
  />
    </View>

    <View style={{flex:3,backgroundColor:'white'}}>
      <View style={{marginTop:60}}><Text style={{fontWeight:'bold',color:'black'}}>Offer : Rs. 1,75000</Text></View>
      <View style={{marginTop:120}}><Text style={{fontWeight:'bold',color:'black'}}>Offer : Rs. 30000</Text></View>
      <View style={{marginTop:120}}><Text style={{fontWeight:'bold',color:'black'}}>Offer : Rs. 15000</Text></View>
    </View>

    <View style={{flex:2,backgroundColor:'white'}}>
    <View>
      <TouchableOpacity style={{
          marginTop:55,
          borderRadius:5,
          borderWidth:1,
          width:70,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Contact')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Contact</Text>
        
        
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={{
           marginTop:115,
          borderRadius:5,
          borderWidth:1,
          width:70,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Contact')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Contact</Text>
        
        
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={{
           marginTop:115,
          borderRadius:5,
          borderWidth:1,
          width:70,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Contact')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Contact</Text>
        
        
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={{
           marginTop:115,
           marginLeft:10,
          borderRadius:5,
          borderWidth:1,
          width:50,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
      </View>

      
     
    </View>

  </View>
  

  );
}

function ContactScreen({navigation}){
  return (
    <View style={{flex:1}}>

            
    <View style={{flex:0.9,backgroundColor:'#015E54'}}>

        <View style={{flex:4,flexDirection:'row',backgroundColor:'#015E54'}}>

        <View style={{flex:7,backgroundColor:'#015E54',padding:10,marginTop:4,marginLeft:4}}><Text style={{fontSize:17,color:'white',fontFamily:'times'}}>WhatsApp</Text></View>
        <View style={{flex:1,backgroundColor:'#015E54'}}>
          <Image source = {require('./android/app/src/main/assets/images/magnify.png')}
          style={{marginLeft:7,marginTop:16,height:23,width:23}}
          />
            
        </View>
        <View style={{flex:1,backgroundColor:'#015E54'}}>

        <Image source = {require('./android/app/src/main/assets/images/options.png')}
          
          style={{marginLeft:14,marginTop:16,height:23,width:23}}
          />
        </View>
        
        



        </View>

        <View style={{flex:2,flexDirection:'row',backgroundColor:'#015E54'}}>

             <View style={{flex:1.5,backgroundColor:'#015E54',padding:5}}>
             <Image source = {require('./android/app/src/main/assets/images/cam.png')}
          
              style={{height:20,width:20}}
              />
             </View>

             <View style={{flex:7,flexDirection:'row',backgroundColor:'#015E54',padding:6,borderBottomWidth:3,borderBottomColor:'#e5e4e2'}}>
                  <View style={{flex:6,backgroundColor:'#015E54'}}>
                <Text style={{marginLeft:17,color:'white',fontFamily:'times'}}>CHATS</Text>
                </View>

                <View style={{flex:4,backgroundColor:'#015E54'}}>
                <Text style={{color:'black',fontSize:13,marginTop:1,borderRadius:1000,width:17,height:17,borderColor:'white',borderWidth:1,backgroundColor:'white'}}> 9 </Text>
                </View>

             </View>

             <View style={{flex:7,backgroundColor:'#015E54',padding:6}}>
             <Text style={{marginLeft:33,color:'#b2beb5',fontFamily:'times'}}>STATUS</Text>

             </View>

             <View style={{flex:7,backgroundColor:'#015E54',padding:6}}>
             <Text style={{marginLeft:33,color:'#b2beb5',fontFamily:'times'}}>CALLS</Text>

             </View>

        </View>



    </View>


    <View style={{flex:5}}>

        <FlatList
            
        data={DATA}
        
        keyExtractor={(item, index) => index}
        
        renderItem={({item,index}) =>

        


        <View style={{backgroundColor:'white', padding:10,borderBottomWidth:5,borderBottomColor:'white'}}>


            <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>

              <View style={{flex:1, backgroundColor:'white'}}>
               <Image source={require('./android/app/src/main/assets/images/user.png')}
              style={{height:39,width:39}}
              /> 
             </View>
              
             <View style={{flex:6, backgroundColor:'white'}}>
              

              <Text style={{marginLeft:10,fontSize:15, color:'black',fontFamily:'times'}}> {item.title} </Text>
              <Text style={{marginLeft:10,fontSize:14,marginTop:2, color:'#2f4f4f',fontFamily:'times'}}> {item.msg}</Text> 


             </View>

             <View style={{flex:3, backgroundColor:'white', alignItems:'flex-end'}}>
              
              <Text style={{fontSize:12,color:'#0BCB54'}}> {item.time} </Text>
              <Text style={{color:'white',fontSize:13,marginTop:4,borderRadius:1000,width:17,height:17,borderColor:'#0BCB54',borderWidth:1,backgroundColor:'#0BCB54'}}> {item.unread} </Text>
             </View>

            </View>

                        

          
        </View>
        
        

      }
        />

      </View>

</View>

  );

}

function ProfileScreen(){
   return (
     <Text>hey</Text>
   );

}

function AboutScreen({navigation}){
  return(
    <View>
    <View style={{backgroundColor:'pink',alignItems:'center',width:350,marginTop:100,marginLeft:30}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Name: Umair</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Pending Offers: 3</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Hobbies: Coding</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Total Payment Recieved: 3,00,000</Text>
    </View>
    
    <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:140,
          borderRadius:5,
          borderWidth:1,
          width:140,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('ContactList')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>See Contact List</Text>
        
        
      </TouchableOpacity>
       </View>

       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:190,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
       
       </View>

  );
}

function ContactListScreen({navigation}){

  return (
    <View style={{flex:1}}>

    <View  style={{flex:1,backgroundColor:'pink'}}>  


      <View style={{flex:1,backgroundColor:'pink',flexDirection:'row'}}>

          <View style={{flex:1,backgroundColor:'white',flexDirection:'row',padding:13}}>
             <Text style ={{color:'#63A6F5',textAlign:'center',marginLeft:5}}>Groups</Text>
          </View>

          <View style={{flex:3,backgroundColor:'white',flexDirection:'row'}}>
            <Text style={{fontWeight:'bold',fontSize:16,marginTop:12,marginLeft:70}}>Contacts</Text>
          </View>

          <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
            <Text style ={{color:'#63A6F5',marginTop:3,fontSize:30,marginLeft:43}}>+</Text>
          </View>

      </View>


      <View style={{flex:1,backgroundColor:'#c0c0c0'}}>

      <TextInput
        style={{textAlign:'center',fontSize:16,height:37,width:370,backgroundColor:'white',marginLeft:20,marginTop:5,borderRadius:8}}
        
        placeholder={'Search'}
       
      />
          
      </View>

</View> 




<View style={{flex:5}}>

  <SectionList

    sections={DATA2}

    renderSectionHeader={({section}) =>


    <View style={{backgroundColor:'#F2F2F2', padding:5, height:30,marginLeft:8}}>
    <Text style={{fontWeight:'bold'}}> {section.title} </Text>
    </View>


    }

    renderItem={({item,section}) => 
    <View style={{flex:1,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F2F2F2'}}>

        <View style={{flex:1 , backgroundColor:'white',padding:2,marginLeft:8}}>
        <Image source={require('./android/app/src/main/assets/images/user.png')}
             style={{height:30,width:30}}

        />
        </View>
     
        <View style={{flex:10,backgroundColor:'white', padding:5,  height:40}}>
                  <Text> {item.title} </Text>
        </View>

        

    </View>
    
                  

              }

   />



</View>



<View style={{flex:1,backgroundColor:'white',borderTopWidth:1,borderTopColor:'#F2F2F2'}}>

  <Text style={{color:'#A9A9A9',fontWeight:'bold',padding:15,textAlign:'center'}}>11 Contacts</Text>

</View>  

</View>
  );
}

function WalletScreen({navigation}){
  return(
    <View>
    <View style={{backgroundColor:'pink',alignItems:'center',width:350,marginTop:100,marginLeft:30}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Amount: 3000</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Pending Amount: 4000</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Total Payment Sent: 1500</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Total Payment Recieved: 3,00,000</Text>
    </View>
    
    <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:110,
          borderRadius:5,
          borderWidth:1,
          width:200,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.navigate('Login')}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Send Through JazzCash</Text>
        
        
      </TouchableOpacity>
       </View>

       <View>
       <TouchableOpacity style={{
          marginTop:30,
          marginLeft:190,
          borderRadius:5,
          borderWidth:1,
          width:45,
          backgroundColor: '#D50D62',
          borderColor:'#D50D62'
          

        }}
        onPress={() => navigation.goBack()}
        >
        <Text style={{color:'#ffffff',fontWeight: 'bold',fontSize:18}}>Back</Text>
        
        
      </TouchableOpacity>
       </View>
       
       </View>

  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Homehome" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Status" component={StatusScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Track" component={TrackScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const BuyStack = createNativeStackNavigator();
function BuyStackScreen(){
  return (
    <BuyStack.Navigator>
    <BuyStack.Screen name="BuyHome" component={BuyScreen} options={{ headerShown: false }} />
    <BuyStack.Screen name="BuyStatus" component={BuyStatusScreen} options={{ headerShown: false }} />
    <BuyStack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} options={{ headerShown: false }} />
    <BuyStack.Screen name="OrderPlaced" component={OrderPlacedScreen} options={{ headerShown: false }} />
  </BuyStack.Navigator>

  );

}



const SellStack = createNativeStackNavigator();
function SellStackScreen(){
  return (
    <SellStack.Navigator>
    <SellStack.Screen name="Sellstack" component={SellScreen} options={{ headerShown: false }} />
    <SellStack.Screen name="Offers" component={OffersScreen} options={{ headerShown: false }} />
    <SellStack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
  </SellStack.Navigator>

  );

}

const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    
      <Tab.Navigator 
      screenOptions = {{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
             position: 'absolute',
             left: 20,
             right: 20,
             bottom: 25,
             elevation: 0,
             borderRadius: 15,
             height: 70,
            ...styles.shadow 

          }

      }}
      
      >
        <Tab.Screen name="Home" component={HomeStackScreen}  options={{ 
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source = {require('./android/app/src/main/assets/tabbar_icons/home.png')} 
              resizeMode='contain'
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? '#e32f45' : '#748c94'
                 
               }}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>HOME</Text>
            </View>
          ),
         }}/>
        <Tab.Screen name="Buy" component={BuyStackScreen}  options={{ 
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source = {require('./android/app/src/main/assets/tabbar_icons/buy.png')} 
              resizeMode='contain'
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? '#e32f45' : '#748c94'
                 
               }}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>BUY</Text>
            </View>
          ),
         }}/>
        <Tab.Screen name="Sell" component={SellStackScreen}  options={{ 
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source = {require('./android/app/src/main/assets/tabbar_icons/sell.png')} 
              resizeMode='contain'
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? '#e32f45' : '#748c94'
                 
               }}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>SELL</Text>
            </View>
          ),
         }}/>
        <Tab.Screen name="Profile" component={MyDrawer}  options={{ 
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source = {require('./android/app/src/main/assets/tabbar_icons/profile.png')} 
              resizeMode='contain'
               style={{
                 width:25,
                 height:25,
                 tintColor: focused ? '#e32f45' : '#748c94'
                 
               }}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>PROFILE</Text>
            </View>
          ), 
         }}/>
      </Tab.Navigator>
    
  );

}

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return(
    <View style={{flex:1}}>
     <DrawerContentScrollView {...props}  >
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center',backgroundColor:'#f6f6f6',marginBottom:10}}>
        <View>
        <Text>Muhammad Umair</Text>
        <Text>umair@gmail.com</Text>
        </View>
        <View>
          <Image source={require('./android/app/src/main/assets/images/user.png')} 
          style={{
              height:60,
              width: 60,
              borderRadius:30

          }}
          />
        </View>
      
      </View>
     <DrawerItemList {...props} />
     
     </DrawerContentScrollView>
     <TouchableOpacity
     style={{position:'absolute',bottom:200,left:0,right:0,padding:10,backgroundColor:'#f6f6f6',borderRadius:10,margin:5}}
     onPress={() => props.navigation.navigate('Login')}
     >
    
    <Text style={{color:'blue'}}>LogOut</Text>
     </TouchableOpacity>
     </View>
  );
}

const AboutStack = createNativeStackNavigator();
function AboutStackScreen(){
  return (
    <AboutStack.Navigator>
    <AboutStack.Screen name="about" component={AboutScreen} options={{ headerShown: false }} />
    <AboutStack.Screen name="ContactList" component={ContactListScreen} options={{ headerShown: false }} />
  </AboutStack.Navigator>

  );

}

const WalletStack = createNativeStackNavigator();
function WalletStackScreen(){
  return (
    <WalletStack.Navigator>
    <WalletStack.Screen name="wallet" component={WalletScreen} options={{ headerShown: false }} />
    
  </WalletStack.Navigator>

  );

}


const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{

      headerStyle: {
        backgroundColor:'transparent',
        elevation:5,
      },
      headerTintColor:'#e32f45'
    }} 
    
    drawerContent= {(props) => <CustomDrawer{...props} />}
    >
      <Drawer.Screen name="About" component={AboutStackScreen} />
      <Drawer.Screen name="Wallet" component={WalletStackScreen} />
    </Drawer.Navigator>
  );
};



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} /> 
        <Stack.Screen name="Details" component={TabBar} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   shadow: {
     shadowColor: '#7F5DF0',
        shadowOffset: {
          width: 0,
          height: 10,
        },
     shadowOpacity: '0.25',
     shadowRadius: '3.5',
     elevation: 5,
   }

});

export default App;
