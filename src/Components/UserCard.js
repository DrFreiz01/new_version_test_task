export default function UserCard(props) {
    return (
        <div className='main__user-card'>
            <p>{props.value.full_name}</p>
        </div>
    )
}