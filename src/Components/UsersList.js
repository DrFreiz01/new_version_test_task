import UserCard from "./UserCard";

export default function UsersList(props) {
    const cardsGroupsUsers = [];

    // for (let i in props.groupsUsers) {
    //     cardsGroupsUsers[i] = [];
    //     props.groupsUsers[i].map((item) => {
    //         cardsGroupsUsers[i].push(<UserCard value={item} />)
    //     })
    //
    // }

    for (let i in props.groupsUsers) {
        const usersCards = [];
        props.groupsUsers[i].map((item) => {
            usersCards.push(<UserCard key={item.id} value={item} />)
        })
        cardsGroupsUsers.push(
            <div id={i} className='asd'>
                <p>Группа до {i}</p>
                {usersCards}
            </div>
        )
    }

    return (
        <div className='main__lists__user-list'>

            <div className="main__lists__user-list__buttons">
                <a href="#UpTo2"><button>1</button></a>
                <button>2</button>
                <button>3</button>
            </div>
            {cardsGroupsUsers}
        </div>
    )
}