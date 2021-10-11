import UserCard from "./UserCard";

export default function UsersGroups(props) {
    const cardsGroupsUsers = [];

    props.usersGroups.map((item) => {
        cardsGroupsUsers.push(<UserCard key={item.id} value={item}/>)
    })

    return (
        <div className='main__users-groups'>
            <div className='asd'>
                <p>{props.index}</p>
                {cardsGroupsUsers}
            </div>
        </div>
    )
}