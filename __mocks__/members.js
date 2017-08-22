import Promise from 'bluebird'

export default class MockMembers {
    constructor(records = []) {
        this.records = records
        this.recordsUpdate = []
    }

    create(data) {
        return new Promise(resolve => {
            this.records.push(data)
            resolve()
        })
    }
    getCreate(){
        return this.records
    }

    update({id},objUpdate) {
        return new Promise(resolve => {
            const updateItem = this.records
            updateItem[0].username = objUpdate['$set'].username
            updateItem[0].fullName = objUpdate['$set'].fullName
            updateItem[0].idBoards = objUpdate['$set'].idBoards
            this.recordsUpdate.push(updateItem[0])
            resolve()
        })
    }
    getUpdate(){
        return this.recordsUpdate
    }
}