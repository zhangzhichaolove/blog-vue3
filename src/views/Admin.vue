<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-menu
        default-active="1"
        :default-openeds="['1-4-1', '2-4-1']"
        class="el-menu-vertical"
        :collapse="isCollapse"
      >
        <el-menu-item index="1" @click="isCollapse = !isCollapse">
          <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
          <i v-if="!isCollapse" class="el-icon-d-arrow-left"></i>
          <template #title>{{ isCollapse ? "展开" : "收起" }}</template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-location"></i>
            <span>菜单一</span>
          </template>
          <el-menu-item-group>
            <template #title><span>组一</span></template>
            <el-menu-item index="1-1" route="`/about`">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="组二">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>选项4</span></template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <i class="el-icon-cherry"></i>
            <span>菜单二</span>
          </template>
          <el-menu-item-group>
            <template #title><span>组一</span></template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="组二">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="2-4">
            <template #title><span>选项4</span></template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <template #title>菜单三</template>
        </el-menu-item>
        <el-menu-item index="5" disabled>
          <i class="el-icon-document"></i>
          <template #title>菜单四</template>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <template #title>菜单五</template>
        </el-menu-item>
      </el-menu>
      <!-- </el-aside> -->
      <el-container>
        <el-main>
          <el-tabs type="card" v-model="editableTabsValue" closable>
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <BlogEdit />
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Admin",
  components: {
    Footer: () => import("@/components/Footer.vue"),
    BlogEdit: () => import("@/components/BlogEdit.vue"),
  },
  setup() {
    const isCollapse = ref(true);
    const editableTabsValue = ref("t1");

    let editableTabs = ref([
      {
        title: "标签一",
        name: "t1",
      },
      {
        title: "标签二",
        name: "t2",
      },
    ]);
    return {
      isCollapse,
      editableTabs,
      editableTabsValue,
    };
  },
};
</script>

<style scoped>
.el-container {
  margin: 0px;
  padding: 0px;
  min-height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  height: auto;
}
.el-main {
  /* background-color: #e9eef3; */
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 深度选择器 */
::v-deep .el-tabs__content {
  flex: 1;
}
.el-tab-pane {
  height: 100%;
}
</style>