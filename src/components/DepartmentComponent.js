import React, {Component} from "react";
import {Card, CardTitle, CardBody, CardText } from 'reactstrap';

// Presentational Component
class RenderDept extends Component {
    render(){
        return(
            //Render Department dung props cua Department Component
            <Card>
                <CardTitle className="m-2">{this.props.dept.name}</CardTitle>
                    <CardBody>
                        <CardText>Số lượng nhân viên: {this.props.dept.numberOfStaff}</CardText>
                    </CardBody>
            </Card>        
        );
    }
}


//Container components
class Department extends Component {    
    render(){
        //Dung map() de fetch toan bo data tu props cua MainComponent
        const departments = this.props.departments.map((department) => {
            return(
                <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
                    <RenderDept dept={department} />
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row shadow m-3">
                    {departments}
                </div>
            </div>
        );
    }
}

export default Department;