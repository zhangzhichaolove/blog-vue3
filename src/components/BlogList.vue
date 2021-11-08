<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="title" label="文章标题" width="120" />
    <el-table-column
      property="profile"
      label="文章简介"
      show-overflow-tooltip
    />
    <el-table-column label="发布日期" width="150">
      <template #default="scope">{{ scope.row.createDate }}</template>
    </el-table-column>
    <el-table-column label="更新日期" width="150">
      <template #default="scope">{{ scope.row.updateDate }}</template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="130">
      <template #default>
        <el-button type="text" size="small" @click="blogEditClick"
          >编辑</el-button
        >
        <el-button type="text" size="small" @click="blogDeleteClick"
          >删除</el-button
        >
        <el-button type="text" size="small" @click="blogDetailsClick"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BlogList",
  setup() {
    let tableData = [
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
      {
        title: "第一篇文章",
        profile: "这里是文章简介，随便写点什么。",
        createDate: "2016-05-03 11:12:16",
        updateDate: "2021-11-08 10:38:50",
      },
    ];
    let multipleSelection = [];
    function handleSelectionChange(val) {
      console.log("选中的数据-->", val);
    }
    const router = useRouter();
    function blogEditClick() {
      router.push("/admin/blogEdit");
    }
    function blogDeleteClick() {}
    function blogDetailsClick() {
      router.push("/blog");
    }
    return {
      tableData,
      multipleSelection,
      handleSelectionChange,
      blogEditClick,
      blogDeleteClick,
      blogDetailsClick,
    };
  },
};
</script>

<style>
</style>