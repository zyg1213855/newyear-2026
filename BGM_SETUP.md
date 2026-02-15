# 如何添加背景音乐

## 步骤

1. 在项目根目录创建 `public/music` 文件夹（如果不存在）

```bash
mkdir -p public/music
```

2. 将你的新年BGM音乐文件重命名为 `bgm.mp3`，并放入 `public/music/` 文件夹

3. 推荐的音乐来源：
   - [Pixabay Music](https://pixabay.com/music/) - 免版权音乐
   - [FreePD](https://freepd.com/) - 公共领域音乐
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary) - YouTube音频库

4. 搜索关键词：
   - "Chinese New Year Music"
   - "Traditional Chinese Music"
   - "Festive Music"
   - "新年音乐"

## 文件结构

```
project/
├── public/
│   └── music/
│       └── bgm.mp3  <-- 你的音乐文件放这里
├── src/
└── ...
```

## 注意事项

- 音乐文件格式：推荐使用 MP3 格式（兼容性最好）
- 文件大小：建议不超过 5MB，避免加载过慢
- 音量：代码中已设置为 30%，可在 `src/components/BGMPlayer.jsx` 中调整

## 测试

1. 启动开发服务器：`npm run dev`
2. 点击入口红包，音乐应该自动播放
3. 点击右上角唱片图标可以控制播放/静音

## 如果没有音乐文件

如果你暂时没有音乐文件，应用仍然可以正常运行，只是不会播放背景音乐。

