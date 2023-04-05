import React, { Component } from 'react';

export default class Control extends Component {
  constructor(props){
    super(props);
    this.state={
      searchData:""
    }
  }
  handleAdd =()=>{
    this.props.handleAdd();
  }
  // handleAdd thứ nhât là 1 arrow fuction, handleAdd thứ 2 là để gọi lại
  //khi người dùng cập nhật lại dữ liệu trên form , cập nhật lại state 
  handleChange =(event)=>{
    let name =event.target.name ;
    let value =event.target.value ;
    this.setState({
      [name]:value,
    })
  }
//xử lý khi click vào nút tìm kiếm 
handleSearch = (event)=>{
  this.props.handleSearch(this.state.searchData)
  event.preventDefault();
}
//xu ly sx 
handleSort =(event)=>{
  let value = event.target.value;
  let arr = value.split ('-');//vi du arr[0]=studentName;arr[1]=ASC )
  //chuyen du lieu ve App component
  this.props.handleSort(arr[0],arr[1]);
}
  render() {
    return (
      
          <div className="card-header">
          <div className="row">
            <div className="col-3 ">
              <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleAdd}>
                
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6 ">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                  name="searchData"
                  value={this.state.searchData}
                  onChange={this.handleChange}
                />
                <button className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}>
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control" onChange={this.handleSort}>
                <option value="">Sắp xếp</option>
                <option value="studentName-ASC">Student Name (ASC)</option>
                <option value="studentName-DESC">Student Name (DESC)</option>
                <option value="age-ASC">Age (ASC) </option>
                <option value="age-desc">Age (DESC)</option>
              </select>
            </div>
          </div>
        </div>
      
    )
  }
}
