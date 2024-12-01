const { execSync } = require('child_process');  // 用来执行 shell 命令
const path = require('path');
const fs = require('fs-extra');

// 设置目录路径
const distDir = path.join(__dirname, '../dist');
const publicDir = path.join(__dirname, '../src/public');

// 执行 TypeScript 编译
function compileTypeScript() {
  console.log('Compiling TypeScript...');
  try {
    execSync('tsc', { stdio: 'inherit' });  // 执行 tsc 命令
    console.log('TypeScript compiled successfully!');
  } catch (err) {
    console.error('Error compiling TypeScript:', err);
    process.exit(1);  // 如果编译失败，退出脚本
  }
}

// 复制 public 目录到 dist
function copyPublic() {
  console.log('Copying public directory...');
  fs.copy(publicDir, path.join(distDir, 'public'), function (err) {
    if (err) {
      console.error('Error copying public directory:', err);
      process.exit(1);  // 如果复制失败，退出脚本
    }
    console.log('Public directory copied successfully!');
  });
}

// 确保 dist 目录存在
function ensureDistDir() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
}

// 执行构建流程
function build() {
  ensureDistDir();  // 确保 dist 目录存在
  compileTypeScript();  // 编译 TypeScript
  copyPublic();  // 复制 public 目录
}

// 执行构建
build();
