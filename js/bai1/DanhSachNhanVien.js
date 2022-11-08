function DanhSachNhanVien() {
    this.mangNV = []
   
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