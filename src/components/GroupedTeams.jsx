import { useState } from 'react'

const GroupedTeams = ({employees, selectedTeam, setTeam}) => {

    const [groupedMembers, setGroupedData] = useState(groupMembers())

    function groupMembers() {
        let teams = []

        let teamAMembers = employees.filter((emp) => emp.teamName === 'Team A')
        let teamA = { team: 'Team A', members: teamAMembers }
        teams.push(teamA)

        let teamBMembers = employees.filter((emp) => emp.teamName === 'Team B')
        let teamB = { team: 'Team B', members: teamBMembers }
        teams.push(teamB)

        let teamCMembers = employees.filter((emp) => emp.teamName === 'Team C')
        let teamC = { team: 'Team C', members: teamCMembers }
        teams.push(teamC)

        let teamDMembers = employees.filter((emp) => emp.teamName === 'Team D')
        let teamD = { team: 'Team D', members: teamDMembers }
        teams.push(teamD)

        return teams
    }

    return (
        <main className='teams-container'>
            {
                groupedMembers.map((item) => {
                    return (
                        <div className='team-card'>
                            <h3>{item.team}</h3>
                            <div>
                                {
                                    item.members.map((member) => {
                                        return (
                                            <div className='member-info'>
                                                <h4>{member.fullName}</h4>
                                                <p>{member.designation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeams