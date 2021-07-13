function Validation(){
    this.blankValueCheck = function(value,spanID){
        if(!value){
            getID(spanID).innerHTML = 'Xin hãy nhập thông tin';
            return false;
        }
        else{
            getID(spanID).innerHTML = '';
            return true;
        }
    };

    this.CheckAcount = function(data,value,spanID){
        let isval = data.every((account) => {
            return account.taiKhoan !== value;
        })
        if(!isval){
            getID(spanID).innerHTML = 'Tài khoản đã tồn tại';
            return false;
        }else{
            getID(spanID).innerHTML = '';
            return true;
        }
    }
    this.passwordCheck = function(value,spanID){
        let lengthVal = /^([a-zA-Z0-9\d@$!%*?&]{6,8})$/;
        let UpcaseLeter = /(?=.*?[A-Z])/;
        let numberLeter = /(?=.\d)/;
        let specialLeter = /(?=.*[@$!%*?&])/;
        let numberNote = (numberLeter.test(value))? '':'Ít nhất một ký tự số. '
        if(lengthVal.test(value)){
            var lengthNote = '';
        }
        else{
            lengthNote = "6-8 ký tự. "
        }
        if (UpcaseLeter.test(value)){
            var upcaseNote = '';
        }
        else{
            upcaseNote = 'Ít nhất một chữ in hoa. ';
        }
        var specialNote = (specialLeter.test(value))? '':'Ít nhất một ký tự đặc biệt.';

        getID(spanID).innerHTML = lengthNote + numberNote + upcaseNote + specialNote;
        if(lengthNote == '' && upcaseNote == '' && specialNote == '' && numberNote == ''){
            return true;
        }
        else{
            return false;
        }
    };
    this.CheckName = function(value,spanID){
        let numberLeter = /(?=.\d)/;
        let specialLeter = /(?=.*[@$!%*?&])/;
        var specialNote = (specialLeter.test(value))? 'Chứa ký tự đặc biệt. ':'';
        let numberNote = (numberLeter.test(value))? 'Chứa ký tự số. ':''
        if(specialNote == '' && numberNote == '' ){
            getID(spanID).innerHTML = '';
            return true;
        }else{
            getID(spanID).innerHTML = 'Sai định dạng ' + specialNote + numberNote;
            return false;
        }
    };
    this.EmailCheck = function(value,spanID){
        var el = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (el.test(value)){
            getID(spanID).innerHTML = '';
            return true;
        }
        else{
            getID(spanID).innerHTML = 'Sai định dạng Email';
            return false;
        }
    };
    this.characterLengthCheck = function(value,max,spanID){
        if(value.length <= max){
            getID(spanID).innerHTML = '';
            return true;
        }
        else{
            getID(spanID).innerHTML = 'Số ký tự vượt quá giới hạn cho phép'; 
            return false;
        }
    };
    this.CheckSelect = function(value,spanID){
        if(value == 'Chọn loại người dùng'|| value == 'Chọn ngôn ngữ'){
            getID(spanID).innerHTML = 'Hãy chọn đối tượng';
            return false;
        }
        else{
            getID(spanID).innerHTML = '';
            return true;
        }
    }
}