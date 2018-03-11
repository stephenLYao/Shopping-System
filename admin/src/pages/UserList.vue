<template>
  <div class="fillcontain">
    <Header></Header>
    <div class="table_container">
      <el-table
        :data="tableData"
        border
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          width="100">
        </el-table-column>
        <el-table-column
          property="createAt"
          label="注册日期"
        >
        </el-table-column>
        <el-table-column
          property="username"
          label="用户姓名"
        >
        </el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import Header from '@/components/header';
import { getAllUserCounts, getUserLists } from '@/service/api';
export default {
  data () {
    return {
      tableData: [],
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
    }
  },
  components: {
    Header
  },
  created () {
    this.getData();
  },
  methods: {
    async getData () {
      try {
        const res = await getAllUserCounts();
        if (res.status === 200) {
          this.count = res.count;
          this.getUsers();
        } else {
          this.$message({
            type: 'error',
            message: '获取用户总数失败'
          });
        }
      } catch (error) {
        throw Error(error);
      }
    },
    async getUsers () {
      try {
        const res = await getUserLists(qs.stringify({ offset: this.offset, limit: this.limit }));
        if (res.status === 200) {
          this.tableData = [];
          res.data.users.forEach((user) => {
            this.tableData.push({
              username: user.username,
              createAt: user.createAt
            });
          });
          console.log(this.tableData)
        } else {
          this.$message({
            type: 'error',
            message: '获取用户列表失败'
          });
        }
      } catch (error) {
        throw Error(error);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1)*this.limit;
      this.getUsers()
    }
  }
};
</script>

<style lang="less">
@import '../styles/_mixin.less';
.table_container{
    padding: 20px;
}
</style>