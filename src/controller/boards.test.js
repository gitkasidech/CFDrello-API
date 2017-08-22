jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockBoards from 'boards'
import { createnewBoards } from './boards'

const mockBoards = new MockBoards()
const boards = {
    id: "123a",
    name: "xxx",
    labelNames: {
        "black" : "COOP",
        "pink" : "Handover protocal"
    }
}

test('new boards', async () => {
    const send = {
        id: "123a",
        name: "xxx",
        labelNames: {
            "black" : "COOP",
            "pink" : "Handover protocal"
        }
    }
    const boardsNew = undefined
    const receive = await createnewBoards(mockBoards,boardsNew, send)
    const callRec = mockBoards.getCreate()
    expect(callRec.length).toEqual(1)
});

test('update name', async() => {
    const send = {
        id: "123a",
        name: "aaa",
        labelNames: {
            "black" : "COOP",
            "pink" : "Handover protocal"
        }
    }
    const receive = await createnewBoards(mockBoards,boards, send)
    const callRec = mockBoards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update labelname', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        labelNames: {
            "black" : "XXXX",
            "pink" : "Handover protocal"
        }
    }
    const receive = await createnewBoards(mockBoards,boards, send)
    const callRec = mockBoards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
    const send = {
        id: "123a",
        name: "aaa",
        labelNames: {
            "black" : "XXXXX",
            "pink" : "Handover protocal"
        }
    }
    const receive = await createnewBoards(mockBoards,boards, send)
    const callRec = mockBoards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have boards already', async () => {   
    const send = {
        id: "123a",
        name: "xxx",
        labelNames: {
            "black" : "COOP",
            "pink" : "Handover protocal"
        }
    }
    const rec = await createnewBoards(mockBoards,boards, send)
    expect(rec).toBe(false)
});





