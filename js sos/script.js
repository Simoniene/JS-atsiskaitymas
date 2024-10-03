const cardWrapper = document.getElementById("card-wrapper");
const getThriftStoreStuff = async () => {
  const response = await fetch(
    "https://66fa9365afc569e13a9c45b8.mockapi.io/thriftStore"
  );
  const data = await response.json();
  return data;
};
const buildCards = (thriftObjects) => {
  thriftObjects.sort((a, b) => b.price - a.price);
  thriftObjects.forEach((thriftObject) => {
    const card = document.createElement("a");
    card.setAttribute("class", "card");
    card.href = `./ThriftObject/index.html?id=${thriftObject.id}`;
    const title = document.createElement("h2");
    const img = document.createElement("img");
    const productDescription = document.createElement("h3");
    const location = document.createElement("h3");
    const price = document.createElement("h2");

    title.innerText = thriftObject.title;
    img.src = thriftObject.coverUrl;
    img.setAttribute("class", "card-img");
    productDescription.innerText = thriftObject.productDescription;
    location.innerText = thriftObject.location;
    price.innerText = `${thriftObject.price} EUR`;
    card.append(title, img, productDescription, location, price);
    cardWrapper.append(card);
  });
};
const startApp = async () => {
  const thriftObjects = await getThriftStoreStuff();
  buildCards(thriftObjects);
};
startApp();
