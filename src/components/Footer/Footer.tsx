import React from 'react';
import './Footer.css'

class Footer extends React.Component<{},Date> {
  constructor(props: any) {
    super(props)
    this.state = new Date();
  }
  render() { 
    return (
      <footer className="bg-light">
        <div className="container text-center">
          <i className="far fa-copyright mr-1"></i><label>{this.state.getFullYear()} - Lille 1</label>
          <span className="small font-italic infos"> No cat has been hurt during the development of this app.</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
