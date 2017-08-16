import { Lists } from '../models/lists' 

export const setRoute = async (app) => {
    app.post('/lists', havedata);
}
export const havedata = async (req, res, next) => {
    console.log(req.body)
    const callcheckreq = await checkreq(req.body);
    console.log(callcheckreq)
    if (callcheckreq) {
        return res.status(500).send("format should be")
    }

    const lists = await Lists.findOne({ id: req.body.id });
    console.log(lists)

    const callcreate = await createnewLists(lists, req.body);
    if (callcreate) {
        console.log("create new lists complete");
        //add to sprint 2 query data
        res.json({
            createLists: true,
            id: req.body.id,
            name: req.body.name,
            idBoard: req.body.idBoard
        });
    }
    else {
        console.log("have lists already!!");
        //add to sprint 2 query data
        res.json({
            createLists: false,
            id: req.body.id,
            name: req.body.name,
            idBoard: req.body.idBoard
        });
    }
}
export const checkreq = (body) => {
    if (!body.id || !body.name || !body.idBoard) {
        return true
    }
    else {
        return false
    }
}
export const createnewLists = async (lists, body) => {
    if (!lists) {
        const newlists = await Lists.create({
            id: body.id,
            name: body.name,
            idBoard: body.idBoard
        })
        return true
    }
    else {
        return false
    }
}