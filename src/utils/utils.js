import {REGISTRATION_YEAR} from '../variables/variables'

export function getGroupsUsers(payload) {
    const groupsUsers = {};
    for (const user of payload) {
        const currentGroup = "UpTo" + Math.ceil((user.registered.age / REGISTRATION_YEAR))
        if ( !groupsUsers[currentGroup]) {
            groupsUsers[currentGroup] = []
        }
        groupsUsers[currentGroup].push(user)
    }
    return groupsUsers
}