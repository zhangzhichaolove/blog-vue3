<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="nav">
      <router-link to="/header">头部组件</router-link>
      |
      <router-link to="/admin">后台管理</router-link>
    </div>
    <router-view />
  </div>
</template>
