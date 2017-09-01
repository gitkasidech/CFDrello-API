jest.mock('../models', () => { })
import mongoose from 'mongoose'
import MockActions from 'actions'
import { createnewActions } from '../controller/actions'

const mockActions = new MockActions()
const actions = {
    id: "123a",
    idMemberCreator: "aa11",
    data: {
        list: {
          name: "Done",
          id: "58dba95aa3fca404ad62476c"
        },
        board: {
          shortLink: "d2EnEWSY",
          name: "Best Test Board!",
          id: "586e8f681d4fe9b06a928307"
        },
        card: {
          shortLink: "HKaaH2Pk",
          idShort: 94,
          name: "Design New System",
          id: "5939a829eba57d109331a289",
          pos: 229375
        },
        old: {
          pos: 163839.5
        }
      },
    type: "updateCard",
    date: "2017-06-08T19:40:27.915Z"
}

test('new actions', async () => {
    const send = {
        id: "123a",
        idMemberCreator: "aa11",
        data: {
            list: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              pos: 229375
            },
            old: {
              pos: 163839.5
            }
          },
        type: "updateCard",
        date: "2017-06-08T19:40:27.915Z"
    }
    const actionsNew = undefined
    const receive = await createnewActions(mockActions,actionsNew, send)
    const callRec = mockActions.getCreate()
    expect(callRec.length).toEqual(1)
});

test('update idMemberCreator', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "bb22",
        data: {
            list: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              pos: 229375
            },
            old: {
              pos: 163839.5
            }
          },
        type: "updateCard",
        date: "2017-06-08T19:40:27.915Z"
    }
    const receive = await createnewActions(mockActions,actions, send)
    const callRec = mockActions.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update data', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "aa11",
        data: {
            listAfter: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            listBefore: {
              name: "Doing",
              id: "58d4144e4ec5c792a898d4b4"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              idList: "58dba95aa3fca404ad62476c"
            },
            old: {
              idList: "58d4144e4ec5c792a898d4b4"
            }
          },
        type: "updateCard",
        date: "2017-06-08T19:40:27.915Z"
    }
    const receive = await createnewActions(mockActions,actions, send)
    const callRec = mockActions.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update type', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "aa11",
        data: {
            list: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              pos: 229375
            },
            old: {
              pos: 163839.5
            }
          },
        type: "createCard",
        date: "2017-06-08T19:40:27.915Z"
    }
    const receive = await createnewActions(mockActions,actions, send)
    const callRec = mockActions.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update date', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "aa11",
        data: {
            list: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              pos: 229375
            },
            old: {
              pos: 163839.5
            }
          },
        type: "updateCard",
        date: "2017-07-30T19:40:27.915Z"
    }
    const receive = await createnewActions(mockActions,actions, send)
    const callRec = mockActions.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('update all', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "bb22",
        data: {
            listAfter: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            listBefore: {
              name: "Doing",
              id: "58d4144e4ec5c792a898d4b4"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              idList: "58dba95aa3fca404ad62476c"
            },
            old: {
              idList: "58d4144e4ec5c792a898d4b4"
            }
          },
        type: "addCard",
        date: "2017-08-30T19:40:27.915Z"
    }
    const receive = await createnewActions(mockActions,actions, send)
    const callRec = mockActions.getUpdate()
    expect(callRec[0]).toEqual(send)
})

test('have actions already', async() => {
    const send = {
        id: "123a",
        idMemberCreator: "aa11",
        data: {
            list: {
              name: "Done",
              id: "58dba95aa3fca404ad62476c"
            },
            board: {
              shortLink: "d2EnEWSY",
              name: "Best Test Board!",
              id: "586e8f681d4fe9b06a928307"
            },
            card: {
              shortLink: "HKaaH2Pk",
              idShort: 94,
              name: "Design New System",
              id: "5939a829eba57d109331a289",
              pos: 229375
            },
            old: {
              pos: 163839.5
            }
          },
        type: "updateCard",
        date: "2017-06-08T19:40:27.915Z"
    }
    const rec = await createnewActions(mockActions,actions, send)
    expect(rec).toBe(false)
})

