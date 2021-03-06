import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas = [
    {
        "ProductName": "iPhone Xs Max 512GB",
        "Price": "39.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xs Max 256GB",
        "Price": "35.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xs 256GB",
        "Price": "32.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xs Max 64GB",
        "Price": "29.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-600x600.jpg"
    },
    {
        "ProductName": "iPhone X 256GB",
        "Price": "27.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image" : "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xs 64GB",
        "Price": "26.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600.jpg"
    },
    {
        "ProductName": "iPhone 8 Plus 256GB",
        "Price": "25.790.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-hh-600x600-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xr 256GB",
        "Price": "23.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190326/iphone-xr-256gb-white-600x600.jpg"
    },
    {
        "ProductName": "iPhone X 64GB",
        "Price": "20.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-21-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xr 128GB",
        "Price": "21.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-red-600x600.jpg"
    },
    {
        "ProductName": "iPhone 8 Plus 64GB",
        "Price": "18.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xr 64GB",
        "Price": "17.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-black-600x600.jpg"
    },
    {
        "ProductName": "iPhone 7 Plus 32GB",
        "Price": "12.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg"
    },
    {
        "ProductName": "iPhone 7 32GB",
        "Price": "10.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-hh-600x600.jpg"
    },
    {
        "ProductName": "iPhone 6s Plus 32GB",
        "Price": "8.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-600x600.jpg"
    },
    {
        "ProductName": "ASUS Zenfone Max Pro M2",
        "Price": "5.990.000",
        "Company": "Asus",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/195577/asus-zenfone-max-pro-m2-600x600.jpg"
    },
    {
        "ProductName": "ASUS Zenfone Max Pro M1",
        "Price": "3.790.000",
        "Company": "Asus",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/162326/asus-zenfone-max-pro-m1-blue-silver-600x600.jpg"
    },
    {
        "ProductName": "BlackBerry Evolve",
        "Price": "7.990.000",
        "Company": "Blackberry",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/199756/blackberry-evolve-black-600x600.jpg"
    },
    {
        "ProductName": "Coolpad N5",
        "Price": "2.390.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/200521/coolpad-n5-black-600x600.jpg"
    },
    {
        "ProductName": "Coolpad Mega 5",
        "Price": "2.190.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/194435/coolpad-mega-5-blue-600x600.jpg"
    },
    {
        "ProductName": "Coolpad N5C",
        "Price": "1.990.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/198842/coolpad-n5c-white-600x600.jpg"
    },
    {
        "ProductName": "Coolpad N3D",
        "Price": "1.890.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image" :"https://cdn.tgdd.vn/Products/Images/42/193504/coolpad-n3d-blue-600x600.jpg"
    },
    {
        "ProductName": "Coolpad N3C",
        "Price": "1.590.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image" :"https://cdn.tgdd.vn/Products/Images/42/197806/coolpad-n3c-gray-600x600.jpg"
    },
    {
        "ProductName": "Coolpad N3 mini",
        "Price": "1.190.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/193503/coolpad-n3-mini-600x600.jpg"
    },
    {
        "ProductName": "Coolpad F129",
        "Price": "350.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/193501/coolpad-f129-black-600x600.jpg"
    },
    {
        "ProductName": "Coolpad F126",
        "Price": "280.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/193500/coolpad-f126-black-600x600.jpg"
    },
    {
        "ProductName": "Coolpad F116",
        "Price": "230.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/42/193499/coolpad-f116-8-600x600.jpg"
    },
    {
        "ProductName": "Coolpad F113",
        "Price": "200.000",
        "Company": "Coolpad",
        "Distributor": "Thegioididong",
        "image" : "https://cdn.tgdd.vn/Products/Images/42/193498/coolpad-f113-1-600x600.jpg"
    },
    {
        "ProductName": "iPhone Xs Max 64GB",
        "Price": "29.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897089206763744_iPhone-XS-max-dd.png"
    },
    {
        "ProductName": "iPhone Xs Max 256GB",
        "Price": "35.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897089206763744_iPhone-XS-max-dd.png"
    },
    {
        "ProductName": "iPhone Xs Max 512GB",
        "Price": "39.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897089206763744_iPhone-XS-max-dd.png"
    },
    {
        "ProductName": "iPhone Xs 64GB",
        "Price": "26.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897091709878495_iPhone-XS-dd.png"
    },
    {
        "ProductName": "iPhone Xs 512GB",
        "Price": "37.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897094499388249_iPhone-XS-512-dd.png"
    },
    {
        "ProductName": "iPhone XR 64GB",
        "Price": "17.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897095667284565_iphoneXR-1o.png"
    },
    {
        "ProductName": "iPhone XR 128GB",
        "Price": "21.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897095667284565_iphoneXR-1o.png"
    },
    {
        "ProductName": "iPhone X 64GB",
        "Price": "20.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/11/24/636471207542719059_1o.png"
    },
    {
        "ProductName": "iPhone 8 Plus 64GB",
        "Price": "18.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/19/636808376716627503_iphone-8-plus.png"
    },
    {
        "ProductName": "iPhone 8 64GB",
        "Price": "16.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/19/636808371335821798_iphone-8.png"
    },
    {
        "ProductName": "iPhone 7 Plus 32GB",
        "Price": "13.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836629047810556_iphone-7-plus.png"
    },
    {
        "ProductName": "iPhone 6s Plus 32GB",
        "Price": "8.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812389651952379_ip7-daidien.png"
    },
    {
        "ProductName": "iPhone 7 32GB",
        "Price": "10.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/1/27/636526515750427366_1o-6splus-32.png"
    },
    {
        "ProductName": "iPhone 6s 32GB",
        "Price": "7.990.000 ",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/12/636906738052542436_iphone-6s-32gb-dd.png"
    },
    {
        "ProductName": "Honor 10",
        "Price": "9.990.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/6/28/636658027774801003_honor10-1o.png"
    },
    {
        "ProductName": "Honor 8X 128GB",
        "Price": "6.990.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image":"https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/10/22/636758262962197455_honor8x-xanh-1.jpg"
    },
    {
        "ProductName": "Honor Play",
        "Price": "6.590.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/3/636689138915615510_honor-play-1o.png"
    },
    {
        "ProductName": "Honor 8X 64GB",
        "Price": "4.990.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/10/5/636743663066658185_honor8x-1o.png"
    },
    {
        "ProductName": "Honor 20 Lite",
        "Price": "5.990.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/18/636911803137177712_honor-20-lite-dd.png"
    },
    {
        "ProductName": "Honor 10 Lite 64GB",
        "Price": "5.290.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/27/636868638786660923_honor-8a-32gb-daidien.png"
    },
    {
        "ProductName": "Honor 8A 32 GB",
        "Price": "2.990.000 ",
        "Company": "Honor",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/27/636868638786660923_honor-8a-32gb-daidien.png"
    },
    {
        "ProductName": "Apple Macbook Air 2017 i5/8GB/128GB (MQD32SA/A)",
        "Price": "21.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-600x600.jpg"
    },
    {
        "ProductName": "Apple Macbook Air 2018 i5/8GB/128GB (MREE2SA/A)",
        "Price": "31.490.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/197305/apple-macbook-air-mree2sa-a-i5-8gb-128gb-133-gold-600x600.jpg"
    },
    {
        "ProductName": "Apple Macbook Air 2018 i5/8GB/128GB (MRE82SA/A)",
        "Price": "31.490.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/201560/apple-macbook-air-mre82sa-a-i5-8gb-128gb-2018-2-600x600.jpg"
    },
    {
        "ProductName": "Apple Macbook Air 2018 i5/8GB/256GB (MREF2SA/A)",
        "Price": "36.490.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/197201/apple-macbook-air-mref2sa-a-i5-8gb-256gb-133-gold-600x600.jpg"
    },
    {
        "ProductName": "Apple Macbook Pro 2018 Touch i5/8GB/256GB (MR9Q2SA/A)",
        "Price": "43.990.000",
        "Company": "Apple",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/184384/apple-macbook-pro-touch-mr9q2sa-a-2018-thumb-1-600x600.jpg"
    },
    {
        "ProductName": "MSI Prestige PS42 i5 8250U (476VN)",
        "Price": "19.490.000",
        "Company": "Msi",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/194260/msi-prestige-ps42-i5-8250u-4gb-256gb-14-win10-33397-thumb-123-600x600.jpg"
    },
    {
        "ProductName": "MSI GF63 8RD i7 8750H (221VN)",
        "Price": "26.990.000",
        "Company": "Msi",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/44/187931/msi-gf63-8rd-221vn-thumb-600x600.jpg"
    },
    {
        "ProductName": "Macbook Air 13 128GB MQD32SA/A (2017)",
        "Price": "21.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/2/636688207026520043_mabookair-1o.png"
    },
    {
        "ProductName": "Macbook Air 13 128GB 2018",
        "Price": "30.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/19/636808253336771661_Macbook-air-2018.png"
    },
    {
        "ProductName": "Macbook Air 13 256GB 2018",
        "Price": "35.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/19/636808253336771661_Macbook-air-2018.png"
    },
    {
        "ProductName": "Macbook Pro 13 inch 128GB (2017)",
        "Price": "33.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/16/636700374319479202_macpro13.png"
    },
    {
        "ProductName": "Macbook Pro 13 inch 256GB (2017)",
        "Price": "38.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/16/636700374319479202_macpro13.png"
    },
    {
        "ProductName": "Macbook Pro 13 Touch Bar 256 GB (2018)",
        "Price": "43.490.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/16/636700354271169202_touchbar13-1o.png"
    },
    {
        "ProductName": "Macbook Pro 13 Touch Bar 512 GB (2018)",
        "Price": "49.990.000",
        "Company": "Apple",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/16/636700354271169202_touchbar13-1o.png"
    },
    {
        "ProductName": "Haier S1 HR-13M/Celeron N3350",
        "Price": "4.499.000",
        "Company": "Haier",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/9/14/636725502566874262_HASP-Haier-HR-13M-Xam-7.jpg"
    },
    {
        "ProductName": "Haier S1 HR-13MZ/Pentium N4200",
        "Price": "7.490.000",
        "Company": "Haier",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/9/14/636725502566874262_HASP-Haier-HR-13M-Xam-7.jpg"
    },
    {
        "ProductName": "MSI GF63 8RC-203VN/I5-8300H",
        "Price": "21.990.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/7/24/636680365175681802_MSI-GF63-8RD-1.png"
    },
    {
        "ProductName": "MSI GF63 8RD-218VN/i7-8750H",
        "Price": "25.490.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/7/24/636680365175681802_MSI-GF63-8RD-1.png"
    },
    {
        "ProductName": "MSI PS42 8M-296VN/i5-8250U",
        "Price": "20.990.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/9/4/636716674080294712_MSI-PS42-8M.png"
    },
    {
        "ProductName": "MSI GF63 8RC-452VN/CORE I5-8300H/8GB+16GB Optane/1TB/1050 4GB/WIN10",
        "Price": "22.990.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/7/24/636680365175681802_MSI-GF63-8RD-1.png"
    },
    {
        "ProductName": "MSI GF63 9SC-400VN/Core I5-9300H/8GB/256GB SSD/VGA 4GB/Win10",
        "Price": "24.490.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/15/636935410499869900_msi-gf63-9sc-dd.png"
    },
    {
        "ProductName": "MSI GL63 8RCS-068VN/Core i5-8300H/8GB/256GB SSD/WIN10",
        "Price": "20.990.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/16/636936231914513816_msi-gl63-8rcs-068vn-dd.png"
    },
    {
        "ProductName": "MSI PS42 8MO-250VN/Core i5-8265U/8GB/512GB SSD/WIN10",
        "Price": "22.990.000",
        "Company": "Msi",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/16/636936242503909718_msi-ps42-8mo-250vn-dd.png"
    },
    {
        "ProductName": "Huawei Mediapad T5 10.1 inch",
        "Price": "5.690.000",
        "Company": "Huawei",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/196071/huawei-mediapad-t5-33397-thumb123-600x600.jpg"
    },
    {
        "ProductName": "Huawei MediaPad T3 10 (2017)",
        "Price": "4.490.000",
        "Company": "Huawei",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/111223/huawei-mediapad-t3-10-1-33397-thumb-600x600.jpg"
    },
    {
        "ProductName": "Huawei MediaPad T3 8.0 (2017)",
        "Price": "3.990.000",
        "Company": "Huawei",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/110578/huawei-mediapad-t3-80-gold-600x600.jpg"
    },
    {
        "ProductName": "Huawei MediaPad T3 7 (2019)",
        "Price": "2.590.000",
        "Company": "Huawei",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/197374/huawei-mediapad-t3-7-2018-33397-thumbmau-vang-600x600.png"
    },
    {
        "ProductName": "Lenovo Tab E10 TB-X104L",
        "Price": "3.590.000",
        "Company": "Lenovo",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-600x600.jpg"
    },
    {
        "ProductName": "Lenovo Tab 4 16GB (TB-8504X)",
        "Price": "3.690.000",
        "Company": "Lenovo",
        "Distributor": "Thegioididong",
        "image":"https://cdn.tgdd.vn/Products/Images/522/163814/lenovo-tab-4-8-tb-8504x-thumb-600x600.jpg"
    },
    {
        "ProductName": "Lenovo Tab 7 Essential 16GB (TB-7304X)",
        "Price": "2.390.000",
        "Company": "Lenovo",
        "Distributor": "Thegioididong",
        "image":"https://cdn.tgdd.vn/Products/Images/522/151073/lenovo-tab-7-essential-16gb-tb-7304x-thumb-600x600.jpg"
    },
    {
        "ProductName": "Lenovo Tab E7 TB-7104I",
        "Price": "1.990.000",
        "Company": "Lenovo",
        "Distributor": "Thegioididong",
        "image": "https://cdn.tgdd.vn/Products/Images/522/197627/lenovo-tab-e7-tb-7104i-33397-thumb1-600x600.jpg"
    },
    {
        "ProductName": "Huawei MediaPad T3 7.0 Prestige",
        "Price": "2.090.000 ",
        "Company": "Huawei",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/10/24/636444518526948294_Huawei-MediaPad-T3-7.0-Prestige.png"
    },
    {
        "ProductName": "Huawei MediaPad T3 10.0",
        "Price": "4.490.000 ",
        "Company": "Huawei",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/15/636489483127289555_1o.png"
    },
    {
        "ProductName": "Huawei MediaPad T3 8.0 (2017)",
        "Price": "3.990.000 ",
        "Company": "Huawei",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/9/21/636415815469288933_Huawei%20MediaPad%20T3%208.0%20(2017).png"
    },
    {
        "ProductName": "Huawei MediaPad T5 10",
        "Price": "5.690.000 ",
        "Company": "Huawei",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/7/636797950350030000_Huawei-MediaPad-T5-10.png"
    },
    {
        "ProductName": "MediaPad T3 7.0 - 16GB",
        "Price": "2.590.000 ",
        "Company": "Huawei",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/1/22/636837428428852562_huawei-mediapad-T3-7-daidien.png"
    },
    {
        "ProductName": "Masstel Tab 7 Plus",
        "Price": "1.790.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/1/7/636824555329922754_HBGT-MASSTEL-%20Tab-7PLUS%20(2).jpg"
    },
    {
        "ProductName": "Masstel Tab 10 Plus",
        "Price": "2.790.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image":"https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/12/5/636796257193650000_masstel-tab-10-plus.png"
    },
    {
        "ProductName": "Masstel Tab 10",
        "Price": "2.790.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/11/1/636451462274806827_1o.png"
    },
    {
        "ProductName": "Masstel Tab 7",
        "Price": "1.790.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/11/28/636474859598584238_1o.jpg"
    },
    {
        "ProductName": "Masstel Tab 8",
        "Price": "2.290.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/9/22/636416726401755434_Masstel%20Tab%208.jpg"
    },
    {
        "ProductName": "Masstel Tab 7 LTE",
        "Price": "1.990.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image":"https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/1/9/636511062185930481_masstel-tab7-lte-1o.jpg"
    },
    {
        "ProductName": "Masstel Tab 8 Plus",
        "Price": "2.290.000 ",
        "Company": "Masstel",
        "Distributor": "Fptshop",
        "image": "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/19/636861635846520694_masstel-tab-8-plus-daidien.png"
    }
    ]
    
    input(name){
      console.log(name);
    }
    
}