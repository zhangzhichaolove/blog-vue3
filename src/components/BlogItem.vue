<template>
  <div class="item">
    <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
      <div class="item-container">
        <div class="img-container">
          <img
            src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png"
            alt="img"
          />
        </div>
        <div class="text-container">
          <span class="post-title">Butterfly 安裝文檔(一) 快速開始</span>
          <span class="post-time">发表于：2020-5-28</span>
          <span class="post-text"
            >📖 本教程更新於 2021 年 09 月 18
            日，教程的內容針對最新穩定版而更新（如果你是舊版，教程會有些出入，請留意）
            🦋 Butterfly 已經更新到 3.8.4 📚 文檔目錄 🚀 快速開始 - 📑 主題頁面
            - 🛠 主題配置-1 - ⚔️ 主題配置-2 - ❓ 主題問答 - ⚡️ 進階教程 - ✨
            更新日誌 - 🤞 打賞 你可以通過右下角的 簡 按鈕切換為簡體顯示
            hexo-theme-butterfly是基於 hexo-theme-melody 的基礎上進行開發的。
            安裝Git安裝 (Github)Git安裝 (Gitee)npm安裝穩定版【建議】 在你的 Hexo
            根目錄裏 1git clone -b master
            https://github.com/jerryc127/hexo-theme-butterfly.git
            themes/butterfly 測試版 測試版可能存在 bug，追求穩定的請安裝穩定版
            如果想要安裝比較新的 dev 分支，可以 1git clone -b dev
            https://github.com/je ...</span
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
};
</script>
<style scoped lane="less">
.item {
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.item-container {
  display: flex;
  height: 200px;
}
.text-container {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
}
.img-container {
  width: 280px;
  height: auto;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
}
.img-container > img {
  width: 280px;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
}
.item-container:hover > div > img {
  width: 280px;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  transition: all 0.5s ease-out;
  transform: scale(1.2, 1.2);
}
.item-container:hover {
  display: flex;
  height: 200px;
  transition: all 0.5s ease-out;
  transform: scale(1.02, 1.02);
  /* transform: scale(1.00, 1.00); */
}
.post-title {
  font-size: 15px;
  font-weight: bold;
  color: #000;
}
.post-time {
  font-size: 10px;
  color: #999;
}
.post-text {
  font-size: 12px;
  color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
}
/* >>> .el-card__body {
  padding: 0;
} */
/* /deep/ .el-card__body {
  padding: 0;
} */
</style>