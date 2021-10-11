import {INTERVAL_REGISTRATION_YEAR} from '../variables/variables';

export function getGroupsUsers(payload) {
    const groupsUsers = [];
    for (const user of payload) {
        const currentGroup = "UpTo" + Math.ceil((user.registered.age / INTERVAL_REGISTRATION_YEAR))
        if ( !groupsUsers[currentGroup]) {
            groupsUsers[currentGroup] = []
        }
        groupsUsers[currentGroup].push(getCurrentFieldsUser(user, currentGroup))
    }

    return groupsUsers
}

function getCurrentFieldsUser(user, currentGroup) {
    return ({
        'id': user.login.uuid,
        'full_name': (user.name.first + ' ' + user.name.last),
        'date': user.dob.date.split('T')[0].split('-').reverse().join("."),
        'email': user.email,
        'photo': user.picture.thumbnail,
        'group': currentGroup
    })
}