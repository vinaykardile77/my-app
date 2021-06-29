export const setData = props=>{
    localStorage.setItem(props.name,JSON.stringify(props.users));
}

export const getData = props=>{
    return localStorage.getItem(props.name) ? JSON.parse(localStorage.getItem(props.name)) : []; 
}
