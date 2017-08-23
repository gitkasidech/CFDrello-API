jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockDashboards from 'dashboards'
import { createnewDashboards } from './dashboards'

const mockDashboards = new MockDashboards()



test('new dashboards', async() => {
    const send = {
        name: "a",
        idBoard: "1",
        listComp: ["a1","b1"],
        colorComp: "red",
        listInpr: ["c1"],
        colorInpr: "blue",
        listBack: ["d1"],
        colorBack: "gray",
        idMember: "x123"
    }
    const receive = await createnewDashboards(mockDashboards, send)
    const callRec = mockDashboards.getCreate()
    expect(callRec.length).toEqual(1)
})






