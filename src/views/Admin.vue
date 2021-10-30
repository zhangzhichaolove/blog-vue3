<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-menu
        :default-active="activeIndex"
        :default-openeds="['2']"
        class="el-menu-vertical"
        :collapse="isCollapse"
      >
        <el-menu-item index="1" @click="isCollapse = !isCollapse">
          <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
          <i v-if="!isCollapse" class="el-icon-d-arrow-left"></i>
          <template #title>{{ isCollapse ? "展开" : "收起" }}</template>
        </el-menu-item>
        <el-menu-item index="2" @click="itemClick">
          <i class="el-icon-wind-power"></i>
          <template #title>发布文章</template>
        </el-menu-item>
        <el-menu-item index="3" @click="itemClick">
          <i class="el-icon-menu"></i>
          <template #title>打开版权</template>
        </el-menu-item>
        <el-menu-item index="4" @click="itemClick" disabled>
          <i class="el-icon-document"></i>
          <template #title>菜单四</template>
        </el-menu-item>
        <el-menu-item index="5" @click="itemClick">
          <i class="el-icon-setting"></i>
          <template #title>菜单五</template>
        </el-menu-item>
      </el-menu>
      <!-- </el-aside> -->
      <el-container>
        <el-main>
          <el-tabs
            type="card"
            v-model="editableTabsValue"
            @tab-click="tatabClick"
            @tab-remove="removeTab"
            closable
          >
            <el-tab-pane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <component :is="item.component"></component>
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
import { ref, reactive, toRefs } from "vue";
export default {
  name: "Admin",
  components: {
    Footer: () => import("@/components/Footer.vue"),
    BlogEdit: () => import("@/components/BlogEdit.vue"),
  },
  setup() {
    const isCollapse = ref(true);

    let editableTabs = reactive({
      activeIndex: "2",
      editableTabsValue: "publish",
      tabs: [
        {
          title: "发布文章",
          name: "publish",
          component: <BlogEdit />,
        },
      ],
    });
    function itemClick(menu) {
      let pushItem = undefined;
      if (menu.index === "2") {
        pushItem = {
          title: "发布文章",
          name: "publish",
          component: <BlogEdit />,
        };
      } else if (menu.index === "3") {
        pushItem = {
          title: "打开版权",
          name: "copyright",
          component: <Footer />,
        };
      }
      if (
        pushItem &&
        editableTabs.tabs.filter((item) => item.name === pushItem.name) <= 0
      ) {
        editableTabs.editableTabsValue = pushItem.name;
        editableTabs.tabs.push(pushItem);
        editableTabs.activeIndex = menu.index;
      }
      if (pushItem) {
        editableTabs.editableTabsValue = pushItem.name;
      }
    }
    function tatabClick(itemTab) {
      editableTabs.activeIndex = "1";
    }
    function removeTab(itemTab) {
      editableTabs.activeIndex = "1";
      let tmpItem = editableTabs.tabs.filter((item) => item.name === itemTab);
      let index = editableTabs.tabs.indexOf(tmpItem[0]);
      editableTabs.tabs.splice(index, 1);
      if (editableTabs.editableTabsValue === itemTab) {
        index === 0 && index++;
        if (editableTabs.tabs.length > 0) {
          editableTabs.editableTabsValue = editableTabs.tabs[index - 1].name;
        }
      }
    }
    return {
      isCollapse,
      ...toRefs(editableTabs),
      itemClick,
      tatabClick,
      removeTab,
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