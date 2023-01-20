import React from "react";
import {Admin, Resource,  AppBar, Layout, UserMenu} from "react-admin";
import restProvider from "ra-data-simple-rest";
import CategoryList from "./CategoryList";
import CategoryCreate from "./CategoryCreate";
import CategoryEdit from "./CategoryEdit";
import EventList from "./EventList";
import EventCreate from "./EventCreate";
import EventEdit from "./EventEdit";
import authProvider from "./authProvider";
import MyLogoutButton from "./MyLogoutButton";
import AdminLogin from "./AdminLogin";

const MyUserMenu = () => <UserMenu><MyLogoutButton/></UserMenu>;
const MyAppBar = () =>  <AppBar UserMenu={<MyUserMenu/>}/>;
const MyLayout= (props) => <Layout{...props} appBar={MyAppBar}/>;


  
function AdminApp() {


    return (
    <Admin loginPage={AdminLogin} layout={MyLayout} dataProvider={restProvider("http://localhost:3000/api/v1")} authProvider={authProvider} >
        <Resource name='categories' list={CategoryList}
        create={CategoryCreate} edit={CategoryEdit}/>
        <Resource name='events' list={EventList}
        create={EventCreate} edit={EventEdit}/>
    </Admin>
    )
}

export default AdminApp;