import React ,{Component} from 'react';
import './App.css';
import './Animate.css'
import axios from 'axios';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-122397506-3');
ReactGA.pageview(window.location.pathname+window.location.search);

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    imgurl:'',
    gaTrackingId: "",
documentHostname: "",
documentPath: "",
documentTitle: "",
campaignSource: "",
campaignMedium: "",
campaignName: "",
eventCategory: "",
eventAction: "",
eventLabel: "",
customMetric1: "",
destinationPath: "",
cid:'',
items: [],
isLoaded: false
     }
}



//banner
componentDidMount(){
  ReactGA.event({
    category: 'Image',
    action: 'Click the Image'
  });
  
  let bannerURl = 
  "http://alb-activation-service-2072168137.ap-southeast-1.elb.amazonaws.com/activate/banner" ;
  let headers = {
      "Content-Type" : "applications/json; charset set=UTF-8"
   
  }  
  let data={
    "country" : "SG",
    "device" : "iphone"
  };
  
  axios.post(bannerURl, data, headers)
  .then((res)=>{
    if(res.data==true){
console.log('Banner return');
    }else{
      console.log('Banner return')
    }
    console.log("Pageview data:",  res.data.gaTrackingId,
    res.data.documentHostname,
    res.data.documentPath,
    res.data.documentTitle,
    res.data.campaignSource,
    res.data.campaignMedium,
     res.data.campaignName,
    res.data.cid);
  this.setState({ imgurl:res.data.documentPath })

 
  })
  .catch((err)=>{
    console.log('Axios error' , err)
  })}



//banner click TAG
postGAtags(){
 let bannerURl2 = 
  "http://alb-activation-service-2072168137.ap-southeast-1.elb.amazonaws.com/activate/banner" ;
  console.log('pageview');
  let headers = {
      "Content-Type" : "applications/json; charset set=UTF-8"
  }  
  let data={
    "country" : "SG",
    "device" : "iphone"
  };

  axios.post(bannerURl2, data, headers)
  .then((res)=>{
    if(res.data==true){
      console.log('Banner return')
    }else{
      console.log('Banner return')
    }
  this.setState({
    gaTrackingId: res.data.gaTrackingId,
    documentHostname: res.data.documentHostname,
    documentPath: res.data.documentPath,
    documentTitle: res.data.documentTitle,
    campaignSource: res.data.campaignSource,
    campaignMedium: res.data.campaignMedium,
    campaignName: res.data.campaignName,
    cid:res.data.cid,
    eventCategory: res.data.eventCategory,
    eventAction: res.data.eventAction,
    eventLabel: res.data.eventLabel,
    customMetric1: res.data.customMetric1,
    destinationPath: res.data.destinationPath,
   
  });
  console.log("EVENT data:",  res.data.gaTrackingId,
 res.data.documentHostname,
 res.data.documentPath,
 res.data.documentTitle,
 res.data.campaignSource,
 res.data.campaignMedium,
 res.data.campaignName,
 res.data.cid,
 res.data.eventCategory,
 res.data.eventAction,
 res.data.eventLabel,
 res.data.customMetric1,
 res.data.destinationPath,);
  window.location.replace(res.data.destinationPath);
  })
  .catch((err)=>{
    console.log('Axios error' , err)
  })
 
}
render(){
  return (
    <div className="App">
      <header>
         <div onClick={ ()=> this.postGAtags() }> <img src={this.state.imgurl} className="fadeInUp"/></div>
       
 
      </header>
        
    </div>
  );
}
}
export default App;
