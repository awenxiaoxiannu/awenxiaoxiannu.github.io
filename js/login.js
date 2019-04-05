$('#login-button').click(function (event) {
    var userName = document.getElementById("userName").value;
    if ("a" == "a") {
        event.preventDefault();
        $('form').fadeOut(500);
        $('#name-text').fadeIn(2000);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "fairy.html";
        }, 1000);
    } else {
        if (userName != "叶婧雯") {
            alert("姓名错误！这好像不是为你准备的");
        } else {
            alert("密码错误！\n提示：你的生日（8位数字，例：19970418）");
        }
    }
});
