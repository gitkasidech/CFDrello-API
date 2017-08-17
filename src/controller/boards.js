import { Boards } from '../models/boards' 

export const setRoute = async (app) => {
    app.post('/boards', havedata);
}
export const havedata = async (req, res, next) => {
    console.log(req.body)
    const callcheckreq = await checkreq(req.body);
    console.log(callcheckreq)
    if (callcheckreq) {
        return res.status(500).send("format should be")
    }

    const boards = await Boards.findOne({ id: req.body.id });
    console.log(boards)

    const callcreate = await createnewBoards(boards, req.body);
    if (callcreate) {
        console.log("create new boards complete");
        //add to sprint 2 query data
        res.json({
            createBoards: true,
            id: req.body.id,
            name: req.body.name,
            labelNames: req.body.labelNames
        });
    }
    else {
        console.log("have boards already!!");
        //add to sprint 2 query data
        res.json({
            createBoards: false,
            id: req.body.id,
            name: req.body.name,
            labelNames: req.body.labelNames
        });
    }
}
export const checkreq = (body) => {
    if (!body.id || !body.name) {
        return true
    }
    else {
        return false
    }
}
export const createnewBoards = async (boards, body) => {
    if (!boards) {
        const newboards = await Boards.create({
            id: body.id,
            name: body.name,
            labelNames: body.labelNames
        })
        return true
    }
    else {
        return false
    }
}