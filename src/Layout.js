import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

require('./css/bootstrap.min.css')


export default class Layout extends React.Component {

  render() {
  	const containerStyle = {
  		marginTop: "60px"
  	}
    return (
    	<div>
	    	<Header />
	    	<div class="container" style={containerStyle}>
	    		<div class="row">
	      			{this.props.children}
	      		</div>
	      		<Footer />
	      	</div>
	    </div>
      );
  }
}