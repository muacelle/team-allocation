import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Employees from './components/Employees'
import GroupedTeams from './components/GroupedTeams'
import Header from './components/Header'
import Nav from './components/Nav'
import NotFound from './components/NotFound'

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A')

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
      {
          id: 1,
          fullName: "Bob Jones",
          designation: "JavaScript Developer",
          gender: "male",
          teamName: "Team A"
      },
      {
          id: 2,
          fullName: "Jill Bailey",
          designation: "Node Developer",
          gender: "female",
          teamName: "Team A"
      },
      {
          id: 3,
          fullName: "Gail Shepherd",
          designation: "Java Developer",
          gender: "female",
          teamName: "Team A"
      },
      {
          id: 4,
          fullName: "Sam Reynolds",
          designation: "React Developer",
          gender: "male",
          teamName: "Team B"
      },
      {
          id: 5,
          fullName: "David Henry",
          designation: "DotNet Developer",
          gender: "male",
          teamName: "Team B"
      },
      {
          id: 6,
          fullName: "Sarah Blake",
          designation: "SQL Server DBA",
          gender: "female",
          teamName: "Team B"
      },
      {
          id: 7,
          fullName: "James Bennet",
          designation: "Angular Developer",
          gender: "male",
          teamName: "Team C"
      },
      {
          id: 8,
          fullName: "Jessica Faye",
          designation: "API Developer",
          gender: "female",
          teamName: "Team C"
      },
      {
          id: 9,
          fullName: "Lita Stone",
          designation: "C++ Developer",
          gender: "female",
          teamName: "Team C"
      },
      {
          id: 10,
          fullName: "Daniel Young",
          designation: "Python Developer",
          gender: "male",
          teamName: "Team D"
      },
      {
          id: 11,
          fullName: "Adrian Jacobs",
          designation: "Vue Developer",
          gender: "male",
          teamName: "Team D"
      },
      {
          id: 12,
          fullName: "Devin Monroe",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "Team D"
      }
  ])

  let teamMemberCount = (employees.filter((emp) => emp.teamName === selectedTeam)).length

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleTeamChange(event) {
      setTeam(event.target.value)
  }

  function handleEmployeeClick(event) {
      const transformedEmps = employees.map((emp) => 
          emp.id === parseInt(event.currentTarget.id) ? (emp.teamName === selectedTeam)
          ? {...emp, teamName: ''} : {...emp, teamName: selectedTeam} : emp
      )

      setEmployees(transformedEmps)
      console.log(employees)
  }

  return (
    <Router>

      <Nav/>
      <Header
      selectedTeam={selectedTeam}
      teamMemberCount={teamMemberCount}
      />

      <Routes>

        <Route 
        path='/' 
        element={
          <Employees 
          employees={employees}
          selectedTeam={selectedTeam}
          handleEmployeeClick={handleEmployeeClick}
          handleTeamChange={handleTeamChange}
          />
        }>
        </Route>

        <Route 
        path='/GroupedTeams' 
        element={<GroupedTeams/>}>
        </Route>

        <Route path='*'
        element={<NotFound/>}>
        </Route>

      </Routes>

    </Router>
  )
}

export default App