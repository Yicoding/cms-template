const COS = require('cos-nodejs-sdk-v5');
const cosconfig = require('./server/cosconfig');

const CONF = {
    dev: {
        http: 4005,
        https: 4000,
        mysql: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            db: 'exampleDb',
            pass: '',
            char: 'utf8mb4'
        },
    },
    prd: {
        http: 4003,
        https: 4000,
        mysql: {
            port: 3306,
            host: '',
            user: '',
            db: '',
            pass: '',
            char: 'utf8mb4'
        },
    },
    cos: new COS({
        // 必选参数
        SecretId: cosconfig.SecretId,
        SecretKey: cosconfig.SecretKey,
        // 可选参数
        FileParallelLimit: 3,    // 控制文件上传并发数
        ChunkParallelLimit: 8,   // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
        ChunkSize: 1024 * 1024 * 8,  // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
        Proxy: '',
    })

}

module.exports = CONF
