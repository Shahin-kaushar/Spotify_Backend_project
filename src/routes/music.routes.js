const express=require('express')
const musicController=require('../controllers/music.controller')
const multer =require('multer')
//middleware
const authMiddleware=require('../middlewares/auth.middleware')

//using multer middleware to access image file by server
const upload=multer({
    storage:multer.memoryStorage()
})


const router=express.Router();


router.post('/create', authMiddleware.authArtist ,upload.single("music"), musicController.createMusic);
router.post('/Album', authMiddleware.authArtist, upload.single("music"), musicController.createAlbum);

router.get('/', authMiddleware.authUser,musicController.getAllMusic)
router.get("/album",authMiddleware.authUser, musicController.getAllAlbum)
router.get("/album/:albumID",authMiddleware.authUser, musicController.getAlbumById)

//for album api testing
// {
//     "title":"test-album1",
//     "musics":["6ab0a08654f426c749044275","'6ab09ff2aeb0f178f855dd6f"]
// }

//for music api testing
// {
//     "music":file upload, --request will have file name for music
//     "title":"this si my second music"
// }

module.exports=router
