const Teams = ({selectedTeam, handleTeamChange}) => {
    return (
        <div className='selectTeam'>
                <select value={selectedTeam} onChange={handleTeamChange}>
                    <option value='Team A'>Team A</option>
                    <option value='Team B'>Team B</option>
                    <option value='Team C'>Team C</option>
                    <option value='Team D'>Team D</option>
                </select>
        </div>
    )
}

export default Teams