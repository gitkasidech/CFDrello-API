import Promise from 'bluebird'

export default class MockActions {
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
            updateItem[0].idMemberCreator = objUpdate['$set'].idMemberCreator
            updateItem[0].memberCreator = objUpdate['$set'].memberCreator
            updateItem[0].data = objUpdate['$set'].data
            updateItem[0].type = objUpdate['$set'].type
            updateItem[0].date = objUpdate['$set'].date
            updateItem[0].dateString = objUpdate['$set'].dateString
            this.recordsUpdate.push(updateItem[0])
            resolve()
        })
    }
    getUpdate(){
        return this.recordsUpdate
    }
}