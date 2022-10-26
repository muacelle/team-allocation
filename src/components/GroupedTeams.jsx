import { useState } from 'react'

const GroupedTeams = ({employees, selectedTeam, setTeam}) => {

    const [groupedMembers, setGroupedData] = useState(groupMembers())

    function groupMembers() {
        let teams = []

        let teamAMembers = employees.filter((emp) => emp.teamName === 'Team A')
        let teamA = { team: 'Team A', members: teamAMembers, collapsed: (selectedTeam === 'Team A' ? false : true) }
        teams.push(teamA)

        let teamBMembers = employees.filter((emp) => emp.teamName === 'Team B')
        let teamB = { team: 'Team B', members: teamBMembers, collapsed: (selectedTeam === 'Team B' ? false : true) }
        teams.push(teamB)

        let teamCMembers = employees.filter((emp) => emp.teamName === 'Team C')
        let teamC = { team: 'Team C', members: teamCMembers, collapsed: (selectedTeam === 'Team C' ? false : true) }
        teams.push(teamC)

        let teamDMembers = employees.filter((emp) => emp.teamName === 'Team D')
        let teamD = { team: 'Team D', members: teamDMembers, collapsed: (selectedTeam === 'Team D' ? false : true) }
        teams.push(teamD)

        return teams
    }

    return (
        <main>
            {
                groupedMembers.map((item) => {
                    return (
                        <div>
                            <h3>{item.team}</h3>
                            <div className={item.collapsed === true ? 'collapsed' : ''}>
                                {
                                    item.members.map((member) => {
                                        return (
                                            <div>
                                                <h4>{member.fullName}</h4>
                                                <p>Designation: {member.designation}</p>
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