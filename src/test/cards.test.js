jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockCards from 'cards'
import { createnewCards } from '../controller/cards'

const mockCards = new MockCards()
const cards = {
    id: "123a",
    name: "xxx",
    idBoard: "456z",
    idList: "789s",
    idMembers: ["1a","2b"],
    idLabels: ["a1","b2"]
}

test('new cards', async () => {
    const send = {
        id: "123a",
        name: "xxx",
        idBoard: "456z",
        idList: "789s",
        idMembers: ["1a","2b"],
        idLabels: ["a1","b2"]
    }
    const cardsNew = undefined
    const receive = await createnewCards(mockCards,cardsNew, send)
    const callRec = mockCards.getCreate()
    expect(callRec.length).toEqual(1)
});

test('update name', async() => {
    const send = {
        id: "123a",
        name: "yyy",
        idBoard: "456z",
        idList: "789s",
        idMembers: ["1a","2b"],
        idLabels: ["a1","b2"]
    }
    const receive = await createnewCards(mockCards,cards, send)
    const callRec = mockCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update idList', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        idBoard: "456z",
        idList: "789t",
        idMembers: ["1a","2b"],
        idLabels: ["a1","b2"]
    }
    const receive = await createnewCards(mockCards,cards, send)
    const callRec = mockCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update idMembers', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        idBoard: "456z",
        idList: "789s",
        idMembers: ["111a","222b"],
        idLabels: ["a1","b2"]
    }
    const receive = await createnewCards(mockCards,cards, send)
    const callRec = mockCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update idLabels', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        idBoard: "456z",
        idList: "789s",
        idMembers: ["1a","2b"],
        idLabels: ["a111","b222"]
    }
    const receive = await createnewCards(mockCards,cards, send)
    const callRec = mockCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
    const send = {
        id: "123a",
        name: "yyy",
        idBoard: "456z",
        idList: "789t",
        idMembers: ["111a","222b"],
        idLabels: ["a111","b222"]
    }
    const receive = await createnewCards(mockCards,cards, send)
    const callRec = mockCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have cards already', async() => {
    const send = {
        id: "123a",
        name: "xxx",
        idBoard: "456z",
        idList: "789s",
        idMembers: ["1a","2b"],
        idLabels: ["a1","b2"]
    }
    const rec = await createnewCards(mockCards,cards, send)
    expect(rec).toBe(false)
})

