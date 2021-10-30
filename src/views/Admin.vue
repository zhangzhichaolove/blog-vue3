<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-menu
        :default-openeds="['1']"
        class="el-menu-vertical"
        :collapse="isCollapse"
        :default-active="$route.path"
        @select="handleSelect"
        router
      >
        <el-menu-item :index="$route.path" @click="isCollapse = !isCollapse">
          <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
          <i v-if="!isCollapse" class="el-icon-d-arrow-left"></i>
          <template #title>{{ isCollapse ? "展开" : "收起" }}</template>
        </el-menu-item>
        <el-menu-item index="/admin/blogEdit" @click="itemClick">
          <i class="el-icon-wind-power"></i>
          <template #title>发布文章</template>
        </el-menu-item>
        <el-menu-item index="/admin/copyright" @click="itemClick">
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
              :key="item.path"
              :label="item.title"
              :name="item.path"
            >
              <router-view v-slot="{ Component }">
                <transition name="fade-transform" mode="out-in">
                  <component class="view" :is="Component"></component>
                </transition>
              </router-view>
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
import { useRouter } from "vue-router";
export default {
  name: "Admin",
  components: {
    Footer: () => import("@/components/Footer.vue"),
    BlogEdit: () => import("@/components/BlogEdit.vue"),
  },
  setup() {
    const router = useRouter();

    const isCollapse = ref(true);

    const currentRoute = router.currentRoute.value;
    const currentPath = currentRoute.path;
    const currentMeta = currentRoute.meta;

    let editableTabs = reactive({
      editableTabsValue: currentPath,
      tabs: [],
    });

    currentPath !== "/admin" &&
      editableTabs.tabs.push({
        title: currentMeta.title,
        path: currentPath,
      });

    function handleSelect(key, keyPath, routeProps) {
      if (key === "/admin") {
        return;
      } else if (editableTabs.tabs.filter((it) => it.path === key).length > 0) {
        editableTabs.editableTabsValue = key;
        return;
      }
      const title = router.getRoutes().filter((it) => it.path === key)[0]
        .meta.title;
      editableTabs.tabs.push({
        title: title,
        path: key,
      });
      router.replace(key);
      editableTabs.editableTabsValue = key;
    }

    function itemClick(itemTab) {
      router.replace(itemTab.index);
    }
    function tatabClick(itemTab) {
      router.replace(itemTab.props.name);
    }
    function removeTab(itemTab) {}
    return {
      isCollapse,
      ...toRefs(editableTabs),
      handleSelect,
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