jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockDateActionCards from 'dateActionCards'
import { createnewDateActionCards } from '../controller/dateActionCards'

const mockDateActionCards = new MockDateActionCards()
const dateActionCards = {
  date: "2017-07-16T08:16:38.033Z",
  dateString: "2017-07-16-0",
  countBack: 5,
  countInpr: 2,
  countComp: 1,
  idDashboard: "a1"
}

test('new dateActionCards', async () => {
  const send = {
    date: "2017-07-16T08:16:38.033Z",
    dateString: "2017-07-16-0",
    countBack: 5,
    countInpr: 2,
    countComp: 1,
    idDashboard: "a1"
  }
  const dateActionCardsNew = undefined
  const receive = await createnewDateActionCards(mockDateActionCards, send, dateActionCardsNew)
  const callRec = mockDateActionCards.getCreate()
  expect(callRec.length).toEqual(1)
})

test('update countBack', async() => {
    const send = {
      date: "2017-07-16T08:16:38.033Z",
      dateString: "2017-07-16-0",
      countBack: 7,
      countInpr: 2,
      countComp: 1,
      idDashboard: "a1"
    }
    const receive = await createnewDateActionCards(mockDateActionCards, send, dateActionCards)
    const callRec = mockDateActionCards.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update countInpr', async() => {
  const send = {
    date: "2017-07-16T08:16:38.033Z",
    dateString: "2017-07-16-0",
    countBack: 5,
    countInpr: 3,
    countComp: 1,
    idDashboard: "a1"
  }
  const receive = await createnewDateActionCards(mockDateActionCards, send, dateActionCards)
  const callRec = mockDateActionCards.getUpdate()
  expect(callRec[0]).toEqual(send)
})

test('update countComp', async() => {
  const send = {
    date: "2017-07-16T08:16:38.033Z",
    dateString: "2017-07-16-0",
    countBack: 5,
    countInpr: 2,
    countComp: 3,
    idDashboard: "a1"
  }
  const receive = await createnewDateActionCards(mockDateActionCards, send, dateActionCards)
  const callRec = mockDateActionCards.getUpdate()
  expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
  const send = {
    date: "2017-07-16T08:16:38.033Z",
    dateString: "2017-07-16-0",
    countBack: 7,
    countInpr: 3,
    countComp: 3,
    idDashboard: "a1"
  }
  const receive = await createnewDateActionCards(mockDateActionCards, send, dateActionCards)
  const callRec = mockDateActionCards.getUpdate()
  expect(callRec[0]).toEqual(send)
})

test('have dateActionCards already', async() => {
  const send = {
    date: "2017-07-16T08:16:38.033Z",
    dateString: "2017-07-16-0",
    countBack: 5,
    countInpr: 2,
    countComp: 1,
    idDashboard: "a1"
  }
    const rec = await createnewDateActionCards(mockDateActionCards, send, dateActionCards)
    expect(rec).toBe(false)
})

