function Validation() {
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
    this.checkidNV = function (valInput, msgErr, spanID, mangNV) {
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
    this.checktaikhoanNV= function (valInput, msgErr, spanID){
      
        if (valInput.length >= 4 && valInput.length <= 6) {
            document.getElementById(spanID).innerHTML = "";
            return true

        }

        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkName = function (valInput, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        // if(valInput.match(pattern) && valInput.length >= 6 && valInput.length <= 8){

        // }
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
    this.checkNgaylam = function (valInput, msgErr, spanID) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkDropdown = function (selectID, msgErr, spanID) {
        var index = document.getElementById(selectID).selectedIndex;
        if (index == 0) {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true

    }
    this.checkgioLam = function (valInput, msgErr, spanID) {
        if (valInput >= 80 && valInput <= 200) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkLuong = function (valInput, msgErr, spanID) {
        if (valInput >= 1000000 && valInput <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

}
