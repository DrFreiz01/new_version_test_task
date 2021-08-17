export function getGroupsUsers(payload) {
    let GroupsUsers = {};
    for (const user of payload) {
        GroupsUsers["UpTo" + Math.ceil((user.registered.age / 10))].push(user)
    }
    // return GroupsUsers
    console.log(GroupsUsers)
}