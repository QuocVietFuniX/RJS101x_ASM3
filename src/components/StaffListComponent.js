import React, {useState} from "react";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import {Link} from 'react-router-dom';

// Presentational component (const) dùng để Render danh sách từng nhân viên
const RenderStaffItem = ({staff}) => {
    return(
        <Link to={`/staff/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardBody>
                    <CardSubtitle>{staff.name}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    )
}

// Biến thể hiện số cột theo yêu cầu của người dùng
const cols = [
    {
        column_name: '6 cột',
        value: 'col-2 mt-3 mb-3'
    },
    // {
    //     column_name: '4 cột',
    //     value: 'col-3 mt-3 mb-3'
    // },
    {
        column_name: '3 cột',
        value: 'col-4 mt-3 mb-3'
    },
    {
        column_name: '2 cột',
        value: 'col-6 mt-3 mb-3'
    },
    {
        column_name: '1 cột',
        value: 'col-12 mt-3 mb-3'
    },
]

// Presentational component (const) 
const StaffList = (props) => {
    //Sử dụng hook useState hiển thị số cột, tìm kiếm tên nhân viên, sắp xếp mã số nhân viên
    const [column,setColumn] = useState('col-6 col-md-4 col-lg-2 mt-3 mb-3');
    const [name,setName] = useState("");
    const [sortId, setSortID] = useState(false);

    //Dùng hàm map để kéo toàn bộ mảng ra màn hình, có sử dụng hàm sort để sắp xếp, hàm filter để lọc tìm kiếm
    const staffList = props.staffs.sort((a,b)=>sortId?a.id - b.id : b.id - a.id)
    .filter((val)=>{
        if(name === "")
            return val;
        else if(val.name.toLowerCase().includes(name.toLowerCase()))
            return val;        
        return 0;
    }).map((val) => {
        return(
            <div className={column} key={val.id}>
                <RenderStaffItem staff={val} />
            </div>
        );
    });

    //Render giao diện Staff list
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-3">
                    <h3>Nhân viên</h3>                    
                </div>
                {/* Nút bấm chức năng sắp xếp theo mã số nhân viên từ A-Z và từ Z-A */}
                <div className="col-3 mt-3">
                    <button className="btn btn-success" onClick={()=>setSortID(!sortId)}>Sắp xếp theo MSNV</button>
                </div>
                {/* Select chọn số cột theo yêu cầu người dùng */}
                <div className="col-3 mt-3">
                    <select className="custom-select" onChange={e=>setColumn(e.target.value)}>
                            <option selected>Chọn số cột để trình bày</option>
                        {cols.map(col=><option value={col.value}>{col.column_name}</option>)}
                    </select>
                </div>
                {/* Ô tìm kiếm, chỉ cần gõ là thay đổi trạng thái dữ liệu */}
                <div className="col-3 mt-3">
                    <input className="form-control"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Tìm kiếm nhân viên ..." />
                </div>                
            </div>            
                <div className="col-12">
                    <hr />
                </div>
            
            <div className="row shadow mb-5 mt-5">
                {staffList}
            </div>
        </div>
    )
}


export default StaffList;