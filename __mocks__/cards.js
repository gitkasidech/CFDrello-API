import Promise from 'bluebird'

export default class MockCards {
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
            updateItem[0].name = objUpdate['$set'].name
            updateItem[0].idList = objUpdate['$set'].idList
            updateItem[0].idMembers = objUpdate['$set'].idMembers
            updateItem[0].idLabels = objUpdate['$set'].idLabels
            this.recordsUpdate.push(updateItem[0])
            resolve()
        })
    }
    getUpdate(){
        return this.recordsUpdate
    }
}