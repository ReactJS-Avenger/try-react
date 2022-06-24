import React from "react";

const Table = ({data}) =>{
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                {
                    data?.map((value)=>(
                        <tr key={value?.id}>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;