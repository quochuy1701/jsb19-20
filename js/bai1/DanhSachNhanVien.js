function DanhSachNhanVien() {
    this.mangNV = [];
   
    this.themNV = function (nv) {
        //thêm phần tử sc vào mảng
        this.mangNV.push(nv)
    }
    this.timVitri = function (maNVXoa) {
        var viTri = 0;
        viTri = this.mangNV.findIndex(function(nv) {
            return maNVXoa == nv.taiKhoan
        })
        return viTri;
    }
    this.xoaNV = function (maNVXoa) {
        var viTri = this.timVitri(maNVXoa);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1)
        }
    }
    this.capNhatNV= function(nvCapNhat){
        var viTri =this.timVitri(nvCapNhat.taiKhoan)
        if(viTri>-1){
            dsnv.mangNV[viTri]= nvCapNhat
        }
    }
}
DanhSachNhanVien.prototype.timKiemNV=function(tuKhoaTK){
    var mangKetQua = []
    //B1 chuyển tukhoatk sang chữ thường (toLovercase),xóa khoảng trắng
    var tuKhoa = tuKhoaTK.toLowerCase().replace(/\s/g, "")
    this.mangNV.map(function(nv){
         //B2 chuyển tukhoatk sang chữ thường (toLowerCase()),xóa khoảng trắng
        var loai= nv.Loai.toLowerCase().replace(/\s/g, "");
        //b3 :so sánh tên sv có chứa từ kiếm không
        var viTri = loai.indexOf(tuKhoa);
        console.log(viTri);
        if(viTri >-1){
            mangKetQua.push(nv)
        }
    })
    return mangKetQua
}