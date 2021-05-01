const Author = require("../models/author");
const authors = require("../models/author");


const getAllAuthors = async (req,res) => {
    try{
        const authors = await Author.find()
        return res.send(authors)
    }catch(err){
        res.status(400)
        return res.send("Database query failed")
    }
}

const getOneAuthor = async (req,res) => {
    try{
        const oneAuthor = await Author.findOne({"authorId": req.params.id})
            if(oneAuthor === null){
                res.status(404)
                return res.send("Author not found")
            }
            return res.send(oneAuthor)
    }catch(err){
        res.status(400)
        return res.send("Database query failed")
    }
}

const addAuthor = (req, res) => {
    // assemble a new author
    newAuthor = req.body
    // add to database
    authors.push(newAuthor)
    // return entire authors list to browser as a check that it worked
    res.send(authors)
}

module.exports ={
    getAllAuthors,
    getOneAuthor,
    addAuthor
}