import { useState } from "react"
import { deleteEmployee, deleteUser } from "../ApiManager"

export const Employee = ({ employeeObject, getAllEmployees }) => {
    
const deleteButton = () => {
        return <button onClick={ () => {
            deleteEmployee(employeeObject)
            .then(() => {
             deleteUser(employeeObject)
            .then(() => {
                return getAllEmployees()
            })
            })
        }} className="employee__delete"> YOU'RE OUTTA HERE!</button>
    }

  return <section className="employee" key={`employee--${employeeObject.id}`}>
              <header>Employee Name: {employeeObject.user.fullName}</header>
              <div>Start Date:{employeeObject.startDate}</div>
              <div>Get Some Candy and Say Hi At: {employeeObject.location.address}</div>
              <footer className="employee__footer">
              {
    deleteButton()
}
</footer>
            </section>
}


