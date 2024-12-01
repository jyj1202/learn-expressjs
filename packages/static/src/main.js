"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
var port = 3000;
// 设置静态资源文件夹
app.use(express_1.default.static(path_1.default.join(__dirname, './public')));
// 启动服务器
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
