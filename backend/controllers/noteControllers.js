const Note = require("../models/noteModel");
const asyncHandler= require("express-async-handler");

const getNotes = asyncHandler(

    async (req,res)=>{

        console.log(req.user);

        const notes = await Note.find({user: req.user._id});
        res.json(notes);

    }
);

const createNote = asyncHandler(

    async (req,res)=>{

        const {title, content, category} = req.body;

        if(!title || !content || !category){

            res.status(400);
            throw new Error("Please fill all the fields");
        }else{

            const note = new Note({user: req.user._id, title, content, category});

            const createdNote= await note.save();

            res.status(201).json(createdNote);
        }
    }

);

const getNoteById = asyncHandler(
    async(req, res)=>{

    const note = await Note.findById(req.params.id);

    console.log(req.params.id)


    console.log(note);

    if (note){
        res.json(note);
    }else{
       res.status(404);
        res.json({message: "note not found"});
    }
    
});

const updateNote = asyncHandler( async(req,res)=>{
    const {title, content, category} = req.body;

    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()){
        res.status(400);
        throw new Error("You cannot preform this action");
    }
    
    if (note){
        note.title = title;
        note.content= content;
        note.category=category;

        const updatedNote = await note.save();
        res.json(updatedNote);
    }else{
        throw new Error("Note not found");
    }


})

const deleteNote = asyncHandler(async(req,res)=>{

    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()){

        res.status(400);
        throw new Error("your cant preform this action");
    }

    if(note){

        await note.deleteOne();
        res.json({message:"Note removed"})


    }else{
        res.status(404);
        throw new Error("Note not found");
    }
})

module.exports = {getNotes, createNote, getNoteById, updateNote, deleteNote}