import React, { Component } from 'react';
import {  Route ,Switch} from "react-router-dom";
import Service from './services/Service';
import Ecommerce from './services/Ecommerce';
import WebDesignBuild from './services/WebDesignBuild';
import Seo from './services/Seo';
import Smm from './services/Smm';


class Services extends Component {
	componentDidMount() {
		document.title = 'Services | Forwward Design';
	  }
  render() {
    return (
    	<div>

			<Switch>
				<Route exact path="/services" component={Service} />
				<Route exact path="/services/ecommerce" component={Ecommerce} />
				<Route exact path="/services/web-design-build" component={WebDesignBuild} />
				<Route exact path="/services/search-engine-optimisation" component={Seo} />
				<Route exact path="/services/social-media-marketing" component={Smm} />

				
			</Switch>
		
		</div>
    );
  }
}

 
   
export default Services;