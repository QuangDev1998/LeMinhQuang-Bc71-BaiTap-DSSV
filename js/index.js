var dssv = [];
var dataJson = localStorage.getItem("DSSV_JSON");
if (dataJson != null) {
  var dataArr = JSON.parse(dataJson);
  for (var i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
    dssv.push(sv);
  }
  renderDSSV(dssv);
}

function themSv() {
  var sv = layThongTinTuForm();
  //  kiểm tra Mã
  var isValid = kiemTraTrung(sv.ma, dssv);
  // kiểm tra email
  isValid =
    isValid & kiemTraRong("spanEmailSV", sv.email) && kiemTraEmail(sv.email);
  // kiểm tra tên
  isValid = isValid & kiemTraRong("spanTenSV", sv.ten);
  if (isValid) {
    dssv.push(sv);
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_JSON", dataJson);
    renderDSSV(dssv);
  }
  // dssv.push(sv);
  // renderDSSV(dssv);
}
function xoaSv(id) {
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    if (sv.ma == id) {
      viTri = i;
    }
  }
  if (viTri != -1) {
    dssv.splice(viTri, 1);
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_JSON", dataJson);
    renderDSSV(dssv);
  }
}
function suaSv(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    document.getElementById("txtMaSV").disabled = true;
    showThongTinLenForm(dssv[viTri]);
  }
}
function capNhatSinhVien(sv) {
  document.getElementById("txtMaSV").disabled = false;

  var sv = layThongTinTuForm();
  var viTri = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  if (viTri !== -1) {
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_JSON", dataJson);
    dssv[viTri] = sv;
    renderDSSV(dssv);
  }
}

function resetForm() {
  document.getElementById("formQLSV").reset();
}
