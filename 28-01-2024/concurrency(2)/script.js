// #### CONCURRENCY (2. KISIM) -- ASYNC/AWAIT #### //

async function asenkronIslem() {
  console.log("İşlem başlatıldı...");

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("service response success");
    }, 3000);
  }).then((data) => {
    console.log(data);
  });

  console.log("İşlem tamamlandı...");
}

asenkronIslem();
