import React from 'react';

import './Header.css';

 const Header = ({header}) =>(
   <header>
     <nav className="navbar navbar-default bg-black header">
       <div className="container-fluid">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand texto-logo" href="#"><img src={header.logoimg}/><span >{header.logo}</span></a>
     </div>
     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


      <ul className="nav navbar-nav navbar-right">
        <li ><a href="#"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Opcion vacía</a></li>
      </ul>
         </div>
   </div>
 </nav>
     </header>
   )

 export default Header
