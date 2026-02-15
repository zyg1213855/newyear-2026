# CyberNewYear 2026 🎊

一个融合"新中式国潮"与"赛博朋克"美学的农历新年创意网页应用。采用"两段式"沉浸体验设计，完美适配移动端。

## ✨ 核心特性

### 🎭 入口体验
- 🎁 **震撼开场**: 3D赛博红包入口，点击触发全屏金色粒子爆炸
- 🎵 **背景音乐**: 点击入口时自动播放新年BGM（本地加载），右上角唱片图标可控制
- 🌌 **氛围背景**: 深邃红黑渐变 + 祥云回纹图案 + 持续环境烟花

### 🎮 互动功能
- 🪵 **电子木鱼**: 点击积累功德值（LocalStorage持久化），Web Audio API模拟敲击声
- 🤖 **AI藏头诗**: 本地词库驱动，打字机效果逐字显示，支持200+常用汉字
- 🎴 **传统护身符**: 红绸纹理+金色云纹边框+竖排排版+大吉印章，可保存为图片
- 🏮 **粒子灯笼**: Canvas粒子汇聚成灯笼，点击爆炸后重组为"福"字（终极互动）
- 📺 **弹幕祝福墙**: 20条通用吉祥话持续飘过
- 🎆 **交互烟花**: 点击屏幕任意位置绽放烟花，支持全屏烟花雨（已优化性能）
- 🧧 **赛博红包**: 3D翻转动画，15条通用吉祥运势
- 🏮 **许愿墙**: 输入祝福后变成孔明灯飘向天空
- ✨ **粒子拖尾**: 鼠标/触摸移动产生金色粒子特效

### 🎨 视觉设计
- 📱 **Mobile-First**: 完美适配iPhone/Android，触摸优化
- 🌈 **配色方案**: 高级红 (#E60012) + 流光金 (#FFD700) + 深邃背景
- 💎 **毛玻璃效果**: Glassmorphism 现代UI风格
- ✨ **发光动画**: 呼吸光效、粒子系统、Canvas动画
- ⚡ **性能优化**: 减少粒子数量，确保旧手机流畅运行

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 添加背景音乐（可选）

1. 创建 `public/music` 文件夹
2. 将你的新年BGM音乐文件命名为 `bgm.mp3` 并放入该文件夹
3. 详细说明请查看 [BGM_SETUP.md](./BGM_SETUP.md)

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看效果。

### 构建生产版本

```bash
npm run build
```

## 🛠️ 技术栈

- **框架**: React 18 + Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **特效**: Canvas + canvas-confetti
- **图标**: Lucide React
- **字体**: Noto Serif SC (思源宋体) + Orbitron

## 📦 项目结构

```
cyber-newyear-2026/
├── public/
│   └── music/
│       └── bgm.mp3              # 背景音乐（需自行添加）
├── src/
│   ├── components/
│   │   ├── EnhancedBackground.jsx  # 增强背景（渐变+图案）
│   │   ├── AmbientFireworks.jsx    # 环境烟花效果
│   │   ├── EntranceOverlay.jsx     # 入口遮罩层
│   │   ├── BGMPlayer.jsx           # 背景音乐播放器（本地加载）
│   │   ├── HeroSection.jsx         # 主视觉区域（含福字彩蛋）
│   │   ├── WoodenFish.jsx          # 电子木鱼
│   │   ├── AcrosticPoem.jsx        # AI藏头诗
│   │   ├── TalismanCard.jsx        # 传统护身符（竖排+印章）
│   │   ├── DanmakuWall.jsx         # 弹幕祝福墙
│   │   ├── Fireworks.jsx           # 烟花交互（性能优化）
│   │   ├── RedEnvelope.jsx         # 红包抽奖
│   │   ├── WishingWall.jsx         # 许愿墙
│   │   ├── LanternParticles.jsx    # 粒子灯笼（终极互动）
│   │   ├── CheatCodeListener.jsx   # 秘籍监听器（金币雨）
│   │   └── ShareableCard.jsx       # 可分享护身符卡片
│   ├── utils/
│   │   └── poemGenerator.js        # 藏头诗生成器
│   ├── App.jsx                     # 主应用
│   ├── main.jsx                    # 入口文件
│   └── index.css                   # 全局样式（移动端优化）
├── index.html                      # HTML（移动端meta标签）
├── package.json                    # 依赖（含html2canvas）
├── vite.config.js
├── tailwind.config.js              # Tailwind配置（Mobile-First）
└── BGM_SETUP.md                    # BGM设置说明
```

## 🎨 设计亮点

- **震撼入口**: 3D红包 + 全屏粒子爆炸开场动画
- **深邃背景**: 径向渐变 + 祥云回纹图案 + 持续环境烟花
- **呼吸发光的"福"字**: CSS动画和文字描边
- **Canvas粒子系统**: 实时跟随鼠标的金色粒子拖尾
- **电子木鱼**: 点击缩放动画 + Web Audio API声音 + 功德值持久化
- **打字机效果**: AI藏头诗逐字显示，模拟ChatGPT输出
- **传统护身符**: 红绸纹理 + 金色云纹边框 + 竖排文字 + 大吉印章
- **粒子灯笼爆炸**: Canvas粒子汇聚→点击爆炸→重组为"福"字（终极视觉特效）
- **弹幕系统**: 20条祝福语持续从右向左飘过
- **3D翻转卡片**: 红包打开时的立体翻转效果
- **孔明灯动画**: 祝福语从底部飘向天空，带有渐变透明度
- **毛玻璃效果**: backdrop-filter实现的现代UI风格
- **旋转唱片**: BGM播放时唱片旋转，静音时停止

## 🎯 交互说明

1. **入口**: 点击3D赛博红包进入主页面，触发全屏粒子爆炸并开始播放BGM
2. **BGM控制**: 右上角旋转的唱片图标可切换音乐播放/静音
3. **主页**: 移动鼠标/触摸屏幕查看金色粒子拖尾效果，背景持续有低亮度烟花
4. **福字彩蛋**: 点击主页的"福"字，它会旋转180度并弹出"福到了！"
5. **木鱼区**: 点击木鱼积累功德，功德值保存在LocalStorage
6. **藏头诗区**: 输入名字生成专属藏头诗，支持200+常用汉字
7. **护身符**: 生成藏头诗后，点击"生成护身符"按钮，创建传统国风电子贺卡
8. **保存护身符**: 点击"保存护身符"按钮下载图片，或长按截图保存
9. **弹幕墙**: 观看满屏飘过的新年祝福
10. **烟花区**: 点击屏幕任意位置放烟花，点击"全屏盛放"按钮触发烟花雨
11. **红包区**: 点击红包领取通用吉祥运势，可重复抽取
12. **许愿墙**: 输入祝福后点击发送，祝福会变成孔明灯飘走
13. **粒子灯笼**: 点击灯笼，观看粒子爆炸后重组为"福"字的震撼效果（终极互动）

## 🎁 隐藏彩蛋

- 🪙 **金币雨秘籍**: 在任意页面依次输入 `money`（不区分大小写），触发5秒金币雨特效
- 🔄 **福字翻转**: 点击主页巨大的"福"字，看看会发生什么

## 📱 移动端优化

- ✅ **Mobile-First设计**: 所有组件优先考虑移动端体验
- ✅ **触摸优化**: 所有按钮最小44x44px，适合手指点击
- ✅ **性能优化**: 烟花粒子数量减半，确保旧手机流畅运行
- ✅ **字体大小**: 移动端输入框字体16px，防止iOS自动缩放
- ✅ **视口适配**: 支持iPhone刘海屏、Android全面屏
- ✅ **防止缩放**: 禁用双击缩放，优化单页应用体验

## 📝 自定义

### 修改配色

编辑 `tailwind.config.js`:

```js
colors: {
  'cyber-red': '#E60012',    // 主红色
  'cyber-gold': '#FFD700',   // 主金色
  'cyber-dark': '#0F0F0F',   // 背景色
}
```

### 添加更多运势

编辑 `src/components/RedEnvelope.jsx` 中的 `fortunes` 数组。

### 自定义藏头诗词库

编辑 `src/utils/poemGenerator.js` 中的 `poemDatabase` 对象，添加更多汉字对应的吉祥话。

### 自定义BGM

将你的音乐文件命名为 `bgm.mp3` 并放入 `public/music/` 文件夹。

详细说明请查看 [BGM_SETUP.md](./BGM_SETUP.md)

推荐使用：
- 免版权音乐网站（如 Pixabay、FreePD）
- 搜索关键词："Chinese New Year Music"、"Traditional Chinese Music"

## 📄 License

MIT

---

Made with ❤️ and React | 2026 新年快乐！

