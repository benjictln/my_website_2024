import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var poBox = this.props.data.address.po_box;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">



            <div className="ten columns">


            </div>

         </div>

         <div className="row">


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
