import React from 'react';

const Header = ()=>{
  return(
    <header className="header">
      <nav className="navbar navbar-fixed-top bg-faded">
        <div className="nav navbar-nav">
          <a className="navbar-brand" href="#">Linkly Shortlierener</a>
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link" href="#">About</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
