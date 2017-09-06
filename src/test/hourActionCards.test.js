jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockHourActionCards from 'hourActionCards'
import { createnewHourActionCards } from '../controller/hourActionCards'
import { getYesterday } from '../controller/hourActionCards'

const mockHourActionCards = new MockHourActionCards()

const hourActionCards = {
    dateString: "2017-08-13-0",
    timeHour: 14,
    countBack: 23,
    countInpr: 5,
    countComp: 0,
    idDashboard: "a1"
}

test('new hourActionCards', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 23,
        countInpr: 5,
        countComp: 0,
        idDashboard: "a1"
    }
    const hourActionCardsNew = undefined
    const receive = await createnewHourActionCards(mockHourActionCards, send, hourActionCardsNew)
    const callRec = mockHourActionCards.getCreate()
    expect(callRec.length).toEqual(1)
})

test('update countBack', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 25,
        countInpr: 5,
        countComp: 0,
        idDashboard: "a1"
    }
    const receive = await createnewHourActionCards(mockHourActionCards, send, hourActionCards)
    const callRec = mockHourActionCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update countInpr', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 23,
        countInpr: 6,
        countComp: 0,
        idDashboard: "a1"
    }
    const receive = await createnewHourActionCards(mockHourActionCards, send, hourActionCards)
    const callRec = mockHourActionCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update countComp', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 23,
        countInpr: 5,
        countComp: 1,
        idDashboard: "a1"
    }
    const receive = await createnewHourActionCards(mockHourActionCards, send, hourActionCards)
    const callRec = mockHourActionCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 25,
        countInpr: 6,
        countComp: 1,
        idDashboard: "a1"
    }
    const receive = await createnewHourActionCards(mockHourActionCards, send, hourActionCards)
    const callRec = mockHourActionCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have hourActionCards already', async () => {
    const send = {
        dateString: "2017-08-13-0",
        timeHour: 14,
        countBack: 23,
        countInpr: 5,
        countComp: 0,
        idDashboard: "a1"
    }
    const rec = await createnewHourActionCards(mockHourActionCards, send, hourActionCards)
    expect(rec).toBe(false)
})


