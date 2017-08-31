jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockLabels from 'labels'
import { createnewLabels } from './labels'

const mockLabels = new MockLabels()
const labels = {
    id: "123a",
    name: "xxx",
    color: "red",
    uses: "10",
    idBoard: "456z"
}

test('new labels', async () => {
    const send = {
        id: "123a",
        name: "xxx",
        color: "red",
        uses: "10",
        idBoard: "456z"
    }
    const labelsNew = undefined
    const receive = await createnewLabels(mockLabels,labelsNew, send)
    const callRec = mockLabels.getCreate()
    expect(callRec.length).toEqual(1)
});

test('update name', async() => {
    const send = {
        id: "123a",
        name: "yyy",
        color: "red",
        uses: "10",
        idBoard: "456z"
    }
    const receive = await createnewLabels(mockLabels,labels, send)
    const callRec = mockLabels.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update color', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        color: "blue",
        uses: "10",
        idBoard: "456z"
    }
    const receive = await createnewLabels(mockLabels,labels, send)
    const callRec = mockLabels.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update name', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        color: "red",
        uses: "15",
        idBoard: "456z"
    }
    const receive = await createnewLabels(mockLabels,labels, send)
    const callRec = mockLabels.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
    const send = {
        id: "123a",
        name: "yyy",
        color: "blue",
        uses: "15",
        idBoard: "456z"
    }
    const receive = await createnewLabels(mockLabels,labels, send)
    const callRec = mockLabels.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have labels already', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        color: "red",
        uses: "10",
        idBoard: "456z"
    }
    const rec = await createnewLabels(mockLabels,labels, send)
    expect(rec).toBe(false)
})

