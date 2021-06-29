import React, {useState,useEffect} from 'react'
import Userlayout from './userlayout'
import {setData,getData} from './helper'

function Users(){

    const initUser = {Name:'', EmailID:'', Address:'', Department:'', Age:'', Sex:'Male'}
    const [User, setUser] = useState(initUser)
    const [Users, setUsers] = useState( getData({name:'Users'}) )
    const [Action,setAction] = useState({Type:'',ID:''})

    const HandleAction = (Action,ID)=>{
        if(Action==='Add'){
            setUser(initUser)
            setAction({Type:Action,ID:ID})
        } else if(Action==='Edit'){
            setUser(Users.find(user => user.ID === ID))
            setAction({Type:Action,ID:ID})
        } else if(Action==='Delete'){
            setUsers(Users.filter(row=>row.ID!==ID))
        } else {
            setAction({Type:Action,ID:ID})
        }
    }

    useEffect(()=>{
        setData({name:'Users',users:Users});
    },[Users])

    const  HandelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        let tObj = {}
        if(Action.Type==='Add'){
            tObj.ID = Math.random()
        }        
        for (let name of data.keys()) {                    
          const input = form.elements[name];
          if(input.type===undefined){
                tObj[name] = input.value
          } else {
                tObj[input.name] = input.value
          }          
          input.value = ''
        }
        if(Action.Type==='Add'){
            setUsers(prevState => [...prevState,tObj] )
        } else {
            const tNewUsers = Users.map((item) => {
                if (item.ID ===  Action.ID) {
                  return tObj;
                }         
                return item;
              });
              setUsers(tNewUsers)
        }
        
        setAction({Type:'',ID:''});
    }

    return (
        <div className="Users">
            <Userlayout Users={Users} 
                        User={User}
                        Action={Action}
                        HandleAction={HandleAction}
                        handelSubmit={HandelSubmit}
            />
        </div>
    )
}

export default Users