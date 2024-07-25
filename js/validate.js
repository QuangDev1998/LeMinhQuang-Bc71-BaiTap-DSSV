var showMessage = function (id, message) {
  document.getElementById(id).innerHTML = `<strong>${message}</strong>`;
};
function kiemTraRong(idErr, value) {
  if (value.length == 0) {
    showMessage(idErr, "Trường hợp này không được để trống");
    return false;
  } else {
    showMessage(idErr, "");
    return true;
  }
}

var kiemTraTrung = function (maSV, dssv) {
  var index = dssv.findIndex(function (item) {
    return maSV == item.ma;
  });
  if (index == -1) {
    showMessage("spanMaSV", "");
    return true;
  } else {
    showMessage("spanMaSV", "Mã sinh viên đã tồn tại");
    return false;
  }
};

var kiemTraEmail = function (email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email)) {
    showMessage("spanEmailSV", "");
    return true;
  } else {
    showMessage("spanEmailSV", "Email không hợp lệ");
    return false;
  }
};
