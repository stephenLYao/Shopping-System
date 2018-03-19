<template>
  <div class="fillcontain">
    <Header></Header>
    <el-table
      :data="tableData"
      @expand='expand'
      :expand-row-keys='expendRow'
      :row-key="row => row.index"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="食品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="食品介绍"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="Pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="counts">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import Header from '@/components/header';
import { getProductsAllCounts, getProductsList } from '@/service/api';
export default {
  data () {
    return {
      offset: 0,
      limit: 20,
      counts: 0,
      tableData: [],
      currentPage: 1,
      expendRow: []
    };
  },
  components: {
    Header
  },
  created () {
    this.initData();
  },
  computed: {},
  methods: {
    async initData () {
      try {
        const res = await getProductsAllCounts();
        if (res.status === 200) {
          this.counts = res.counts;
        } else {
          this.$message.error('获取商品数量失败');
        }
        this.getProducts();
      } catch (error) {
        this.$message.error('获取商品数量失败');
      }
    },
    async getProducts () {
      try {
        const res = await getProductsList(qs.stringify({ offset: this.offset, limit: this.limit }));
        if (res.status === 200) {
          this.tableData = [];
          res.data.products.forEach((item, index) => {
            this.tableData.push({
              id: item.id,
              name: item.name,
              desc: item.desc,
              category: item.category,
              month_sales: item.month_sales,
              pic_list: item.pic_list,
              index: index
            });
          });
        }
      } catch (error) {
        this.$message.error('获取商品列表失败');
      }
    },
    handleEdit () {},
    async handleDelete (index, row) {},
    expand (row, status) {

    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getProducts();
    }
  }
};
</script>

<style lang="less">
@import '../styles/_mixin.less';
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container{
  padding: 20px;
}
.Pagination{
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>