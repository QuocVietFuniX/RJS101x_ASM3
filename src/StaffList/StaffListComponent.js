import React, { Component } from "react";
import dateFormat from "dateformat";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";


class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        onSelectedStaff: null,
        columDefault: "col-12 col-md-6 col-lg-4 mt-3"
        };
    }

    onStaffSelect(staff) {
        this.setState({
        onSelectedStaff: staff
        });
    }

    onColumnSelect(col) {
        this.setState({
        columDefault: col
        });
    }

    renderStaff(staff) {
        if (staff != null) {
        return (
            <div className="col-12">
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardBody>
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                    Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                    Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                </CardBody>
            </Card>
            </div>
        );
        } else {
        return <div></div>;
        }
    }

    render() {
        const staffList = this.props.staffs.map((staff) => {
        return (
            <div className={this.state.columDefault}>
            <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                </CardBody>
            </Card>
            </div>
        );
        });
        return (
        <div className="container">
            <div className="row m-3">
            <button
            onClick={() => this.onColumnSelect("col-md-12 mt-1")}
            className="btn btn-success mr-3"
            >
            1 cột
            </button>
            <button
            onClick={() => this.onColumnSelect("col-md-6 mt-1")}
            className="btn btn-success mr-3"
            >
            2 cột
            </button>
            <button
            onClick={() => this.onColumnSelect("col-md-4 mt-1")}
            className="btn btn-success mr-3"
            >
            3 cột
            </button>
            <button
            onClick={() => this.onColumnSelect("col-md-2 mt-1")}
            className="btn btn-success mr-3"
            >
            6 cột
            </button>
            </div>
            <div className="row">{staffList}</div>
            <div className="row mt-5">
                {this.renderStaff(this.state.onSelectedStaff)}
            </div>
            </div>
        );
        }
    }

export default StaffList;