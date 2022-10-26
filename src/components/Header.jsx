const Header = ({selectedTeam, teamMemberCount}) => {

    return (
        <header>
            <h2>Team Member Allocation</h2>
            <h3>{selectedTeam} has {teamMemberCount} members.</h3>
        </header>
    )

}

export default Header