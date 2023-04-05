import React, { Component } from 'react'

export default class Student extends Component {
  //phần click sự kiện xem và show form 
  handleView = (student) => {
    this.props.handleView(student);
  } 
  // phần sự kiện click vào sửa  và show form 
  handleEdit=(student) => {
    this.props.handleEdit(student);
  } 
  handleDelete=(student)=>{
    this.props.handleDelete(student);
  }

  render() {
    // lấy dữ liệu từ props để hiển thị
    let {student, index}=this.props;

    return (
        <tr>
        <td>{index+1}</td>
        <td>{student.studentId}</td>
        <td>{student.studentName}</td>
        <td>{student.age}</td>
        <td>{(student.sex===true || student.sex==="true")?'Nam':'Nữ'}</td>
        <td>
          <div className="template-demo">
            <button type="button" className="btn btn-danger btn-icon-text" onClick={()=>this.handleView(student)}>
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={()=>this.handleEdit(student)}>           
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={()=>this.handleDelete(student)}>           
              Xóa
            </button>
          </div>
        </td>
      </tr>
    )
  }
}
