function NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuomg = 0
    this.Loai = ""
    //PHƯƠNG THÚC
    this.xepLoai = function (){
        if (this.gioLam >= 192){
            this.Loai ="Nhân viên xuất sắc"
        }else if (this.gioLam >= 192){
            this.Loai ="Nhân viên giỏi"
        }else if (this.gioLam >=160){
            this.Loai ="Nhân viên Khá"
        }else{
            this.Loai ="Nhân viên trung bình"
        }
    }
    this.tinhLuong =function(){
        if(this.chucVu == "Sếp"){
            this.tongLuomg=this.luong * 3
        }
        else if(this.chucVu == "Trưởng phòng"){
            this.tongLuomg=this.luong * 2
        }else{
            this.tongLuomg=this.luong * 1
        }
    }

}
