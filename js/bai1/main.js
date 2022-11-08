const validation = new Validation()
var dsnv = new DanhSachNhanVien()
function getELE(id) {
    return document.getElementById(id);
}
function themNhanVien() {
    var taiKhoan = document.getElementById("tknv").value;
    var tenNV = getELE("name").value
    var email = getELE("email").value
    var matKhau = getELE("password").value
    var ngayLam = getELE("datepicker").value
    var luong = getELE("luongCB").value
    var chucVu = getELE("chucvu").value
    var gioLam = getELE("gioLam").value
    taiKhoan = taiKhoan.replace(/\s/g, "");
    var isValid = true;
    isValid &= validation.checkEmpty(taiKhoan, "tài khoản không được để trống", "spantaikhoan") && validation.checkidNV(taiKhoan, "tài khoản không được trùng", "spantaikhoan", dsnv.mangNV)&& validation.checktaikhoanNV(taiKhoan, "tài khoản không đúng định dạng", "spantaikhoan")
    isValid &= validation.checkEmpty(tenNV, "tên nhân viên không được để trống", "spanten") && validation.checkName(tenNV, "tên nhân viên chưa đúng định dạng", "spanten")
    isValid &= validation.checkEmpty(email, "email không được để trống ", "spanemail") && validation.checkEmail(email, "email chưa đúng định dạng", "spanemail")
    isValid &= validation.checkEmpty(matKhau, "mật khẩu  không được để trống ", "spanMatKhau") && validation.checkPass(matKhau, "mật khẩu chưa đúng định dạng", "spanMatKhau")
    isValid &= validation.checkEmpty(ngayLam, "ngày làm  không được để trống ", "spanngaylam") && validation.checkNgaylam(ngayLam, "ngày làm chưa đúng định dạng", "spanngaylam")
    isValid &= validation.checkDropdown("chucvu", "bạn chưa chọn chức vụ ", "spanchucvu");
    isValid &= validation.checkEmpty(gioLam, "giờ làm không được để trống ", "spangiolam") && validation.checkgioLam(gioLam, "giờ làm chưa đúng định dạng", "spangiolam")
    isValid &= validation.checkEmpty(luong, "lương cơ bản không được để trống ", "spanluongcb") &&validation.checkLuong(luong, "lương chưa đúng định dạng", "spanluongcb")
    if (isValid) {
        var nv = new NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)
        nv.xepLoai();
        nv.tinhLuong();
        dsnv.themNV(nv);
        // console.log(dsnv.mangNV)
        hienThiTable(dsnv.mangNV);
        setlocalstorage();
    }
}
function setlocalstorage() {

    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));


}
function getLocalstorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"))
        hienThiTable(dsnv.mangNV);
    }
}
getLocalstorage()

function hienThiTable(mang) {

    var content = "";
    mang.map(function (nv, index) {
        console.log(nv);
        content += `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuomg}</td>
        <td>${nv.Loai}</td>
        <td>
        <button class="btn btn-danger"onclick="xoaNhanVien('${nv.taiKhoan}')"> xóa
    
        </button>
        </td>
        </tr>`

    })
    getELE("tableDanhSach").innerHTML = content

}
function xoaNhanVien(maNVXoa) {
    dsnv.xoaNV(maNVXoa);
    setlocalstorage();//cập nhất local
    getLocalstorage();//lấy local đã update lên hiển thị
}
function capNhatNhanVien() {
    var taiKhoan = document.getElementById("tknv").value;
    var tenNV = getELE("name").value
    var email = getELE("email").value
    var matKhau = getELE("password").value
    var ngayLam = getELE("datepicker").value
    var luong = getELE("luongCB").value
    var chucVu = getELE("chucvu").value
    var gioLam = getELE("gioLam").value
    var nvCapnhat = new NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)
    taiKhoan = taiKhoan.replace(/\s/g, "");
    var isValid = true;
    isValid &= validation.checkEmpty(taiKhoan, "tài khoản không được để trống", "spantaikhoan") && validation.checkidNV(taiKhoan, "tài khoản không được trùng", "spantaikhoan", dsnv.mangNV)
    isValid &= validation.checkEmpty(tenNV, "tên nhân viên không được để trống", "spanten") && validation.checkName(tenNV, "tên nhân viên chưa đúng định dạng", "spanten")
    isValid &= validation.checkEmpty(email, "email không được để trống ", "spanemail") && validation.checkEmail(email, "email chưa đúng định dạng", "spanemail")
    isValid &= validation.checkEmpty(matKhau, "mật khẩu  không được để trống ", "spanMatKhau") && validation.checkPass(matKhau, "mật khẩu chưa đúng định dạng", "spanMatKhau")
    isValid &= validation.checkDropdown("chucvu", "bạn chưa chọn chức vụ ", "spanchucvu");
    isValid &= validation.checkEmpty(gioLam, "giờ làm không được để trống ", "spangiolam") && validation.checkgioLam(gioLam, "giờ làm chưa đúng định dạng", "spangiolam")
    isValid &= validation.checkEmpty(luong, "lương cơ bản không được để trống ", "spanluongcb") &&validation.checkLuong(luong, "lương chưa đúng định dạng", "spanluongcb")
    if (isValid) {
        nvCapnhat.xepLoai();
        nvCapnhat.tinhLuong();
        dsnv.capNhatNV(nvCapnhat);
        setlocalstorage();
        getLocalstorage();
    }
}
function timKiemloaiNV() {
    var tuKhoaNhanVien = getELE("searchName").value;
    console.log(tuKhoaNhanVien)
    var mangKQ= dsnv.timKiemNV(tuKhoaNhanVien);
    hienThiTable(mangKQ)
}
getELE("btnTimNV").onclick = timKiemloaiNV
getELE("searchName").onkeydown = timKiemloaiNV