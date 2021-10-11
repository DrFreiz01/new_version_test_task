import UserCard from "./UserCard";
import UsersGroups from "./UsersGroups";

export default function UsersList(props) {
    const groups = [];

    for (let i in props.usersGroups) {
        groups.push(<UsersGroups usersGroups={props.usersGroups[i]} index={i}/>)
    }

    return (
        <div className='main__lists__user-list'>
            {/*<div className="main__lists__user-list__buttons">*/}
            {/*    <a href="#UpTo2"><button>1</button></a>*/}
            {/*    <button>2</button>*/}
            {/*    <button>3</button>*/}
            {/*</div>*/}
            {groups}
        </div>
    )
}