import React, { Component } from "react";

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: "",
      sex: false,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
    // this.state = {
    //   studentId:this.props.student.studentId,
    //   studentName:this.props.student.studentName,
    //   age:this.props.student.age,
    //   sex:this.props.student.sex,
    //   birthDate:this.props.student.birthDate,
    //   birthPlace:this.props.student.birthPlace,
    //   address:this.props.student.address,
    // }
  }
  componentWillMount = () => {
    // vào trước khi render trong quá trình mouting
    let { student, actionName } = this.props;
    // console.log(student)
    if (actionName === "" || actionName === "update") {
      // cập nhật state
      this.setState({
        studentId: student.studentId,
        studentName: student.studentName,
        age: student.age,
        sex: student.sex,
        birthDate: student.birthDate,
        birthPlace: student.birthPlace,
        address: student.address,
      });
    } else {
      // trường hợp thêm mối, các điều khiển set lại trạng thái ban đầu
      this.setState({
        studentId: "",
        studentName: "",
        age: "",
        sex: false,
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  componentWillReceiveProps = (nextProps) => {
    // Vào trước khi render trong quá trình updation
    // let {student, actionName} = this.props;
    let { student, actionName } = nextProps;
    if (actionName === "" || actionName === "update") {
      // cập nhật state
      this.setState({
        studentId: student.studentId,
        studentName: student.studentName,
        age: student.age,
        sex: student.sex,
        birthDate: student.birthDate,
        birthPlace: student.birthPlace,
        address: student.address,
      });
    } else {
      // trường hợp thêm mối, các điều khiển set lại trạng thái ban đầu
      this.setState({
        studentId: "",
        studentName: "",
        age: "",
        sex: false,
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  //suwj kieenj khi thay doi du lieu trong form vaf cap nhat lai state
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  //khi nguoi dung submit form (them moi hoac sua)
  handleSubmit = (event) => {
    //truong hop sua
    if (this.props.actionName === "update") {
      let studentUpdate = {
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        age: this.state.age,
        sex: this.state.sex,
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        address: this.state.address,
      };

      // console.log("Student Update:",studentUpdate)
      // event.preventDefault();
      this.props.handleUpdate(studentUpdate);
    }
    else if(this.props.actionName==="add"){
      let studentAddSave = {
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        age: this.state.age,
        sex: this.state.sex,
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        address: this.state.address,
      }
      this.props.handleAddSave(studentAddSave)
    }
    event.preventDefault();
  };
  render() {
    let { actionName } = this.props;
    let elementButton = "";
    if (actionName === "") {
      elementButton = (
        <button type="submit" className="btn btn-primary me-2">
          Close
        </button>
      );
    } else if (actionName === "update") {
      elementButton = (
        <button
          type="submit"
          className="btn btn-primary me-2"
          onClick={this.handleSubmit}
        >
          Update
        </button>
      );
    }else if(actionName==="add"){
      elementButton = (
        <button
          type="submit"
          className="btn btn-primary me-2"
          onClick={this.handleSubmit}
        >
          Add
        </button>);
    }
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  // value={student.studentId}
                  value={this.state.studentId}
                  name="studentId"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  // value={student.studentName}
                  value={this.state.studentName}
                  name="studentName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  //  value={student.age}
                  value={this.state.age}
                  name="age"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  // value={student.sex}
                  value={this.state.sex}
                  name="sex"
                  onChange={this.handleChange}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  // value={student.birthDate}
                  value={this.state.birthDate}
                  name="birthDate"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  //  value={student.birthPlace}
                  value={this.state.birthPlace}
                  name="birthPlace"
                  onChange={this.handleChange}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"ĐN"}>Đà Nẵng</option>
                  <option value={false}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  //  value={student.address}
                  value={this.state.address}
                  name="address"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {/* <button type="submit" className="btn btn-primary me-2">
              Submit
            </button> */}
            {elementButton}
          </form>
        </div>
      </div>
    );
  }
}
