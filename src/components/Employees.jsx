import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'
import Header from './Header'
import Teams from './Teams'

const Employees = ({employees, selectedTeam, handleEmployeeClick, handleTeamChange, teamMemberCount}) => {
    return (

        <main className='container'>

            <Header
            selectedTeam={selectedTeam}
            teamMemberCount={teamMemberCount}
            />

            <Teams
            selectedTeam={selectedTeam}
            handleTeamChange={handleTeamChange}
            />

            {
                employees.map((emp) => (
                    <div key={emp.id} className={(emp.teamName === selectedTeam ? 'member' : 'notMember')} id={emp.id} onClick={handleEmployeeClick}>
                        {(emp.gender === 'male') ? <img src={maleProfile}/> : <img src={femaleProfile}/>}
                        <div className='card-info'>
                            <h4>{emp.fullName}</h4>
                            <p>Designation: {emp.designation}</p>
                        </div>
                    </div>
                ))
            }

        </main>

    )
}

export default Employees