export function Generate() {
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userNumber = document.getElementById("userNumber");
  const btnGenerate = document.getElementById("generate");
  const loading = document.querySelector(".loading");
  const qrImage = document.querySelector(".qr-code");

  btnGenerate.onclick = async () => {
    qrImage.src = "";
    let userNameValue = userName.value;
    let userEmailValue = userEmail.value;
    let userNumberValue = userNumber.value;
    let allValues = `${userNameValue}${userEmailValue}${userNumberValue}`;
    loading.style.display = "block";
    if (
      userNameValue.length == 0 ||
      userEmailValue.length == 0 ||
      userNumberValue.length == 0
    ) {
      alert("Please fill all inputs");
      loading.style.display = "none";
    } else {
      let imageSource = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${allValues}`;
      let data = await fetch(imageSource);
      let response = await data.blob();
      let url = URL.createObjectURL(response);
      qrImage.src = url;
      loading.style.display = "none";
    }
  };
}
