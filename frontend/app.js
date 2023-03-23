// request objemiz
const request = new Request();

const data = request.get("url");
//  request sınıfının get objesi ile aldığımız promise i waitForPromise fonksiyonuna paramtre olarak veriyoruz
const apiResponse = waitForPromise(data);
console.log(apiResponse.status);
console.log(apiResponse.data);
console.log(apiResponse.error);

// waitForPromise fonksiyonumuz
function waitForPromise(promise) {
  // APIResponse sınıfından loading fonksiyonu ile status ü loading olan bir nesne olusturuyoruz
  const apiResponse = APIResponse.loading();

  // parametre olarak aldığımız promise ile apiResponse objemizi güncelliyoruz
  promise
    .then((data) => {
      apiResponse.status = "success";
      apiResponse.data = data;
    })
    .catch((error) => {
      apiResponse.status = "error";
      apiResponse.error = error;
    });

  // apiResponse objemizi döndürüyoruz
  return apiResponse;
}
