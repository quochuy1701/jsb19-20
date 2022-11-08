function Validation(){
    this.checkEmpty = function (valInput, msgErr, spanID) {
        if (valInput.trim() == "") {
            //!không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        //hợp lê
        document.getElementById(spanID).innerHTML = "";
        return true
    }
    this.checkidNV= function (valInput, msgErr, spanID, mangNV){
        var isExist = mangNV.some(function (nv) {
            return nv.taiKhoan == valInput
        });
        if (isExist) {
            //không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            return false;

        }
        //hợp lê
        document.getElementById(spanID).innerHTML = "";
        return true
    }
    // this.checktaikhoanNV= function (valInput, msgErr, spanID){
    //    var pattern =/^{4,6}$/;
    //     if (valInput.match(pattern)) {
    //         document.getElementById(spanID).innerHTML = "";
    //         return true

    //     }
  
    //     document.getElementById(spanID).innerHTML = msgErr;
    //     return false;
    // }
    this.checkName = function (valInput, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkEmail = function (valInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkPass = function (valInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkDropdown = function (selectID,msgErr, spanID) {
        var index =document.getElementById(selectID).selectedIndex;
        if (index == 0) {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
            document.getElementById(spanID).innerHTML = "";
            return true

        }
     this.checkgioLam= function(valInput, msgErr, spanID){
        if(80<valInput<200){
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
     }
        
 }
