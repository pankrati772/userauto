<template>
  <div class="hello">
    <el-button type="primary" class="add_btn" @click="add=true" >添加用户</el-button>
  <el-table
    :data="tableData"
    style="width: 100%">
    
    <el-table-column
      label="用户名"
      width="500">
      <template slot-scope="scope">
        
        <span style="margin-right: 100px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="密码"
      width="500">
      <template slot-scope="scope">
        
        <span style="margin-right: 20px" v-show="scope.row.show">{{ scope.row.password }}</span>
        <span style="margin-right: 20px" v-show="!scope.row.show">******</span>
        <i class="el-icon-view" @click="scope.row.show=!scope.row.show"></i>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="adduser" v-show="add">
      <div class="add_table">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="formLabelAlign.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="adduser(formLabelAlign)" plain>确定</el-button>
            <el-button type="danger" @click="add=false">取消</el-button>
          </el-form-item>
        </el-form>
        <a  onclick="window.print();return">打印</a>
      </div>
  </div>
  <!-- <div class="edituser" v-show='edit'>
    <div class="edit_table">
      <el-form :label-position="labelPosition" label-width="80px" :model="editdata">
          <el-form-item label="用户名">
            <el-input v-model="editdata.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="editdata.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="edit(editdata)">确定</el-button>
            <el-button type="danger" @click="eidt=false">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        tableData: [{
          name: 'user',
          password:'123456',
          show:false
          
        }, {
          name: 'admin',
          password:'123456',
          show:false
          
          
        }, {
          name: 'show',
          password:'123456',
          show:false
          
          
        }],
        add:false,
        edit:false,
        labelPosition: 'right',
        formLabelAlign: {
          
        },
        deldata:{

        },
        editdata:{
          name:''
        },
        
      }
    },
    mounted(){
      axios.get('http://192.168.4.64:8080/sysuer/getAll',).then((data)=>{
                  console.log(data.data.data)
                  
              })
    }
    ,
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.edit=true
        this.edit.name=row.name
        
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.deldata=this.tableData
        this.deldata.splice(index, 1);
        console.log(this.deldata)
        this.tableData=this.deldata
        this.$notify({
          title: '删除成功',
          message: '',
          type: 'success'
        });

      },
      adduser(msg){
        console.log(msg.name)
       
        let data = {
          name:msg.name,
          password:msg.password,
          show:false
          }
        this.tableData=[data,...this.tableData]
        this.add=false
        this.formLabelAlign.name="";
        this.formLabelAlign.password=''
        this.$notify({
          title: '添加成功',
          message: '',
          type: 'success'
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.hellow{
  width:100%
}
.add_btn{
  position: absolute;
  right:0;
  top: 90px;
}
.adduser{
width:100%;
height:600px;
position:absolute;
background: #fff;
z-index: 999;
top: 0;
left: 0;
}
.add_table{
  position:absolute;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-200px;
    /*此时宽和高都要固定*/
    width:400px;
    height:200px;
    /* border:1px solid; */
}


</style>
