<template>
  <router-view />
</template>

<style lang="less">
html,
body,
#app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  text-align: center;
}
.v-md-editor-preview {
  text-align: left;
}
blockquote {
  margin: 0;
}
pre {
  display: block;
  background-image: url(./assets/mac_icon.png) !important;
  padding: 2.5rem 0.5rem 0.5rem 1rem !important;
  overflow-y: auto !important;
  font-weight: 300;
  font-family: Menlo, monospace;
  border-radius: 0.3rem !important;
  background-position: 16px 16px !important;
  background-repeat: no-repeat !important;
  /* background-color: #283646 !important; */
  /* box-shadow: 5px 5px 15px 0 rgb(50 50 50 / 65%); */
}
</style>