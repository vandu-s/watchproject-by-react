import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (<>
    <nav className='menu'>  
    <NavLink exact activeClassName='active'   to='/'>Home</NavLink>
    <NavLink exact activeClassName='active' to='/about'>About</NavLink>
    <NavLink exact activeClassName='active' to='/contact'>Contact</NavLink>
    </nav>
    {/* <BrowserRouter>      
        <Menu/>
         <Switch>
             <Route exact path='/' component={()=><Home name='Home'/>}/>
             <Route   path='/about' render={()=><About name='About'/>}/>
             <Route exact path='/contact' render={()=><Contact name='Contact'/>}/>
             <Route  path='/contact/name' component={Name}/>
   
            <Route   component={Error}/>
        </Switch>
        </BrowserRouter> */}

    </>  );
}
 
export default Menu;