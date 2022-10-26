import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const Employees = ({employees, selectedTeam, handleEmployeeClick, handleTeamChange}) => {
    return (

        <main className='container'>

            <div className='selectTeam'>
                <select value={selectedTeam} onChange={handleTeamChange}>
                    <option value='Team A'>Team A</option>
                    <option value='Team B'>Team B</option>
                    <option value='Team C'>Team C</option>
                    <option value='Team D'>Team D</option>
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