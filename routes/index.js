/**
 * ajax 服务路由集合
 */
const router = require('koa-router')();

const controllers = require('../controllers');

// 上传文件
router.post('/putObject', controllers.upload.putObject);

// 角色
router.get('/getRoleDetail', controllers.role.getRoleDetail); // 查看单个角色列表
router.post('/addRole', controllers.role.addRole); // 新增角色
router.put('/updateRole', controllers.role.updateRole); // 更新单个角色
router.put('/removeRole', controllers.role.removeRole); // 删除单个角色

module.exports = router
