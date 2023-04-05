import React, { Component } from 'react';
import Control from './components/Control';
import StudentForm from './components/StudentForm';
import SudentList from './components/SudentList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Doi tuong cua student
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      //Thuộc tính ẩn hiển form
      isToggle: false,
      student: "",
      actionName: "",
      searchData: "",
      orderField:"",//cột cần sắp 
      orderBy:"",//sx tăng hay giảm
    };
  }
  handleAdd = () => {
    this.setState({
      isToggle: true,
      actionName:"add",
      student:{}
    });
  };
  //xem
  handleView = (student) => {
    this.setState({
      isToggle: true,
      student: student,
      actionName: "",
    });
  };
  //Edit
  handleEdit = (student) => {
    this.setState({
      isToggle: true,
      student: student,
      actionName: "update",
    });
  };

  //Cập nhật dữ liệu từ form
  handleUpdate = (studentUpdate) => {
    //cap nhat du lieu trog state voi students
    let { students } = this.state; //lay du lieu goc trong state
    //duyet xem doi tuong nao dang can sua  - vcap nhat lai doi tuong do laf doi tuowng can sua
    students.forEach((st, index) => {
      if (st.studentId === studentUpdate.studentId) {
        students[index] = studentUpdate;
      }
    });
    //cap nhat lai state cho app
    this.setState({
      students: students,
    });
  };
  //Thêm mới dữ liệu
  handleAddSave = (studentAddSave) => {
    //Thêm mới  du lieu trog state voi students
    let { students } = this.state; //lay du lieu goc trong state
    //Thêm vào cuối mảng students
    students.push(studentAddSave);
    //cap nhat lai state cho app
    this.setState({
      students: students,
    });
  };
  //xoa su lieu
  handleDelete = (student) => {
    console.log(student);
    //lay du lieu cu
    let { students } = this.state; //lay du lieu goc trong state
    //tim kiem den doi tuong sinh vien can xoa
    students.forEach((st,index) => {
      if (st.studentId === student.studentId) {
        students.splice(index,1);
      }
    });
    this.setState({
      students: students,
    });
  };
  //xử lý trường hợp Tìm kiêm
  handleSearch = (searchData) => {
    this.setState({
      searchData: searchData,
    });
    // console.log("searchData", this.state.searchData);
  };
  //Xu ly cho sx
  handleSort = (orderField, orderBy) => {
    this.setState({
      orderField: orderField,
      orderBy: orderBy,
    });
  };
  render() {
    let elemenForm = this.state.isToggle ? 
      <StudentForm
        student={this.state.student}
        actionName={this.state.actionName}
        handleUpdate={this.handleUpdate}
        handleAddSave={this.handleAddSave}
      />:"";
    //Neu isToggle laf false thi hien form ngc lai thi an di
    let students = [];
    if (this.state.searchData !== "") {
      //thực hiện tìm giá trị ở student Name có giá trị chứa searchData
      this.state.students.forEach((st) => {
        if ( st.studentName.toLocaleLowerCase().includes(this.state.searchData.toLocaleLowerCase())) {
          students.push(st);
        }
      });
    } else {
      students = [...this.state.students];
    }
    //thuc hien sx neu co
    if (this.state.orderField === "studentName") {
      if (this.state.orderBy === "ASC") {
        students.sort((a, b) =>
          (a.studentName > b.studentName)? 1: (a.studentName > b.studentName)
            ? -1
            : 0
        );
      } else {
        students.sort((a, b) =>
          (a.studentName > b.studentName)? -1: (a.studentName > b.studentName)
            ? 1
            : 0
        );
      }
    }
    //theo tuoi neu co
    if (this.state.orderField === "age") {
      if (this.state.orderBy === "ASC") {
        students.sort((x, y) => x.age - y.age);
      } else {
        students.sort((x, y) => y.age - x.age);
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control
                handleAdd={this.handleAdd}
                handleSearch={this.handleSearch}
                handleSort={this.handleSort}
              />
              {/* handle add thứ nhất là thuộc tính của control,handleAdd là sự kiện show form  */}
              <SudentList
                students={students}
                // students={this.state.students}
                handleView={(student) => this.handleView(student)}
                handleEdit={(student) => this.handleEdit(student)}
                handleDelete={(student) => this.handleDelete(student)}
              />
              {/* Lấy dữ liệu từ trên contructor , students bao gồm id , name , age, sex, birth , ... */}
              {/* ở đây props là students  */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* <StudentForm/> */}
            {elemenForm}
          </div>
        </div>
      </div>
    );
  }
}
