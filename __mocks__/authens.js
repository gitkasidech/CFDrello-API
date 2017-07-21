export default class MockAuthens {
    constructor(records = []) {
        this.records = records;
    }

    findOne({ idUser }) {
        return new Promise(resolve => resolve(this.records.find((item) => item.idUser == idUser)))
    }

    create(records = []) {
        this.records = records;
    }
}