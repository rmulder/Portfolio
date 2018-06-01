import * as React from "react";


export interface NavbarProps { name: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export class ExpandButton extends React.Component<{}, {}>{
    render(){
        return  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    }
}


export class PortfolioNavbar extends React.Component<NavbarProps, {}> {
    render() {
        return  <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
                    <a href = "#" className="navbar-brand"> Lewis Foo </a>
                    <ExpandButton/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                    </div>
                </nav>;
    }
}