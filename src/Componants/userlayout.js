import React from 'react'
import UserList from './userslist'
import UserForm from './userform'

const PageHeader = () => {
    return <div className="page-title">User List</div>
}

function Userlayout(props){

    return (
        <>
            <PageHeader />
            {
                props.Action.Type==='' && <button className="btn-1" onClick={()=>props.HandleAction('Add','')}>Add New</button>
            }            
            {
                (props.Action.Type==='Add' || props.Action.Type==='Edit')  && <UserForm handelSubmit={props.handelSubmit} HandleAction={props.HandleAction} user={props.User} action={props.Action.Type} />
            }
            {   
                props.Action.Type==='' &&
                    <UserList 
                        Users={props.Users} 
                        HandleAction={props.HandleAction}
                        HandleFilters={props.HandleFilters}
                    />
            }
        </>
    )
}

export default Userlayout