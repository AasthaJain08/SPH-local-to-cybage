import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ReactGA from "react-ga";

import logo from './Capture.png';
ReactGA.initialize("UA-122397506-3");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: "",
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
      cid: "",
      items: [],
      isLoaded: false,
      isbuttonclicked: false,
    };
  }

  //banner
  componentDidMount() {
    ReactGA.event({
      category: "Image",
      action: "Click the Image",
    });

    let bannerURl =
    "http://alb-activation-service-2072168137.ap-southeast-1.elb.amazonaws.com/activate/banner";
    let headers = {
      "Content-Type": "applications/json; charset set=UTF-8",
    };
    let data = {
      country: "SG",
      device: "iphone",
    };

    axios
      .post(bannerURl, data, headers)
      .then((res) => {
        if (res.data == true) {
          console.log("Banner return");
        } else {
          console.log("Banner return");
        }
        console.log(res.data);
        this.setState({ imgurl: res.data.documentPath });
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  }

  //banner click TAG
  postGAtags() {
    let bannerURl2 =
      "http://alb-activation-service-2072168137.ap-southeast-1.elb.amazonaws.com/activate/banner";
    console.log("pageview");
    let headers = {
      "Content-Type": "applications/json; charset set=UTF-8",
    };
    let data = {
      country: "SG",
      device: "iphone",
    };

    axios
      .post(bannerURl2, data, headers)
      .then((res) => {
        if (res.data == true) {
          console.log("Banner return");
        } else {
          console.log("Banner return");
        }
        this.setState({
          gaTrackingId: res.data.gaTrackingId,
          documentHostname: res.data.documentHostname,
          documentPath: res.data.documentPath,
          documentTitle: res.data.documentTitle,
          campaignSource: res.data.campaignSource,
          campaignMedium: res.data.campaignMedium,
          campaignName: res.data.campaignName,
          cid: res.data.cid,
          eventCategory: res.data.eventCategory,
          eventAction: res.data.eventAction,
          eventLabel: res.data.eventLabel,
          customMetric1: res.data.customMetric1,
          destinationPath: res.data.destinationPath,
        });
        console.log(
          "EVENT data:",
          res.data.gaTrackingId,
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
          res.data.destinationPath
        );
        window.location.replace(res.data.destinationPath);
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  }

  //Sign up button click
  handleSubmit() {
    this.setState({ isbuttonclicked: true });
  }
  render() {
    return (
      <div>
        <div className="App">
          <header>
            
            <div onClick={() => this.postGAtags()}>
              {" "}
              <img src={this.state.imgurl} />
            </div>
          </header>
        </div>
        <span className="text">
            This page simulate an article page on ST and the banner below is render from a ReactJS
            app on S3 to the  &lt;div id="cdp_id_123"	&gt; on this page. This page simulate an article page on ST and the banner below is render from a ReactJS
            app on S3 to the  &lt;div id="cdp_id_123"	&gt; on this page. This page simulate an article page on ST and the banner below is render from a ReactJS
            app on S3 to the  &lt;div id="cdp_id_123"	&gt; on this page.
            </span>
        <div className="Appbanner">
     
        <div className="premium-read-more st-newsletter ">
          <div className="paywall-box-area">
            <div className="st-logo">
              <img src={logo} className="App-logo" alt="logo" /></div>

            <div className="paywall-text-area">
              <h4 className="paywall-header">Covid-19: Don't miss the latest on the outbreak and its impact</h4>
              <div className="paywall-text">
                <p>Stay in the know with e-mail alerts</p>

              </div>
              <div className="cxsph-cta-inputarea">
                <div className="cxsph-cta-messagearea hidden1">Thank you!</div>
                <input type="text" name="cxsph-cta-email" placeholder="Enter your e-mail" />

                <a className="cxsph-cta-submit" id="cXLinkIdk9aysdwiq13avt86" href="https://www.straitstimes.com/">Sign up</a>

              </div>
              <p className="footnote">By signing up, you agree to our <a href="http://sph.com.sg/legal/sph_privacy.html">Privacy Policy</a> and <a href="http://sph.com.sg/legal/website_tnc.html">Terms and Conditions.</a></p>
            </div></div>
        </div>
      
    </div>
        
        
      </div>
    );
  }
}
export default App;
