function check() {
    var form=document.form; 
    if(!form.name.value){
        alert("이름을 입력해주세요.");
        form.name.focus();
        return;
    }
    if(form.name.value !='/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/'){
        alert("한글만 작성 가능");
        form.name.focus();
    }
    form.submit();
} 
function numberInput() {
   if(event.keyCode > 47 && event.keyCode <58 || event.keyCode === 8
        || event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 46) {
        return;
   }
   else{
    event.preventDefault();
   }
}


function foundpassPage() {
    window.location.href="found_pwd.html"
}
function signPage() {
    window.location.href="sign_page.html"
}
function foundidPage() {
    window.location.href="found_id.html"
}
function loginPage() {
    window.location.href="login.html"
}