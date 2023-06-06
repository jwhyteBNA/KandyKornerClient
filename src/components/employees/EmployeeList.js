import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { listEmployees } from "../ApiManager"
import { Employee } from "./Employee"
import "./employee.css"

export const EmployeeList = () => {
    const [ employees, setEmployees] = useState([])
    const navigate = useNavigate()

    const getAllEmployees = () => {
      listEmployees()
      .then((employeeArray) => {
          setEmployees(employeeArray)
      })
    }

    useEffect(
        () => {
           getAllEmployees()
        },
        []
    )

    return (<>
 <button onClick={() => navigate("/staff/create")}>Add Employee</button>

<h2>Staff List</h2>

   <article className="employees">
        {employees.map((employee) => 
        <Employee key={employee.id} 
        getAllEmployees={getAllEmployees}
        employeeObject={employee} />
)
}
      </article> 
    </>
  )}