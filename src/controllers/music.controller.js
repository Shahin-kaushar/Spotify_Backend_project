const musicModel=require('../models/music.model')
const albumModel=require('../models/album.model')

const jwt=require('jsonwebtoken')
const {uploadFile}=require('../services/storage.service')




async function createMusic(req,res) {
    const token=req.cookies.token;
    // //if we get the token that means it if a verified user
    // //else not a verified user 
    // //then we also have to verify the token 
    //role based authentication system

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })



    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })

}

async function createAlbum(req,res) {
  
        const {title,musicIds}=req.body
        
        const album=await albumModel.create({
            title,
            artist:req.user.id,
            musics:musicIds
        })

        res.status(201).josn({
            message:'album created successfullly',
            album:{
                id:album._id,
                artist:album.artist,
                title:album.title,
                musics:album.musics
            }
        })


   
}


async function getAllMusic(req,res){
    const musics=await musicModel
    .find()
    .skip(2)
    .limit(2)//upperlimit to fetch data from the server at a time
    .populate('artist',"username email")
    res.status(200).json({
        message:"musics fetched successfully",
        music:musics
    })

}

async function getAllAlbum(req,res){
    const albums=await musicModel.find().select("title","artist").populate('artist',"username email").populate("musics")
    res.status(200).json({
        message:"album fetched successfully",
        album:albums
    })
}

async function getAlbumById(req,res) {

    const albumID=req.params.albumID;
    const album=await albumModel.findById(album).populate("artist","username email").populate("musics")
    res.status(200).json({
        message:"Album fetched successfully",
        album:album
    })
    
}
module.exports={createMusic ,createAlbum,getAllMusic,getAllAlbum,getAlbumById};