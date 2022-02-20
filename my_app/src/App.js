import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import { MenuItems } from './components/MenuItems';
import { MenuData } from './components/MenuData';
import Lunch from './components/Lunch';
import ItemDetails from './components/ItemDetails';
import Dinner from './components/Dinner';
import { Route, BrowserRouter, Switch,Link } from "react-router-dom";


function App() {
    const [state, setState] = useState("");

    useEffect(() => {
        getToken();
    }, [])

    useEffect(() => {
        getCategory();
    }, [state])

    const getToken = async () => {
        axios.post("https://demo-api.nasj.io/token/O72Ebw1ro3")
            .then(res => {
                setState(res.data.token);
            })
            .catch(err => {
                console.log("error:")
            })

    }

    const getCategory = async () => {
        axios.get('https://demo-api.nasj.io/categories', {
            headers: {
                'x-auth-token': `${state}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <BrowserRouter>
            <div className="App w-147   m-auto h-731" >
                <Switch>
                    <Route exact path = "/">
                        <Home/>
                    </Route>
                   <Route path="/breakfast">
                       <Breakfast/>
                   </Route>
                   <Route path="/lunch">
                       <Lunch/>
                   </Route>
                   <Route path="/dinner">
                       <Dinner/>
                   </Route>
                   <Route path="itemdetails/:id">
                       <ItemDetails/>
                   </Route>
                </Switch>
            </div>
        </BrowserRouter>


    );
}

export default App;