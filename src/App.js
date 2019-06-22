import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar  navbar-expand-md navbar-light bg-light fixed-top">
          <div className="container container">
            <a className="navbar-brand" href="#">Nadon Gabriel</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#main">Intro</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#features">Expertises</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#pricing">Projets</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#reviews">Témoignages</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#buy">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div id="main" className="main">
      <div className="hero">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 col-lg-6 mb-4">
              <div className="hero-content">
              
                <h2>Mon portfolio</h2>
                <p>Passionné du développement web, j’aime comprendre le fonctionnement des éléments de mon environnement
                  et j’adore par-dessus tout résoudre des problèmes.</p>

                <button className="btn btn-primary btn-action" type="button">Prendre un rendez-vous</button>


              
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <svg version="1.1" id="Layer_1" className="img-fluid" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
              viewBox="0 0 1785 1727" >
        
           <ellipse className="st0" cx="888.1" cy="818.4" rx="811.6" ry="813.4"/>
           <path className="st0" d="M1389.6,818.4c0,280.1-226.2,507.2-505.3,507.2c-279,0-505.3-227.1-505.3-507.2
             c0-280.1,226.2-507.2,505.3-507.2C1163.4,311.3,1389.6,538.3,1389.6,818.4z"/>
           <circle className="st0" cx="890" cy="810.9" r="202.1"/>
           <circle className="st1" cx="589.1" cy="1217.2" r="94.1"/>
           <path className="st2" d="M551.8,1182.9l6.5,74.6l29,8.3l29.1-8.3l6.5-74.6H551.8z M608.8,1207.3h-34l0.7,9.4h32.6l-2.5,28l-18.2,5.2
             l-18.3-5.2l-1.3-14.3h8.9l0.6,7.3l9.9,2.7l9.9-2.8l1-11.9h-30.9l-2.3-27.7l44.6,0L608.8,1207.3z"/>
           <circle className="st1" cx="889.3" cy="1619.7" r="105.4"/>
           <g>
             <path className="st2" d="M889.3,1678.1c-1.5,0-3-0.4-4.3-1.2l-13.8-8.4c-2.1-1.2-1-1.6-0.4-1.9c2.8-1,3.6-1.5,6.5-3.2
               c0.3-0.2,0.7-0.1,1,0.1l10.3,6.1c0.4,0.2,0.9,0.2,1.3,0l40.4-24c0.4-0.2,0.6-0.7,0.6-1.2v-48.6c0-0.5-0.2-0.9-0.6-1.2l-40.4-24.7
               c-0.4-0.2-0.9-0.2-1.3,0l-40.4,24.7c-0.4,0.2-0.7,0.7-0.7,1.2v48.6c0,0.5,0.3,0.9,0.6,1.1l10.4,6.2c6.1,3.2,9.8,0,9.8-3.8v-47.8
               c0-0.7,0.5-1.2,1.2-1.2h5.9c0.7,0,1.2,0.5,1.2,1.2v47.8c0,8.5-5,13.3-12.8,13.3c-2.4,0-4.3,0-9.5-2.7l-10.8-6.5
               c-2.7-1.6-4.3-4.6-4.3-7.8V1595c0-3.2,1.7-6.2,4.3-7.8l41.3-24.7c2.6-1.5,6.1-1.5,8.7,0l41.3,24.7c2.7,1.6,4.3,4.6,4.3,7.8v49.3
               c0,3.2-1.7,6.2-4.3,7.8l-41.3,24.7C892.3,1677.6,890.8,1678.1,889.3,1678.1L889.3,1678.1L889.3,1678.1z"/>
             <path className="st2" d="M902,1644.7c-16.8,0-21.9-8.2-21.9-15.4c0-0.7,0.5-1.2,1.2-1.2h5.3c0.6,0,1.1,0.4,1.2,1
               c0.8,5.6,4.4,8.1,14.1,8.1c8.7,0,12.3-2.7,12.3-7.5c0-2.8-0.9-4.8-14.4-6.2c-11.3-1.2-18.3-3.7-18.3-13.1c0-8.6,7-13.7,18.8-13.7
               c12,0,19.9,3.6,20.6,13.2c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.3-0.5,0.4-0.9,0.4h-5.4c-0.6,0-1-0.4-1.2-1c-1.1-4.4-4.4-6.1-12.9-6.1
               c-9.5,0-10.6,3.3-10.6,5.9c0,3.1,1.3,4,14.1,5.8c12.7,1.7,18.7,4.2,18.7,13.4C922.6,1638.7,915.1,1644.7,902,1644.7L902,1644.7
               L902,1644.7z"/>
           </g>
           <circle className="st1" cx="889.1" cy="317.1" r="94.1"/>
           <path className="st2" d="M872.7,316.2c1-0.2,2-0.3,3-0.3l-0.8,0h27c1.2,0,2.3-0.2,3.4-0.5c5-1.4,8.7-5.9,8.7-11.4v-22.7
             c0-6.5-5.5-11.3-12.1-12.4c-4.1-0.7-10.2-1-14.3-1c-4.1,0-8.1,0.4-11.5,1c-10.2,1.8-12.1,5.5-12.1,12.4v7.5h25v4.2h-33.1
             c-9.3,0-16.8,11.1-16.9,24.8c0,0.1,0,0.1,0,0.2c0,2.5,0.2,4.9,0.7,7.1c2.1,10.3,8.5,17.9,16.2,17.9h4v-12
             C859.8,324.1,865.1,317.6,872.7,316.2z M875.4,284.4c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.6,4.5-4.6c2.5,0,4.5,2,4.5,4.6
             C879.9,282.4,877.9,284.4,875.4,284.4z"/>
           <path className="st2" d="M937.9,309.3c-2.4-9.5-8.6-16.3-15.8-16.3h-4v10.6c0,8.8-5.8,15.2-12.9,16.3c-0.7,0.1-1.4,0.2-2.2,0.2h-27
             c-1.1,0-2.3,0.1-3.4,0.4c-5,1.3-8.7,5.5-8.7,10.8v22.7c0,6.5,6.5,10.3,12.9,12.1c7.6,2.2,16,2.6,25.1,0c6.1-1.7,12-5.2,12-12.1v-6.9
             h-25V343h33.1c6.6,0,12.3-5.6,15.1-13.7c1.2-3.4,1.8-7.2,1.8-11.3C939,314.9,938.6,312,937.9,309.3z M902.5,351c2.5,0,4.5,2,4.5,4.5
             c0,2.5-2,4.6-4.5,4.6c-2.5,0-4.5-2-4.5-4.6C898,353,900,351,902.5,351z"/>
           <circle className="st1" cx="110.4" cy="1044.4" r="105.4"/>
           <path className="st2" d="M164.8,1058.8c-0.3-2.7-1.8-4.7-4.1-6.3c0.6,0.4,1,0.7,0,0c-1.4-1-0.7-0.5,0,0c-5.6-4-12.8-3.1-18.9-0.9
             c-2.4-4-2.5-7-1.1-11.3c0.2-0.5,0.1-0.9-0.5-1.1c-1.4-0.6-3.4-0.3-4.8,0.1c-0.5,0.1-0.8,0.4-0.9,0.9c-1,4.7-4.1,9.1-6.8,13.1
             c-1.9-3.6-1.8-6.5-0.5-10.3c0.2-0.5,0.1-0.7-0.4-0.9c-1.4-0.7-3.6-0.4-5,0.1c-1.7,0.5-4.2,8.7-5,10.3c-1.7,3.4-3.1,8.7-6,11.4
             c-2.4-3.1,4.4-10.1,2.1-12.9c-0.8-0.9-2.2-0.9-3-0.1c0.2-1.5,0.3-2.5-0.1-3.7c-0.4-1.3-1.4-2.1-2.9-2c-3.5,0.1-6.6,2.7-8.7,5.2
             c-2,2.4-7.3,3.8-10.1,5.3c-4.9-4.3-15.5-8.8-15.7-16c-0.3-8.2,9.4-13.7,15.9-17c8.5-4.3,21.5-9.7,31.1-5c2.5,1.3,3.6,3.9,2.9,6.5
             c-1.8,6.7-9.2,11.2-15.6,13.2c-3.2,1-6.6,1.8-10,1.6c-4.5-0.3-8-3-8.5-3.1c-0.4-0.1-0.4,0.4-0.3,0.7c4.7,12.2,28.2,3.3,34.4-3
             c3-3,4.8-5.9,5.5-10.5c0.9-5.4-3.1-8.8-6.1-10.1c-15.2-7-36.3,2.2-47.8,11.6c-5,4.1-11.2,10.6-8.4,17.4c3.1,7.4,12.6,11.2,18.8,15.7
             c-5,2.5-11.3,5.1-14.6,9.7c-1.9,2.7-2.5,5.5-1.1,8.6c2.5,5.4,11.4,3,15.2,0.7c3.5-2.2,5.8-5.1,6.8-8.8c0.9-3.2,0.7-6.6-0.8-9.7
             l5.6-2.8c-1.5,4.5-2.2,10.2,1,14.2c1.3,1.6,4.5,1.7,5.8,0.1c1.7-2.1,2.9-4.8,4-7.3c-0.1,1.8-0.4,3.9,0.3,5.5c0.7,1.8,2.4,2.2,4.1,1
             c5.2-3.6,8.5-13.4,11-19.2c0.7,2.5,1.5,4.8,2.7,7.1c0.3,0.6,0.3,0.9-0.2,1.4c-1.9,2.1-6.4,5.6-6.8,8.4c-0.1,0.7,0.3,1.3,1.1,1.4
             c3,0.6,6.4-0.5,8.9-2.2c2.6-1.7,3.4-4.1,2.8-6.9c-0.9-4.1,2.1-8.6,5-11.9c0.5,2.5,1.3,4.9,2.8,7.1c-2.6,2.2-6.4,5.4-5.8,9.2
             c0.2,1.3,1.4,2.2,2.8,1.9c3.1-0.6,5.7-2,7.7-4.3c1.8-2.1,1.1-4.4,0.4-6.8c4.7-1.3,9.4-1.6,14,0c2.2,0.8,4.1,2.1,5.1,4.1
             c1.3,2.5,0.6,4.7-2,6.4c-0.6,0.4-1.1,0.7-0.9,0.9c0.2,0.2,1,0.4,2.6-0.6c1.6-1,2.6-2.4,2.9-4.2
             C164.8,1059.9,164.8,1059.3,164.8,1058.8L164.8,1058.8z M86.9,1063.8c-0.3,3.3-1.9,5.9-4.5,8c-1.5,1.2-3.3,2.2-5.2,2.4
             c-1.8,0.2-3.3-0.3-3.4-2.2c-0.3-5.4,8-10.6,12.6-12.2C86.8,1061.1,87,1062.4,86.9,1063.8L86.9,1063.8L86.9,1063.8z M107,1049.6
             c-0.8,4.4-2.9,12.2-6.3,15.3c-0.5,0.4-0.9,0.4-1.1-0.1c-2-4.7,0.7-14.4,6.5-15.9C106.7,1048.7,107.1,1049,107,1049.6L107,1049.6z
              M120.8,1065.6c1.6-1.8,3.3-3.5,4.9-5.3C125.9,1062.3,122.3,1066.2,120.8,1065.6z M136.5,1062.1c-0.5,0.2-1.5,0.5-1.5,0.2
             c-0.3-2.4,2.3-4.9,3.9-6C139.8,1058.5,138.8,1060.9,136.5,1062.1L136.5,1062.1z"/>
           <circle className="st1" cx="1669.4" cy="1044.4" r="110.4"/>
           <path className="st2" d="M1658.7,1006.9h-17.9v47.4c0,11.7-4,15-11,15c-3.3,0-6.2-0.6-8.5-1.4l-1.9,13.9c3.3,1.1,8.3,1.8,12.3,1.8
             c16.1,0,27-7.6,27-29.2V1006.9z M1697.7,1005.2c-17.3,0-28.2,9.8-28.2,22.8c0,11.2,8.4,18.2,20.7,22.7c8.9,3.2,12.4,6,12.4,10.6
             c0,5.1-4,8.4-11.7,8.4c-7.1,0-13.6-2.4-17.9-4.7l0,0l-3.4,14.1c4.2,2.4,11.9,4.7,20.3,4.7c20.2,0,29.7-10.8,29.7-23.6
             c0-10.8-6-17.8-19-22.8c-9.6-3.8-13.7-6-13.7-10.8c0-3.8,3.5-7.3,10.7-7.3c7.1,0,12,2.4,14.8,3.9l4.3-14.3
             C1712.1,1006.8,1706.1,1005.2,1697.7,1005.2z"/>
           <circle className="st1" cx="1511.4" cy="287.4" r="100.4"/>
           <g>
             <path className="st2" d="M1511.8,291l-8.5,24.9h0l-6.6,19c0.5,0.1,0.9,0.2,1.4,0.4h0.1c4.1,1.1,8.4,1.7,12.9,1.7c2.2,0,4.4-0.1,6.5-0.5
               c2.9-0.4,5.7-1,8.5-1.8c0.7-0.2,1.4-0.4,2-0.7c-0.7-1.6-2.3-5-2.4-5.2L1511.8,291z M1465.4,267.3c-2.6,5.9-4.4,13.1-4.4,19.7
               c0,1.6,0.1,3.3,0.2,4.9c1.8,18.5,13.8,34.1,30.2,41.1c0.7,0.3,1.4,0.6,2.1,0.8l-24.2-66.5C1467.3,267.3,1466.9,267.4,1465.4,267.3z
               "/>
             <path className="st2" d="M1556.4,266c-1.1-2.4-2.4-4.7-3.9-6.9c-0.4-0.6-0.9-1.3-1.3-1.9c-5.6-7.5-13.2-13.4-22.1-16.8
               c-5.6-2.2-11.7-3.4-18-3.4c-15.7,0-29.7,7.3-38.9,18.7c-1.7,2.1-3.2,4.3-4.6,6.7c3.7,0,8.3,0,8.8,0c4.7,0,12-0.6,12-0.6
               c2.4-0.2,2.7,3.4,0.3,3.7c0,0-2.4,0.3-5.2,0.4l16.4,48.7l9.8-29.5l-7-19.2c-2.4-0.1-4.7-0.4-4.7-0.4c-2.4-0.1-2.1-3.9,0.3-3.7
               c0,0,7.4,0.6,11.8,0.6c4.7,0,12-0.6,12-0.6c2.4-0.2,2.7,3.4,0.3,3.7c0,0-2.4,0.3-5.1,0.4l16.2,48.3l4.5-15
               c2.3-5.8,3.4-10.7,3.4-14.5c0-5.5-2-9.4-3.7-12.4c-2.3-3.7-4.4-6.8-4.4-10.5c0-4.1,3.1-8,7.6-8h0.6c6.8-0.2,9.1,6.6,9.3,11.2v0.2
               c0.1,1.9,0,3.3,0,4.9c0,4.5-0.9,9.7-3.4,16.1l-10.2,29.4l-5.8,17.1c0.5-0.2,0.9-0.4,1.4-0.7c14.8-7.1,25.5-21.4,27.8-38.2
               c0.3-2.2,0.5-4.5,0.5-6.8C1561,279.5,1559.3,272.4,1556.4,266L1556.4,266z"/>
           </g>
           <circle className="st1" cx="268.4" cy="287.4" r="105.4"/>
           <path className="st2" d="M269,237c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S296.6,237,269,237z M229.7,287.5l38.7,38.7
             C247.2,326,230,308.8,229.7,287.5z M277.8,325.3l-47.1-47.1c4-17.5,19.6-30.5,38.3-30.5c13,0,24.6,6.4,31.7,16.2l-5.4,4.8
             c-5.8-8.3-15.4-13.7-26.3-13.7c-13.9,0-25.7,8.8-30.1,21.1l41.1,41.1c10-3.6,17.6-12,20.2-22.5h-17V287h25.2
             C308.3,305.7,295.2,321.3,277.8,325.3z"/>
           <circle className="st1" cx="1191.2" cy="1217.2" r="94.1"/>
           <g>
             <path className="st2" d="M1203.7,1249.3c0.8,1.1,1.3,1,1.9,0.8s31.9-10.8,32.8-11.2c1-0.3,0.7-0.7,0.3-1.1
               c-0.3-0.5-10.7-14.6-11.2-15.4c-0.5-0.8-0.8-0.7-1.6-0.4l-33.1,8.6C1192.7,1230.5,1202.9,1248.1,1203.7,1249.3z M1241,1234.8v-16.6
               c-3.7,1-8.4,2.3-10.3,2.7C1233.5,1224.8,1237.9,1230.7,1241,1234.8z M1230.7,1200.6c-0.5,0.1-11.8,2.2-12.5,2.3
               c-0.7,0.1-0.5,0.5-0.2,0.9l10,13.7c0,0,12.2-3,12.9-3.2c0.1,0,0.1,0,0.2,0v-1.8c-2.2-2.8-8.2-10.4-8.8-11.2
               C1231.6,1200.4,1231.2,1200.5,1230.7,1200.6z"/>
             <path className="st2" d="M1159.5,1179.2c2.4-0.1,2.7,0.4,3.7,2l27,45.2l34-8.1c-1.9-2.7-10.4-14.8-11.3-15.9c-0.9-1.3,0-1.9,1.5-2.2
               c1.5-0.3,14.5-2.4,15.6-2.6c1.1-0.2,2-0.6,3.8,1.6c0.9,1.1,4.1,5,7,8.7v-21.1c0-5.2-1.8-9.6-5.5-13.3s-8.1-5.5-13.3-5.5h-62.5
               c-5.2,0-9.6,1.8-13.3,5.5c-2.1,2.1-3.6,4.5-4.5,7.1C1148.1,1180.1,1157.8,1179.3,1159.5,1179.2L1159.5,1179.2z"/>
             <path className="st2" d="M1206.7,1255.3c-2.9,0.9-4.2,1.3-6-1.3c-1.4-2-8.9-15.6-12.7-22.3c-7,1.8-19.9,5.2-23.6,6.1
               c-3.6,0.9-5.2-1.3-5.8-2.6c-0.4-0.9-11-23.8-17.8-38.4v52.5c0,5.2,1.8,9.6,5.5,13.3s8.1,5.5,13.3,5.5h62.5c5.2,0,9.6-1.8,13.3-5.5
               s5.5-8.1,5.5-13.3v-6.2C1233.3,1245.9,1208.7,1254.7,1206.7,1255.3z"/>
             <path className="st2" d="M1164.6,1232.6c1-0.2,20-4.8,20.5-4.9c0.4-0.1,0.7-0.3,0.2-1.1c-0.4-0.8-25.4-43.8-25.4-43.8
               c-0.2-0.4-0.2-0.5-0.8-0.5c-0.6,0-14.7,1.3-17.9,1.6c-0.1,0.7-0.2,1.4-0.2,2.1c3.3,6.8,22.3,46,22.4,46.3
               C1163.6,1232.7,1163.6,1232.8,1164.6,1232.6z"/>
           </g>
           <circle className="st1" cx="703.7" cy="816.7" r="84.7"/>
           <path className="st3" d="M651,818.8c0,7.6,7.4,14.6,19,18.6c-2.3,11.7-0.4,21.1,5.9,24.8c6.5,3.8,16.3,1.2,25.5-6.9
             c9,7.8,18.1,10.8,24.5,7.1c6.5-3.8,8.5-13.8,6.1-25.9c12.1-4,18.9-10,18.9-17.7c0-7.4-7.4-13.8-18.9-17.7
             c2.6-12.5,0.4-21.7-6.2-25.6c-6.4-3.7-15.6-0.5-24.8,7.5c-9.5-8.5-18.6-11-25.3-7.2c-6.4,3.7-8.2,13.3-5.9,25.2
             C658.8,804.9,651,811.4,651,818.8z"/>
           <path className="st2" d="M729.7,805c-0.9-0.3-1.9-0.6-2.9-0.9c0.2-0.6,0.3-1.3,0.4-1.9c2.2-10.5,0.7-19-4.1-21.7
             c-4.6-2.7-12.2,0.1-19.9,6.8c-0.8,0.7-1.5,1.3-2.2,2c-0.5-0.5-1-0.9-1.5-1.4c-8-7.1-16.1-10.1-20.9-7.3c-4.6,2.7-6,10.6-4.1,20.6
             c0.2,1,0.4,2,0.7,2.9c-1.1,0.3-2.2,0.7-3.3,1c-9.4,3.3-15.4,8.4-15.4,13.7c0,5.5,6.4,11,16.2,14.4c0.8,0.3,1.6,0.5,2.4,0.8
             c-0.3,1-0.5,2.1-0.7,3.2c-1.9,9.8-0.4,17.5,4.2,20.2c4.8,2.7,12.8-0.1,20.6-6.9c0.6-0.5,1.2-1.1,1.9-1.7c0.8,0.8,1.6,1.5,2.4,2.2
             c7.5,6.5,15,9.1,19.6,6.4c4.8-2.8,6.3-11.1,4.3-21.3c-0.2-0.8-0.3-1.6-0.5-2.4c0.6-0.2,1.1-0.3,1.7-0.5c10.2-3.4,16.8-8.8,16.8-14.4
             C745.5,813.5,739.3,808.3,729.7,805z"/>
           <path className="st3" d="M727.5,829.6c-0.5,0.2-1,0.3-1.5,0.5c-1.1-3.6-2.6-7.3-4.5-11.2c1.8-3.8,3.2-7.5,4.3-11.1
             c0.9,0.3,1.8,0.5,2.6,0.8c8.2,2.8,13.2,7,13.2,10.2C741.7,822.3,736.3,826.7,727.5,829.6L727.5,829.6z M723.9,836.8
             c0.9,4.5,1,8.5,0.4,11.7c-0.5,2.8-1.6,4.8-2.9,5.5c-2.8,1.6-8.8-0.5-15.2-6c-0.7-0.6-1.5-1.3-2.2-2c2.5-2.7,5-5.9,7.4-9.5
             c4.3-0.4,8.3-1,12-1.9C723.6,835.4,723.7,836.1,723.9,836.8z M687,853.8c-2.7,1-4.9,1-6.2,0.2c-2.8-1.6-4-7.9-2.4-16.2
             c0.2-1,0.4-2,0.6-2.9c3.6,0.8,7.7,1.4,12,1.7c2.5,3.5,5,6.6,7.6,9.4c-0.6,0.5-1.1,1.1-1.7,1.6C693.5,850.6,690,852.7,687,853.8
             L687,853.8z M674.2,829.6c-4.3-1.5-7.9-3.4-10.4-5.5c-2.2-1.9-3.3-3.8-3.3-5.3c0-3.2,4.8-7.4,12.9-10.2c1-0.3,2-0.7,3.1-1
             c1.1,3.6,2.6,7.4,4.3,11.2c-1.8,3.9-3.3,7.7-4.4,11.4C675.6,830.1,674.9,829.8,674.2,829.6z M678.5,800.4c-1.7-8.5-0.6-15,2.2-16.6
             c3-1.7,9.5,0.7,16.5,6.9c0.4,0.4,0.9,0.8,1.3,1.2c-2.6,2.8-5.1,5.9-7.6,9.4c-4.2,0.4-8.2,1-11.9,1.8
             C678.8,802.2,678.6,801.3,678.5,800.4L678.5,800.4z M716.8,809.8c-0.9-1.5-1.8-3-2.7-4.4c2.8,0.4,5.5,0.8,8.1,1.4
             c-0.8,2.5-1.7,5-2.8,7.6C718.5,812.9,717.6,811.4,716.8,809.8z M701.1,794.6c1.7,1.9,3.5,4,5.2,6.3c-3.5-0.2-7-0.2-10.5,0
             C697.6,798.7,699.4,796.5,701.1,794.6z M685.4,809.9c-0.9,1.5-1.7,3-2.5,4.6c-1.1-2.6-2.1-5.2-2.8-7.7c2.5-0.6,5.2-1,8.1-1.4
             C687.2,806.9,686.3,808.3,685.4,809.9z M688.2,832.5c-2.9-0.3-5.7-0.8-8.2-1.3c0.8-2.5,1.8-5.2,2.9-7.8c0.8,1.6,1.6,3.1,2.5,4.6
             C686.3,829.5,687.3,831,688.2,832.5z M701.2,843.3c-1.8-1.9-3.6-4.1-5.3-6.4c1.7,0.1,3.4,0.1,5.2,0.1c1.8,0,3.6,0,5.4-0.1
             C704.7,839.2,703,841.4,701.2,843.3z M719.4,823.2c1.2,2.7,2.2,5.3,3,7.8c-2.6,0.6-5.4,1.1-8.3,1.4c0.9-1.5,1.8-3,2.7-4.5
             C717.7,826.4,718.5,824.8,719.4,823.2z M713.5,826c-1.3,2.3-2.8,4.6-4.3,6.9c-2.6,0.2-5.4,0.3-8.1,0.3c-2.8,0-5.5-0.1-8-0.3
             c-1.5-2.2-3-4.5-4.3-6.9c-1.4-2.3-2.6-4.7-3.8-7.2c1.2-2.4,2.4-4.8,3.8-7.2v0c1.3-2.3,2.8-4.6,4.3-6.9c2.6-0.2,5.3-0.3,8.1-0.3
             c2.8,0,5.5,0.1,8.1,0.3c1.5,2.2,2.9,4.5,4.3,6.8c1.4,2.3,2.6,4.7,3.8,7.1C716.1,821.3,714.8,823.7,713.5,826L713.5,826z
              M721.3,783.7c3,1.7,4.1,8.6,2.3,17.7c-0.1,0.6-0.3,1.2-0.4,1.8c-3.7-0.8-7.7-1.5-11.9-1.9c-2.4-3.5-5-6.6-7.5-9.4
             c0.7-0.6,1.3-1.3,2-1.9C712.4,784.3,718.5,782.1,721.3,783.7z"/>
           <path className="st2" d="M701.1,810.9c4.4,0,7.9,3.5,7.9,7.9c0,4.4-3.5,7.9-7.9,7.9c-4.4,0-7.9-3.5-7.9-7.9
             C693.2,814.4,696.7,810.9,701.1,810.9z"/>
           <circle className="st1" cx="1080.2" cy="816.6" r="84.7"/>
           <path className="st4" d="M1056.7,818.3c-0.1,0.1-0.2,0.4-0.4,1c-0.2,0.6-0.4,1.2-0.7,2.1c-0.3,0.8-0.5,1.8-0.8,2.8
             c-0.3,1-0.6,2.1-0.9,3.1c-0.3,1.1-0.6,2.1-0.9,3.1c-0.3,1-0.6,1.9-0.8,2.8c-0.2,0.8-0.4,1.5-0.6,2.1c-0.2,0.6-0.3,0.9-0.3,1
             c-0.1,0.3-0.2,0.7-0.4,1.1c-0.2,0.4-0.4,0.8-0.7,1.1c-0.3,0.4-0.5,0.7-0.9,0.9c-0.3,0.2-0.6,0.4-1,0.4c-0.6,0-1-0.2-1.2-0.6
             c-0.3-0.4-0.4-1.1-0.4-2v-0.4c0-0.1,0-0.3,0-0.5c0-0.3,0.2-1,0.4-1.9c0.2-0.9,0.5-1.9,0.9-3.1c0.3-1.1,0.7-2.3,1.1-3.6
             c0.4-1.2,0.8-2.3,1.1-3.3c-0.9,1-1.9,2.1-3,3.1c-1.1,1-2.2,1.9-3.3,2.8c-1.1,0.8-2.3,1.5-3.4,2c-1.2,0.5-2.3,0.8-3.3,0.8
             c-1.2,0-2.3-0.3-3.2-0.8c-0.9-0.5-1.6-1.2-2.2-2.1c-0.6-0.9-1-1.8-1.3-2.9c-0.3-1.1-0.4-2.2-0.4-3.3v-0.4c0-0.1,0-0.2,0-0.4
             c0.1-2,0.4-4,0.8-6.1c0.5-2.1,1.1-4.2,1.8-6.2c0.8-2.1,1.6-4.1,2.6-6.1c1-2,2.1-3.8,3.2-5.6c1.2-1.8,2.4-3.4,3.7-4.9
             c1.3-1.5,2.7-2.8,4-3.8c1.4-1.1,2.8-1.9,4.2-2.5c1.4-0.6,2.8-0.9,4.2-0.9c1.6,0,3.1,0.4,4.6,1.3s2.9,2.3,4.2,4.2
             c0.3,0.4,0.5,0.9,0.6,1.3c0.1,0.4,0.1,0.9,0.1,1.3c0,0.9-0.2,1.7-0.7,2.2c-0.5,0.5-1,0.8-1.6,0.8c-0.6,0-1.1-0.3-1.6-0.9
             c-0.5-0.6-1-1.4-1.6-2.5c-0.6-1-1.2-1.7-1.8-2.2c-0.7-0.4-1.4-0.7-2.2-0.7c-1.2,0-2.5,0.5-3.9,1.5c-1.4,1-2.8,2.4-4.1,4
             c-1.4,1.7-2.7,3.6-3.9,5.7c-1.3,2.1-2.4,4.3-3.3,6.6c-1,2.2-1.7,4.5-2.3,6.6c-0.6,2.2-0.9,4.1-0.9,5.9c0,0.6,0,1.2,0.1,1.8
             c0.1,0.6,0.2,1.2,0.5,1.7c0.2,0.5,0.5,0.9,0.9,1.2c0.4,0.3,0.8,0.5,1.4,0.5c0.6,0,1.4-0.2,2.2-0.7c0.8-0.4,1.7-1,2.5-1.7
             c0.9-0.7,1.8-1.5,2.7-2.4s1.7-1.8,2.5-2.7c0.8-0.9,1.5-1.8,2-2.6c0.6-0.8,1-1.6,1.3-2.2l2.4-7.3c0.3-0.8,0.7-1.3,1.2-1.7
             c0.5-0.3,1-0.5,1.5-0.5c0.2,0,0.5,0,0.7,0.1c0.3,0.1,0.5,0.2,0.7,0.4c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,1
             c0,1-0.1,1.9-0.3,2.8c-0.2,0.9-0.4,1.7-0.7,2.5c-0.3,0.8-0.6,1.7-0.9,2.5C1057.3,816.5,1057,817.3,1056.7,818.3z M1089.7,824.3
             c-0.8,1-1.7,2-2.7,3c-1,1-2.1,1.9-3.2,2.6c-1.1,0.8-2.1,1.4-3.2,1.8c-1.1,0.5-2,0.7-2.8,0.7c-0.8,0-1.5-0.3-2-0.8
             c-0.5-0.6-0.8-1.5-0.8-2.9c0-1,0.1-2.1,0.4-3.3c-0.5,0.8-1,1.6-1.7,2.5c-0.7,0.8-1.5,1.6-2.3,2.3c-0.9,0.7-1.8,1.2-2.9,1.7
             c-1.1,0.4-2.3,0.6-3.5,0.6c-0.6,0-1.1-0.1-1.7-0.2c-0.5-0.1-1-0.4-1.4-0.7c-0.4-0.4-0.7-0.8-1-1.4c-0.2-0.6-0.4-1.3-0.4-2.2
             c0,0,0-0.3,0.1-0.9c0.1-0.6,0.3-1.6,0.7-2.9s1-3,1.7-5.1c0.8-2.1,1.9-4.6,3.3-7.6c0.4-0.8,0.8-1.3,1.3-1.7c0.5-0.3,1-0.5,1.6-0.5
             c0.2,0,0.5,0,0.8,0.1c0.3,0.1,0.5,0.2,0.7,0.3c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.2,0.2,0.5,0.2,0.8c0,0.2,0,0.4-0.1,0.6
             c-0.1,0.4-0.3,0.8-0.6,1.4s-0.6,1.2-1,2c-0.4,0.7-0.8,1.5-1.2,2.4c-0.4,0.8-0.8,1.7-1.2,2.6c-0.4,0.9-0.7,1.8-0.9,2.8
             c-0.3,0.9-0.4,1.9-0.4,2.7c0,0.4,0.1,0.7,0.3,1c0.2,0.3,0.5,0.5,0.9,0.5c1.1,0,2.2-0.4,3.3-1.1c1-0.7,2-1.7,2.8-2.8
             c0.9-1.1,1.7-2.3,2.4-3.6c0.7-1.3,1.3-2.4,1.8-3.5c0.3-0.7,0.6-1.5,0.9-2.3c0.3-0.8,0.5-1.5,0.8-2.2c0.3-0.7,0.6-1.3,1-1.7
             c0.4-0.5,0.9-0.7,1.4-0.7c0.6,0,1.1,0.2,1.5,0.7c0.4,0.5,0.6,1,0.6,1.7c0,0.4-0.1,0.9-0.3,1.5c-0.2,0.7-0.5,1.4-0.9,2.2
             c-0.4,0.8-0.8,1.7-1.2,2.7c-0.4,1-0.8,1.9-1.2,2.9c-0.4,1-0.6,1.9-0.9,2.9c-0.2,0.9-0.3,1.8-0.3,2.6c0,0.7,0.4,1.1,1.2,1.1
             c0.5,0,1.2-0.2,2-0.6c0.8-0.4,1.6-0.9,2.5-1.6c0.9-0.7,1.8-1.5,2.7-2.4c0.9-0.9,1.7-1.9,2.3-2.9L1089.7,824.3z"/>
           <path className="st4" d="M1090.5,822.8c-0.2,0.5-0.4,1-0.6,1.7c-0.2,0.6-0.3,1.2-0.3,1.7c0,0.3,0.1,0.6,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3
             c0.4,0,0.8-0.1,1.4-0.4c0.5-0.3,1.1-0.6,1.8-1c0.6-0.4,1.3-0.9,2-1.5c0.7-0.5,1.4-1.1,2-1.7c0.7-0.6,1.3-1.2,2-1.8
             c0.6-0.6,1.2-1.1,1.7-1.6c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.5-0.1c0.4,0,0.6,0.1,0.9,0.4c0.2,0.3,0.3,0.7,0.3,1.1
             c0,0.4-0.1,0.9-0.4,1.5c-0.3,0.5-0.7,1.1-1.3,1.6c-1.1,1.2-2.3,2.4-3.4,3.5c-1.1,1.1-2.3,2.1-3.4,2.9c-1.1,0.8-2.2,1.5-3.3,2
             c-1.1,0.5-2.2,0.7-3.2,0.7c-0.7,0-1.3-0.1-1.8-0.3c-0.5-0.2-0.9-0.5-1.2-0.9c-0.3-0.4-0.5-0.9-0.6-1.4c-0.1-0.5-0.2-1.1-0.2-1.7
             c0-1,0.1-2.1,0.4-3.1c0.3-1.1,0.5-2,0.9-2.9c0.6-1.6,1.2-3.2,1.9-4.8s1.2-3,1.7-4.4l7.9-20c0.3-0.8,0.7-1.4,1.3-1.7
             c0.5-0.3,1.1-0.5,1.6-0.5c0.5,0,1,0.2,1.5,0.5c0.5,0.3,0.7,0.9,0.7,1.7c0,0.4-0.1,0.8-0.2,1.2c-0.2,0.4-0.3,0.9-0.6,1.3
             c-0.4,1-0.9,2.2-1.5,3.6c-0.6,1.4-1.3,2.9-1.9,4.6c-0.7,1.7-1.4,3.4-2.1,5.2c-0.7,1.8-1.4,3.5-2.1,5.2c-0.7,1.7-1.3,3.3-1.9,4.8
             C1091.4,820.3,1090.9,821.7,1090.5,822.8z"/>
           <path className="st4" d="M1127.6,817.2c0.3-0.2,0.5-0.3,0.7-0.4c0.2-0.1,0.4-0.2,0.6-0.2c0.4,0,0.7,0.2,0.9,0.5c0.2,0.3,0.3,0.8,0.3,1.3
             c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.6-0.6,1-1.1,1.4c-1.9,1.7-3.5,3.2-5,4.5c-1.5,1.4-2.8,2.5-4.2,3.5c-1.3,1-2.6,1.7-3.8,2.3
             c-1.2,0.5-2.6,0.8-4,0.8c-1.3,0-2.3-0.3-3.1-0.9c-0.7-0.6-1.1-1.4-1.1-2.4v-0.2c0-0.1,0-0.2,0-0.3c0.1-0.6,0.3-1.3,0.8-2.1
             c0.5-0.8,1-1.6,1.7-2.5c0.7-0.9,1.4-1.7,2.1-2.6s1.4-1.7,2.1-2.5c0.6-0.8,1.2-1.5,1.6-2.2c0.4-0.7,0.6-1.2,0.6-1.6
             c0-0.2-0.1-0.4-0.3-0.6c-0.2-0.1-0.5-0.2-0.9-0.2c-0.7,0-1.4,0.2-2.2,0.5c-0.8,0.4-1.5,0.8-2.2,1.5c-0.7,0.6-1.4,1.3-2.1,2.1
             c-0.7,0.8-1.3,1.6-1.9,2.5c-0.6,0.9-1.2,1.7-1.7,2.6c-0.5,0.9-0.9,1.6-1.3,2.4c-0.1,0.2-0.3,0.6-0.4,1c-0.2,0.4-0.4,0.9-0.6,1.4
             c-0.2,0.5-0.5,1-0.7,1.6c-0.3,0.5-0.5,1.1-0.7,1.5c-0.2,0.5-0.4,0.9-0.6,1.3c-0.2,0.4-0.3,0.6-0.4,0.8c-0.1,0.2-0.2,0.5-0.4,1.1
             c-0.2,0.5-0.4,1.1-0.7,1.8c-0.3,0.7-0.5,1.4-0.8,2.2c-0.3,0.8-0.6,1.5-0.8,2.2s-0.5,1.3-0.7,1.8c-0.2,0.5-0.3,0.9-0.4,1.1
             c-0.2,0.5-0.4,1-0.6,1.5c-0.2,0.5-0.5,0.9-0.8,1.3c-0.3,0.4-0.7,0.7-1,0.9c-0.4,0.2-0.8,0.3-1.3,0.3c-0.6,0-1.2-0.2-1.6-0.4
             c-0.4-0.3-0.6-0.9-0.6-1.7c0-0.4,0.1-0.8,0.2-1.3c0.1-0.4,0.2-0.9,0.4-1.3c0.2-0.4,0.3-0.8,0.5-1.2c0.2-0.4,0.3-0.8,0.5-1.2
             c0.9-2.1,1.9-4.1,2.9-6.2c1-2.1,1.9-4.1,2.8-6.2c0.9-2,1.7-4,2.5-6c0.8-2,1.4-3.8,1.9-5.6c0.1-0.4,0.3-0.9,0.6-1.6
             c0.2-0.7,0.5-1.4,0.8-2c0.3-0.7,0.7-1.2,1.1-1.7c0.4-0.5,0.8-0.7,1.3-0.7c0.7,0,1.2,0.2,1.5,0.5c0.3,0.3,0.5,0.8,0.5,1.4
             c0,0.1,0,0.3-0.1,0.6c0,0.3-0.1,0.6-0.1,0.9c-0.1,0.3-0.1,0.6-0.2,0.9c-0.1,0.3-0.1,0.5-0.2,0.6c0.6-0.7,1.3-1.4,2.1-2.1
             c0.8-0.7,1.5-1.3,2.3-1.9c0.8-0.6,1.6-1,2.5-1.4c0.8-0.4,1.7-0.5,2.5-0.5c0.6,0,1.1,0.1,1.7,0.2c0.6,0.2,1.1,0.4,1.5,0.7
             c0.4,0.3,0.8,0.7,1.1,1.2c0.3,0.5,0.4,1,0.4,1.7c0,0.8-0.2,1.8-0.6,2.7c-0.4,1-1,1.9-1.6,2.9s-1.3,1.9-2.1,2.8
             c-0.8,0.9-1.5,1.8-2.1,2.5c-0.7,0.8-1.2,1.4-1.7,1.9c-0.5,0.5-0.7,0.9-0.7,1.1c0,0.2,0.1,0.4,0.2,0.6c0.2,0.2,0.4,0.2,0.8,0.2
             c0.3,0,0.7-0.2,1.3-0.5c0.6-0.3,1.4-0.9,2.4-1.7c1-0.8,2.4-1.9,4-3.3C1123.3,821,1125.2,819.3,1127.6,817.2z"/>
           </svg>
            </div>
          </div>
        </div>
      </div>


      <div id="features" className="features">
        <div className="container-m">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="features-intro">
                <h2>Plus d’informations sur ma méthodologie de travail</h2>
                <p>We’ll Deliver the best stories and ideas on the topics you care about most straight to your
                  homepage, app, or inbox. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p1.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>Explorer</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p2.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>01 Cadrer</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p3.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>02 Imaginer</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p4.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>03 Designer</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p5.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>04 Tester</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-list">
                <div className="card-icon">
                  <div className="card-img">
                    <img src="assets/icons/p6.png" width="60" alt="Feature"/>
                  </div>
                </div>
                <div className="card-text">
                  <h3>05 Deployer</h3>
                  <p>Deliver the best stories and ideas on the topics you care about most straight to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="pricing-intro">
                <h1>Mes projets actifs</h1>
                <p>
                  Our plans are designed to meet the requirements of both beginners and players.
                  Get the right plan that suits you.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="table-left">
                    <h3>Limited Freemium</h3>
                    <p>Free limited features</p>
                    <div className="pricing-details">
                      <span>Free</span>
                    </div>
                    <button className="btn btn-primary btn-action" type="button">Download</button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="table-right">
                    <h3>Subscription</h3>
                    <p>Unlimited Lifetime</p>

                    <div className="pricing-details">
                      <span>$99.99</span>
                    </div>
                    <button className="btn btn-primary btn-action btn-white" type="button">Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="table-left">
                    <h3>Limited Freemium</h3>
                    <p>Free limited features</p>
                    <div className="pricing-details">
                      <span>Free</span>
                    </div>
                    <button className="btn btn-primary btn-action" type="button">Download</button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="table-right">
                    <h3>Subscription</h3>
                    <p>Unlimited Lifetime</p>

                    <div className="pricing-details">
                      <span>$99.99</span>
                    </div>
                    <button className="btn btn-primary btn-action btn-white" type="button">Subscribe</button>
                  </div>
                </div>
              </div>
              <p className="refund-txt">* Refund requests can be placed with in 7 days of the purchase</p>
            </div>
          </div>
        </div>
      </div>

    


      <div id="reviews" className="yd-reviews">
       
        <div className="container-s">
          <div className="row text-center">
            <div className="col-sm-12 col-lg-8 offset-lg-2">
              <div className="intro">
                <h1>Served our best for the awesome clients</h1>
                <p>We have very fair pricing policy that would benefit you and us at the same time.
                  Get the free plan &amp; if you need more - pay.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-12 text-center">
              <div className="review-cards owl-carousel owl-theme">
                <div className="card-single">
                  <div className="review-text">
                    <h1>"Étant toujours prêt à relever de nouveaux défis, Gabriel a su se démarquer dans le domaine du
                      web. Sa créativité, son implication et sa grande capacité à résoudre les problèmes font de lui un
                      excellent développeur avec beaucoup de potentiel."
                    </h1>
                  </div>
                  <div className="review-attribution">
                    <div className="review-img">
                      <img className="img-fluid rounded-circle" src="assets/icons/review-1.png" alt="Review"/>
                    </div>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-ios-star-half"></i>
                    <h2>Samuel Faucher</h2>
                    <h6>Web Developer</h6>
                    <a href="https://www.linkedin.com/in/samuel-faucher-857879182/">Linkedin</a>
                  </div>
                </div>
                <div className="card-single">
                  <div className="review-text">
                    <h1>"Gabriel aime comprendre le fonctionnement d'un système et d'un langage. Quand il a compris, il
                      l'exploite jusqu'au bout. Il est travailleur, et a une expérience avec la clientèle."
                    </h1>
                  </div>
                  <div className="review-attribution">
                    <div className="review-img">
                      <img className="img-fluid rounded-circle" src="assets/icons/review-2.png" alt="Review"/>
                    </div>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-ios-star-half"></i>
                    <h2>David Lelièvre</h2>
                    <h6>UI/UX Designer</h6>
                    <a href="https://www.linkedin.com/in/david-leli%C3%A8vre-276b9517a/">Linkedin</a>
                  </div>
                </div>
                <div className="card-single">
                  <div className="review-text">
                    <h1>"Gabriel est bourré de talent et c’est un individu qui fait preuve de beaucoup de résilience.
                      Ceci fait en sorte qu'il réussit toujours à trouver des moyens nécessaires pour résoudre les
                      problèmes amenés par les différents projets. C’est également quelqu’un de travaillant, qui sait
                      mettre les heures nécessaires à la réalisation d’un travail."
                    </h1>
                  </div>
                  <div className="review-attribution">
                    <div className="review-img">
                      <img className="img-fluid rounded-circle" src="./assets/icons/review-3.png" alt="Review"/>
                    </div>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <i className="ion ion-star"></i>
                    <h2>Patrick Boies</h2>
                    <h6>Web Developer</h6>
                    <a href="https://www.linkedin.com/in/pboies/">Linkedin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     







      <div id="contact" className="cta-sm">
        <div className="container-m text-center">
          <div className="cta-content">
            <h4>WHAT ARE YOU WAITING FOR?</h4>
            <h1>Start now and turn your online business into a profitable route.</h1>
            <a id="contact-form" className="btn-action" href="#">Get Started now</a>
          </div>
        </div>
      </div>


      
      <div className="footer-sm">
        <div className="container-m">
          <div className="row">
            <div className="col-md-4">
              <a className="footer-logo" href="#">Pelican.</a>
            </div>
            <div className="col-md-4">
              <h6>&copy; IOThemes 2018 Rights Reserved</h6>
            </div>
            <div className="col-md-4">
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    
       <div id="back-top" className="bk-top">
        <div className="bk-top-txt">
          <a className="back-to-top js-scroll-trigger" href="#main">Up</a>
        </div>
      </div> 
     

    </div> 
    </div>
    
  );
}

export default App;
