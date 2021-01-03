import React from 'react';

const About = (props) => {
    return (<h1>This is {props.name} Page</h1> 
        // <BrowserRouter>
        // <Switch>
        //     <Route exact path='/' component={Home}/>
        //     <Route   path='/about' component={About}/>
        //     <Route exact path='/contact' component={Contact}/>
        //     <Route  path='/contact/name' component={Name}/>
   
        //     <Route   component={Error}/>
   
        // </Switch>
        // </BrowserRouter>
    );
}
 
export default About;