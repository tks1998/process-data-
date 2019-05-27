import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img1 = 'http://img.2tin.net/uploads/images/2018/04/30/160e92b60e8992d94a06ee28cf7d49a5_0f33db43c9a0f5f9d2259aa399f37bc0/160e92b60e8992d94a06ee28cf7d49a5.jpg';
  img2 = 'data:image/jpeg;base64,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'

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