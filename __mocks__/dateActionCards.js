import Promise from 'bluebird'

export default class MockDateActionCards {
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
    
    update({_id},objUpdate) {
        return new Promise(resolve => {
            const updateItem = this.records
            updateItem[0].countBack = objUpdate['$set'].countBack
            updateItem[0].countInpr = objUpdate['$set'].countInpr
            updateItem[0].countComp = objUpdate['$set'].countComp
            this.recordsUpdate.push(updateItem[0])
            resolve()
        })
    }
    getUpdate(){
        return this.recordsUpdate
    }
}