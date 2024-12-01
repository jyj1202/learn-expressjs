import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// 设置静态资源文件夹
app.use(express.static(path.join(__dirname, './public')));

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
