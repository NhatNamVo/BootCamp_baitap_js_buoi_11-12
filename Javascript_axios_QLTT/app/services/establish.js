


function getID(id){
    return document.getElementById(id);
}

function GetFileName(imageUrl){
    return imageUrl.split('\\').pop();   
}

function ResetForm(){
    getID('TaiKhoan').value = '';
    getID('HoTen').value = '';
    getID('MatKhau').value = '';
    getID('Email').value = '';
    getID('HinhAnh').value = '';
    getID('loaiNguoiDung').value = 'Chọn loại người dùng';
    getID('loaiNgonNgu').value = 'Chọn ngôn ngữ';
    getID('MoTa').value = '';
    setTimeout(() => {
        noteDisplay('');
    }, 3000); 
}

function noteDisplay(note){
    getID('noteStatus').innerHTML = note;
}

function LoadData(member){
    getID('TaiKhoan').value = member.taiKhoan;
    getID('HoTen').value = member.hoTen;
    getID('MatKhau').value = member.matKhau;
    getID('Email').value = member.email;
    getID('HinhAnh').value = member.hinhAnh;

    getID('loaiNguoiDung').value = member.loaiND;
    getID('loaiNgonNgu').value = member.ngonNgu;
    getID('MoTa').value = member.moTa;
}


function CheckValidation(valid,memberData){
    let isVal = true;
    isVal &= valid.blankValueCheck(getID('TaiKhoan').value,'noteAcc') && valid.CheckAcount(memberData,getID('TaiKhoan').value,'noteAcc');
    isVal &= valid.blankValueCheck(getID('MatKhau').value,'notePass') && valid.passwordCheck(getID('MatKhau').value,'notePass');
    isVal &= valid.blankValueCheck(getID('HoTen').value,'noteName') && valid.CheckName(getID('HoTen').value,'noteName');
    isVal &= valid.blankValueCheck(getID('Email').value,'noteEmail') && valid.EmailCheck(getID('Email').value,'noteEmail');
    isVal &= valid.blankValueCheck(getID('HinhAnh').value,'noteImage');
    isVal &= valid.CheckSelect(getID('loaiNguoiDung').value,'noteTypeUser');
    isVal &= valid.CheckSelect(getID('loaiNgonNgu').value,'noteLanguage');
    isVal &= valid.blankValueCheck(getID('MoTa').value,'noteDescript') && valid.characterLengthCheck(getID('MoTa').value,60,'noteDescript');
    
    return isVal;
}