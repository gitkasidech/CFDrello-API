jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockLists from 'lists'
import { createnewLists } from '../controller/lists'

const mockLists = new MockLists()
const lists = {
    id: "123x",
    name: "xxx",
    idBoard: "456y"
}

test('new lists', async () => {
    const send = {
        id: "123x",
        name: "xxx",
        idBoard: "456y"
    }
    const listsNew = undefined
    const receive = await createnewLists(mockLists,listsNew, send)
    const callRec = mockLists.getCreate()
    expect(callRec.length).toEqual(1)
});

test('update name', async() => {
    const send = {
        id: "123x",
        name: "aaa",
        idBoard: "456y"
    }
    const receive = await createnewLists(mockLists,lists, send)
    const callRec = mockLists.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have lists already', async() => {
    const send = {
        id: "123x",
        name: "xxx",
        idBoard: "456y"
    }
    const rec = await createnewLists(mockLists,lists, send)
    expect(rec).toBe(false)
});

