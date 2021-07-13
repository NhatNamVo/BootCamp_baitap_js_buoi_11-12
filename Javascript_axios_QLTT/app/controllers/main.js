
const memberList = new MemberData;
const isvalid = new Validation;
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
let memberData;

function getData(){
    memberList.getData().then((member)=>{
        DataRender(member.data);
        memberData = member.data;
    }).catch((error)=>{
        alert(error);
    })
}

getData();

getID('btnThemNguoiDung').addEventListener('click', ()=>{
    noteDisplay('');
    $('.modal-footer .btn-success').style.display = 'block';
    $('.modal-footer .btn-info').style.display = 'none';
});
getID('imageLink').addEventListener('change', function(){
    let imageUrl = getID('imageLink').value;  
    getID('HinhAnh').value = GetFileName(imageUrl);
});
$('.modal-footer .btn-success').addEventListener('click',()=>{
    noteDisplay('');
    let account = getID('TaiKhoan').value;
    let name = getID('HoTen').value;
    let pass = getID('MatKhau').value;
    let email = getID('Email').value;
    let image = getID('HinhAnh').value;
    let typeUser = getID('loaiNguoiDung').value;
    let languageType = getID('loaiNgonNgu').value;
    let description = getID('MoTa').value;

    let isVal = CheckValidation(isvalid,memberData);

    if (!isVal) return;

    const newMember = new MemberProperties(account,name,pass,email,typeUser,languageType,description,image);
    memberList.PostData(newMember).then(function(response){
        getData();
        noteDisplay('Thêm thành công');
        ResetForm();
    }).catch(function(error){
        noteDisplay('Thêm thất bại');
    });
});

function DeleteMember(id){
    memberList.DeleteData(id).then(function(response){
        getData();
    }).catch(function(error){
        alert(error);
    });
}

function UpdateMember(id){

    memberList.GetRequestedData(id).then(function(response){
        console.log(response.data);
        LoadData(response.data);
    }).catch(function(error){
        alert(error);
    })

    getID('btnThemNguoiDung').click();
    $('.modal-footer .btn-success').style.display = 'none';
    $('.modal-footer .btn-info').style.display = 'block';
    $('.modal-footer .btn-info').setAttribute('onclick',`update(${id})`);
}

function update(id){
    let account = getID('TaiKhoan').value;
    let name = getID('HoTen').value;
    let pass = getID('MatKhau').value;
    let email = getID('Email').value;
    let image = getID('HinhAnh').value;
    let typeUser = getID('loaiNguoiDung').value;
    let languageType = getID('loaiNgonNgu').value;
    let description = getID('MoTa').value;
    
    let isVal = CheckValidation(isvalid,memberData);

    if (!isVal) return;

    const updateMember = new MemberProperties(account,name,pass,email,typeUser,languageType,description,image);
    memberList.PutUpdateData(id,updateMember).then((response) =>{
        getData();
        noteDisplay('Cập nhật thành công');
        ResetForm();
        setTimeout(() => {
            $('.close').click();
        }, 1000);
    }).catch((error) =>{
        noteDisplay('Cập nhật thất bại');
    });
}

getID('TaiKhoan').addEventListener('input',()=>{
    isvalid.blankValueCheck(getID('TaiKhoan').value,'noteAcc') && isvalid.CheckAcount(memberData,getID('TaiKhoan').value,'noteAcc');
});
getID('MatKhau').addEventListener('input',()=>{
    isvalid.blankValueCheck(getID('MatKhau').value,'notePass') && isvalid.passwordCheck(getID('MatKhau').value,'notePass');
});
getID('HoTen').addEventListener('input',()=>{
    isvalid.blankValueCheck(getID('HoTen').value,'noteName') && isvalid.CheckName(getID('HoTen').value,'noteName');
});
getID('Email').addEventListener('input',()=>{
    isvalid.blankValueCheck(getID('Email').value,'noteEmail') && isvalid.EmailCheck(getID('Email').value,'noteEmail');
});
getID('MoTa').addEventListener('focus',()=>{
    getID('MoTa').addEventListener('input',()=>{
        getID('noteDescript').innerHTML = "Số ký tự không vượt quá 60";
    });
});

getID('MoTa').addEventListener('change',()=>{
    isvalid.blankValueCheck(getID('MoTa').value,'noteDescript') && isvalid.characterLengthCheck(getID('MoTa').value,60,'noteDescript');
});