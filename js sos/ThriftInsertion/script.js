const title = document.getElementById("title");
const img = document.getElementById("coverUrl");
const productDescription = document.getElementById("productDescription");
const locationPlace = document.getElementById("location");
const price = document.getElementById("price");
const returnBtn = document.getElementById("return-btn");
const successMessage = document.createElement("p");
successMessage.innerText = "Thrift object was added successfully";
successMessage.setAttribute("class", "success");
const insertThrift = async () => {
  const data = {
    title: title.value,
    img: img.value,
    productDescription: productDescription.value,
    locationPlace: location.value,
    price: price.value,
  };
  //   console.log("data", data);
  const response = await fetch(
    "https://66fa9365afc569e13a9c45b8.mockapi.io/thriftStore",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  //   console.log(response);
  if (response.status === 201) {
    document.body.append(successMessage);
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
};
const btn = document.getElementById("add-btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log();
  insertThrift();
});
returnBtn.addEventListener("click", async () => {
  window.history.back("../index.html");
});
