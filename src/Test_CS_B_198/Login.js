const uname = document.getElementById("unmae").value;
const pass = document.getElementById("pass").value;

const validate = (e) => {
  e.preventDefault();
  if (uname.length < 5) {
    alert("Username is incorrect");
    return false;
  }
  if (pass.length < 5) {
    alert("Password is incorrect");
    return false;
  }
  document.querySelector("form").submit();
};
