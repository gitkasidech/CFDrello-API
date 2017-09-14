jest.mock('../models', () => {})
import mongoose from 'mongoose'
import MockMembers from 'members'
import {createnewUser,checkreq} from '../controller/members'

const mockMembers = new MockMembers()
const user = {
    id: "001",
    username: "xxx",
    fullName: "yyy",
    token: "zzz",
    idBoards: ["123a", "456b"]
}

test('checkreq', () => {
    expect(checkreq({
        "token": "12345678"
    })).toBe(true);
    expect(checkreq({
        "id": "1"
    })).toBe(true);
    expect(checkreq({
        "username": "xxxxx"
    })).toBe(true);
    expect(checkreq({
        "app_id": "abc123"
    })).toBe(true);
    expect(checkreq({
        "idBoards": ["123a", "456b"]
    })).toBe(true);
    expect(checkreq({})).toBe(true);
    expect(checkreq({
        "id": "1",
        "username": "xxxxx",
        "app_id": "abc123",
        "idBoards": ["123a", "456b"],
        "token": "12345678"
    })) === (false);
})

test('new user', async() => {
    const send = {
        id: "001",
        username: "xxx",
        fullName: "yyy",
        token: "zzz",
        idBoards: ["123a", "456b"]
    }
    const userNew = undefined
    const receive = await createnewUser(mockMembers, userNew, send)
    const callRec = mockMembers.getCreate()
    expect(callRec.length).toEqual(1)
})

test('update username', async() => {
    const send = {
        id: "001",
        username: "aaa",
        fullName: "yyy",
        token: "zzz",
        idBoards: ["123a", "456b"]
    }
    const receive = await createnewUser(mockMembers, user, send)
    const callRec = mockMembers.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update fullName', async() => {
    const send = {
        id: "001",
        username: "xxx",
        fullName: "bbb",
        token: "zzz",
        idBoards: ["123a", "456b"]
    }
    const receive = await createnewUser(mockMembers, user, send)
    const callRec = mockMembers.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update idBoards', async() => {
    const send = {
        id: "001",
        username: "xxx",
        fullName: "yyy",
        token: "zzz",
        idBoards: ["789c", "456b"]
    }
    const receive = await createnewUser(mockMembers, user, send)
    const callRec = mockMembers.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
    const send = {
        id: "001",
        username: "aaa",
        fullName: "bbb",
        token: "zzz",
        idBoards: ["789c", "456b"]
    }
    const receive = await createnewUser(mockMembers, user, send)
    const callRec = mockMembers.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have user already', async() => {
    const send = {
        id: "001",
        username: "xxx",
        fullName: "yyy",
        token: "zzz",
        idBoards: ["123a", "456b"]
    }
    const rec = await createnewUser(mockMembers, user, send)
    expect(rec).toBe(false)
})