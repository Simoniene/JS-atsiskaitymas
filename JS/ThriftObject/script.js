//   if (response.status === 200) {
//     warningMessage.innerText = "Deleted successfully";
//     setTimeout(() => {
//       window.location.replace("../index.html");
//     }, 2000);
//   }
// });

////////////////////////////////////////////
const title = document.getElementById("title");
const thriftImg = document.getElementById("thrift-img");
const thriftImg1 = document.getElementById("thrift-img1");
const thriftImg2 = document.getElementById("thrift-img2");
const productDescription = document.getElementById("product-description");
const locationPlace = document.getElementById("location");
const price = document.getElementById("price");
const deleteBtn = document.getElementById("delete-btn");
const warningMessage = document.getElementById("warning-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");
// console.log(id);

const getThriftObject = async () => {
  const response = await fetch(
    `https://66fa9365afc569e13a9c45b8.mockapi.io/thriftStore/${id}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
const deleteThriftObject = async () => {
  const response = await fetch(
    `https://66fa9365afc569e13a9c45b8.mockapi.io/thriftStore/${id}`,
    {
      method: "DELETE",
    }
  );
  // console.log(data);
  return response;
};

const buildScreen = (data) => {
  title.innerText = data.title;
  thriftImg.src = data.coverUrl;
  thriftImg1.src = data.coverUrl1;
  thriftImg2.src = data.coverUrl2;
  productDescription.innerText = data.productDescription;
  locationPlace.innerText = data.location;
  price.innerText = data.price;
};

const initPage = async () => {
  const thriftObject = await getThriftObject();
  buildScreen(thriftObject);
};
initPage();

deleteBtn.addEventListener("click", async () => {
  const response = await deleteThriftObject();
  if (response.status === 200) {
    warningMessage.innerText = "Deleted successfully";
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
});
