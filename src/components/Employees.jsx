import { useState } from 'react'
import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const Employees = () => {

    const [selectedTeam, setTeam] = useState('TeamA')

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }
    ])

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
        <main className='container'>

            <div className='selectTeam'>
                <select value={selectedTeam} onChange={handleTeamChange}>
                    <option value='TeamA'>Team A</option>
                    <option value='TeamB'>Team B</option>
                    <option value='TeamC'>Team C</option>
                    <option value='TeamD'>Team D</option>
                </select>
            </div>

            {
                employees.map((emp) => (
                    <div className={(emp.teamName === selectedTeam ? 'member' : 'notMember')} id={emp.id} onClick={handleEmployeeClick}>
                        {(emp.gender === 'male') ? <img src={maleProfile}/> : <img src={femaleProfile}/>}
                        <div className='card-info'>
                            <h5>Full Name: {emp.fullName}</h5>
                            <p>Designation: {emp.designation}</p>
                        </div>
                    </div>
                ))
            }

        </main>
    )
}

export default Employees