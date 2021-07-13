function DataRender(memberData){
    const htmls = memberData.map((data,index)=>{
        const stt = index + 1;
        return `
            <tr>
                <td>${stt}</td>
                <td>${data.taiKhoan}</td>
                <td class="px-2">
                    <span class="row m-auto text-center" >
                        <input class="inputPass col-8" type ="password" readonly value = "${data.matKhau}">
                        <span class="col-4 show" onclick="show(${index})"><i class="fa fa-eye"></i></span>
                        <span class="col-4 hide" onclick="hide(${index})" style="display:none;"><i class="fa fa-eye-slash"></i></span>
                    </span>
                    
                </td>
                <td>${data.hoTen}</td>
                <td>${data.email}</td>
                <td>${data.ngonNgu}</td>
                <td>${data.loaiND}</td>
                <td>
                    <button class="btn btn-primary" onclick="UpdateMember('${data.id}')">Sửa</button>
                    <button class="btn btn-danger" onclick="DeleteMember('${data.id}')">Xóa</button>
                </td>
            </tr>
        `
    });
    getID('tblDanhSachNguoiDung').innerHTML = htmls.join('');
}