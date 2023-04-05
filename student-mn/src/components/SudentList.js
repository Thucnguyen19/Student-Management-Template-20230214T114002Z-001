import React, { Component } from "react";
import Student from "./Student";

export default class SudentList extends Component {
  handleView = (student) => {
    this.props.handleView(student);
  };
  handleEdit = (student) => {
    this.props.handleEdit(student);
    // console.log(student)
  };
  handleDelete=(student)=>{
    this.props.handleDelete(student)
  }
  //phần show forms & đẩy dữ liệu lên form
  render() {
    //Lấy dữ liệu từ props
    let { students } = this.props;
    // tạo các student item
    let studentElement = students.map((item, key) => {
      return (
        <Student
          index={key}
          student={item}
          key={key}
          handleView={(student) => this.handleView(student)}
          handleEdit={(student) => this.handleEdit(student)}
          handleDelete={(student)=>this.handleDelete(student)}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{studentElement}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

//map gồm 2 thuộc tính dữ liệu và key
