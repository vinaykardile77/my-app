import React from 'react';
import ReactDOM from 'react-dom';

 export const Departments = React.memo(
 function  Departments(props){
    console.log('Departments')
    return (
        <>
            <option value="">{props.Text}</option>
            <option value="Accounts">Accounts</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Production">Production</option>
        </>
    );
})

export const Sex = React.memo(
    (props) => {
    console.log('Sex')
    return (
        <>
            <option value="">{props.Text}</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </>
    );
});

export const Module = (props)=>{
    return(
        ReactDOM.createPortal(
            <div className="popup">
                {props.children}
            </div>
            ,
            document.getElementById('module')
        )
    )
}