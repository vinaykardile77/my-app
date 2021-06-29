import React from 'react'
import {Departments, Sex} from './utility'

function UserFilters(props){
    console.log('UserFilters')
    return (
        <div className="filter">
            <table>
                <tbody>
                    <tr>
                        <td><span>Filters:</span></td>
                        <td></td>
                        <td>Search</td>
                        <td><input name='Search' type="text" value={props.Filters.Search} onChange={props.HandleFilters} /></td>
                        <td></td>
                        <td>Department</td>
                        <td>
                            <select name='Department' value={props.Filters.Department} onChange={props.HandleFilters}>
                            <Departments Text='All' />
                            </select>                     
                        </td>
                        <td></td>
                        <td>Sex</td>
                        <td>
                            <select name='Sex' value={props.Filters.Sex} onChange={props.HandleFilters}>
                                <Sex Text='All' />
                            </select>                    
                        </td>                
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(UserFilters)