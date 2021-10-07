import UserCard from "./UserCard";

export default function UsersList(props) {
    console.log(props.groupsUsers)

    for (let i in props.groupsUsers) {
        props.groupsUsers[i].map((item, index) => {
                <UserCard value={item} />
        })
    }

    // for (let i = 1; i <  )

    console.log(props.groupsUsers)

    return (
        <div className='main__lists__user-list'>

        </div>
    )
}