user1 = {
    nama: 'Andi',
    umur: 24
}
user2 = {
    nama: 'Budi',
    umur: 25
}
user3 = {
    nama: 'Dedi',
    umur: 26
}

failed404 = {
    status: 'not found',
    message: 'resources not found'
}

failed405 = {
    status: 'not allowed',
    message: 'method not allowed'
}

module.exports = {
    users: [user1, user2, user3],
    failed404: failed404,
    failed405: failed405
}