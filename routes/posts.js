/**
 * Created by Administrator on 2017/3/30.
 */
var express=require('express');
var router=express.Router();

var checkLogin=require('../middlewares/check').checkLogin;
// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
//app.get()只接受一个参数时为设定值，两个参数为设定路由
router.get('/',function (req, res, next) {
res.send(req.flash())
});
// POST /posts 发表一篇文章
router.get('/',checkLogin,function (req, res, next) {
    res.send(req.flash())
});
// GET /posts/:postId 单独一篇的文章页
router.get('/postId',function (req, res, next) {
    res.send((req.flash()))
});
// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit',checkLogin,function (req, res, next) {
   res.send(req.flash())
});
// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit',checkLogin,function (req,res,next) {
    res.send(req.flash())
});
//GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove',checkLogin,function (req, res, next) {
   res.send(req.flash())
});
// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment',checkLogin,function (req, res, next) {
    res.send(req.flash())
});
// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove',checkLogin,function (req,res,next) {
   res.send(req.flash())
});
module.exports=router;