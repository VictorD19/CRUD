import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import PageNotFound from '../Pages/404';
import CreateUser from '../Pages/CreateUser';
import Crud from '../Pages/Crud'
import EditUser from '../Pages/EditarUser'

const Routers = () => {

    return(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={CreateUser}/>
            <Route path='/list'  component={Crud}/>
            <Route path='/edit'  component={EditUser}/>
            <Route path='*'  component={PageNotFound}/>
        </Switch>
    </BrowserRouter>);

}

export default Routers