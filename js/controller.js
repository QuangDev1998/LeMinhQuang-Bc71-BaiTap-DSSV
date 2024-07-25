function renderDSSV(svArr) {
  var contentHTML = "";
  for (var i = 0; i < svArr.length; i++) {
    sv = svArr[i];
    var contentTr = ` <tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.matKhau}</td>
    <td>${sv.tinhDTB()}</td>
    <td>
           <button onclick="xoaSv('${
             sv.ma
           }')" class="btn btn-danger" >Xóa</button>
           <button onclick="suaSv('${
             sv.ma
           }')" class="btn btn-danger" >Sửa</button>
           </td>
    </tr> `;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  return sv;
}
function showThongTinLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
