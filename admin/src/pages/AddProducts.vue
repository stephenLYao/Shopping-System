<template>
  <div>
    <Header></Header>
    <el-row style="margin-top: 20px;">
      <el-col :span="14" :offset="4">
        <header class="form_header">选择商品种类</header>
        <el-form :model="categoryForm" ref="categoryForm" label-width="110px" class="form">
          <el-row class="category_select">
            <el-form-item label="商品种类">
              <el-select v-model="categoryForm.categorySelect" :placeholder="selectValue.label" style="width:100%;">
                <el-option
                  v-for="item in categoryForm.categoryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row class="add_category_row" :class="showAddCategory? 'showEdit': ''">
            <div class="add_category">
              <el-form-item label="商品种类" prop="name">
                <el-input v-model="categoryForm.name"></el-input>
              </el-form-item>
              <el-form-item label="商品tag" prop="tag">
                <el-input v-model="categoryForm.tag"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitCategoryForm('categoryForm')">提交</el-button>
              </el-form-item>
            </div>
          </el-row>
          <div class="add_category_button" @click="checkCategory">
            <i class="el-icon-caret-top edit_icon" v-if="showAddCategory"></i>
            <i class="el-icon-caret-bottom edit_icon" v-else slot="icon"></i>
            <span>添加商品种类</span>
          </div>
        </el-form>
        <header class="form_header">添加商品</header>
        <el-form
          :model="productsForm"
          :rules="{ required: true, message: '请输入商品名称', trigger: 'blur' }"
          ref="productsForm"
          label-width="110px"
          class="form products_form"
        >
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="productsForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品详情" prop="desc">
            <el-input v-model="productsForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="上传商品图片">
            <!-- <el-upload
              class="avatar-uploader"
              :action="baseUrl + '/v1/addimg/products'"
              :show-file-list="false"
              :on-success="uploadImg"
              :before-upload="beforeImgUpload">
              <img v-if="productsForm.image_path" :src="baseImgPath + productsForm.image_path" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload> -->
          </el-form-item>
          <el-form-item label="商品规格">
              <el-radio class="radio" v-model="productsSpecs" label="one">单规格</el-radio>
              <el-radio class="radio" v-model="productsSpecs" label="more">多规格</el-radio>
              <el-button type="primary" v-show="productsSpecs !== 'one'" @click="dialogFormVisible = true" style="margin-left: 10px;">添加规格</el-button>
          </el-form-item>
          <el-row v-if="productsSpecs === 'one'">
            <el-form-item label="运费">
              <el-input-number v-model="productsForm.specs[0].packFee" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="价格">
              <el-input-number v-model="productsForm.specs[0].price" :min="0" :max="10000"></el-input-number>
            </el-form-item>
          </el-row>
          <el-row v-else style="overflow: auto; text-align: center;">
            <el-table
              :data="productsForm.specs"
              style="margin-bottom: 20px;"
              :row-class-name="tableRowClassName"
            >
              <el-table-column
                prop="specs"
                label="规格"
              ></el-table-column>
              <el-table-column
                prop="packFee"
                label="运费"
              ></el-table-column>
              <el-table-column
                prop="price"
                label="价格"
              ></el-table-column>
              <el-table-column label="操作">
                <template slot-scope> 
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="addproducts('productsForm')">确认添加商品</el-button>
          </el-form-item>
        </el-form>
        <el-dialog title="添加规格" v-model="dialogFormVisible">
          <el-form
            :rules="{required: true, message: '请输入规格', trigger: 'blur'}"
            :model="specsForm"
          >
            <el-form-item label="规格" label-width="100px" prop="specs">
              <el-input v-model="specsForm.specs" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="运费" label-width="100px">
              <el-input-number v-model="specsForm.packFee" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="价格" label-width="100px">
              <el-input-number v-model="specsForm.price" :min="0" :max="10000"></el-input-number>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addSpecs()">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from '@/components/header';
import {getCategory, addCategory, addProducts} from '@/service/api';
// import {baseUrl, baseImgPath} from '@/config/env'
export default {
  data () {
    return {
      categoryForm: {
        categoryList: [],
        categorySelect: '',
        name: '',
        tag: ''
      },
      productsForm: {
        name: '',
        desc: '',
        specs: [{
          specs: '',
          packFee: 0,
          price: 0
        }]
      },
      specsForm: {
        specs: '',
        packFee: 0,
        price: 0
      },
      showAddCategory: false,
      productsSpecs: 'one',
      dialogFormVisible: false
    };
  },
  components: {
    Header
  },
  created () {
    this.initData();
  },
  computed: {
    selectValue: function () {
      return this.categoryForm && (this.categoryForm.categoryList[this.categoryForm.categorySelect] || {});
    }
  },
  methods: {
    async initData () {
      try {
        const result = await getCategory();
        if (result.status === 200) {
          result.data.categories.map((item, index) => {
            this.categoryForm.categoryList.push({
              value: index,
              label: item.name
            });
          });
        } else {
          this.$message.error(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
    checkCategory () {
      this.showAddCategory = !this.showAddCategory;
    },
    submitCategoryForm (categoryForm) {
      this.$refs[categoryForm].validate(async (valid) => {
        if (valid) {
          const params = {
            name: this.categoryForm.name,
            tag: this.categoryForm.tag
          };
          try {
            const result = await addCategory(params);
            if (result.status === 1) {
              this.initData();
              this.categoryForm.name = '';
              this.categoryForm.tag = '';
              this.showAddCategory = false;
              this.$message({
                type: 'success',
                message: '添加成功'
              });
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请检查输入是否正确',
            offset: 100
          });
          return false;
        }
      });
    },
    tableRowClassName (row, index) {
      if (index === 1) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
    },
    handleDelete (index) {
      this.productsForm.specs.splice(index, 1);
    },
    addSpecs () {
      this.productsForm.specs.push(this.specsForm);
      this.specsForm = {
        specs: '',
        packFee: 0,
        price: 0
      };
      this.dialogFormVisible = false;
    },
    addproducts (productsForm) {
      this.$refs[productsForm].validate(async (valid) => {
        if (valid) {
          const params = {
            ...this.productsForm,
            category: this.selectValue.label
          };
          try {
            const result = await addProducts(params);
            if (result.status === 200) {
              this.$message({
                type: 'success',
                message: '添加成功'
              });
            } else {
              this.$message.error('添加失败');
            }
          } catch (error) {
            this.$message.error('添加失败');
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请检查输入是否正确',
            offset: 100
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
	@import '../styles/_mixin.less';
	.form{
		min-width: 400px;
    margin-bottom: 30px;
		&:hover{
			box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
			border-radius: 6px;
			transition: all 400ms;
		}
	}
	.products_form{
		border: 1px solid #eaeefb;
		padding: 25px;
	}
	.form_header{
		text-align: center;
		margin-bottom: 10px;
	}
	.category_select{
		border: 1px solid #eaeefb;
		padding: 30px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}
	.add_category_row{
		height: 0;
		overflow: hidden;
		transition: all 400ms;
		background: #f9fafc;
	}
	.showEdit{
		height: 185px;
	}
	.add_category{
		background: #f9fafc;
		padding: 10px 30px 0px 10px;
		border: 1px solid #eaeefb;
		border-top: none;
	}
	.add_category_button{
		text-align: center;
		line-height: 40px;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border: 1px solid #eaeefb;
		border-top: none;
		transition: all 400ms;
		&:hover{
			background: #f9fafc;
			span, .edit_icon{
				color: #20a0ff;
			}
		}
		span{
			.sc(14px, #999);
			transition: all 400ms;	
		}
		.edit_icon{
			color: #ccc;
			transition: all 400ms;
		}
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
	.cell{
		text-align: center;
	}
</style>