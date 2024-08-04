import React, { Component } from "react";
import { Navbar } from "../../componets-libary/navbar";


export class Shop extends React.Component{
constructor(){
    super();

}
render(){
    return(
        <div className="container-fluid">
           <Navbar theme='bg-warning' BrandTitle='Shopper.' MenuItems={["home","shop","kids","men"]}></Navbar>
           <Navbar BrandTitle="Trainnig Online" MenuItems={["Home","Details","Courses"]}/>
        </div>
    )
}
}