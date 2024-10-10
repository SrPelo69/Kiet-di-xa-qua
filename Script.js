document.getElementById("R")?.addEventListener('submit', function(e) {
    e.preventDefault();
    const Tên = document.getElementById('RU').value;
    const Mật = document.getElementById('RP').value;
    if (localStorage.getItem(Tên)) {
        alert("đã tồn tại")
    } else {
        localStorage.setItem(Tên, Mật);
        alert("Success");
        window.location.href = "login.html";

    }
});
document.getElementById("LI")?.addEventListener('submit', function(e) {
    e.preventDefault();
    const Tên = document.getElementById('LIU').value;
    const Mật = document.getElementById('LIP').value;
    const StoredPassword = localStorage.getItem(Tên)
    if (StoredPassword === Mật) {
        localStorage.setItem('LIU', Tên)
        alert("Success")
        window.location.href = "home.html";
        } else {
            alert("Sai mật khẩu hoặc đăng nhập")
        }

})
