const puppeteer = require('puppeteer');
var fs = require('fs');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  var url = 'https://umo.vn/';

//   await page.goto(url);


//   // Groups Products
//   const groupProducts = await page.evaluate(() => {
//     let items = document.querySelectorAll('.box-image > a > div > h2');
//     let links = []
//     items.forEach((item) => {
//         links.push ({
//             title: item.innerText
           
//         })
//     })
//     return links;
//   });

//   fs.writeFile('groupProducts.json', JSON.stringify(groupProducts), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

  // BALO LAPTOP
  url = 'https://umo.vn/collections/balo-laptop-thoi-trang?page=1';

  await page.goto(url);

  const laptopBag_Page_1 = await page.evaluate(() => {
      let items = document.querySelectorAll('div.pro-loop');
     
      let products = [];

      items.forEach((item) => {
        var urlImg = item.querySelector('div.product-block > div.product-img > a > picture > img').getAttribute('src');

        var detail = item.querySelector('div.product-block > div.product-detail');
            var name = detail.querySelector('div.box-pro-detail > h3.pro-name > a').innerText;
            var price = detail.querySelector('div.box-pro-detail > div.box-pro-prices  > p').innerText;

        products.push({
                img : urlImg,
                name : name,
                price : price
            })

      })
      return products;
  })

  console.log(laptopBag_Page_1);

  fs.writeFile('laptop_page_1.json', JSON.stringify(laptopBag_Page_1), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  url = 'https://umo.vn/collections/balo-laptop-thoi-trang?page=2';

  await page.goto(url);

   const laptopBag_Page_2 = await page.evaluate(() => {
    let items = document.querySelectorAll('div.pro-loop');
   
    let products = [];

    items.forEach((item) => {
      var urlImg = item.querySelector('div.product-block > div.product-img > a > picture > img').getAttribute('src');

      var detail = item.querySelector('div.product-block > div.product-detail');
          var name = detail.querySelector('div.box-pro-detail > h3.pro-name > a').innerText;
          var price = detail.querySelector('div.box-pro-detail > div.box-pro-prices  > p').innerText;

      products.push({
              img : urlImg,
              name : name,
              price : price
          })

    })
    return products;
})

fs.writeFile('laptop_page_2.json', JSON.stringify(laptopBag_Page_2), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



  // BALO ĐEO CHÉO


  // BALO THỜI TRANG


  // TÚI CHÉO VAI


  // CẶP XÁCH


  // PHỤ KIỆN








  await browser.close()
})()