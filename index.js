const express = require("express");
const app = express();

let products = [
    {
        id: "recZkNf2kwmdBcqd0",
        name: "accent chair",
        price: 25999,
        image: "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        colors: ["#ff0000", "#00ff00", "#0000ff"],
        company: "marcos",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
        shipping: true,
    },
    {
        id: "recEHmzvupvT8ZONH",
        name: "albany sectional",
        price: 109999,
        image: "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
        colors: ["#000", "#ffb900"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
    },
    {
        id: "rec5NBwZ5zCD9nfF0",
        name: "albany table",
        price: 309999,
        image: "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
        colors: ["#ffb900", "#0000ff"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "kitchen",
    },
    {
        id: "recd1jIVIEChmiwhe",
        name: "armchair",
        price: 12599,
        image: "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
        colors: ["#000", "#00ff00", "#0000ff"],
        company: "marcos",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "bedroom",
        shipping: true,
    },
    {
        id: "recoM2MyHJGHLVi5l",
        name: "bar stool",
        price: 4099,
        image: "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
        colors: ["#000"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "dining",
        shipping: true,
    },
    {
        id: "recotY5Nh00DQFdkm",
        name: "dining table",
        price: 42999,
        image: "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960",
        colors: ["#00ff00", "#0000ff", "#ff0000"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "dining",
        shipping: true,
    },
    {
        id: "rec1Ntk7siEEW9ha1",
        name: "emperor bed",
        price: 23999,
        image: "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
        colors: ["#0000ff", "#000"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "bedroom",
        shipping: true,
    },
    {
        id: "recNZ0koOqEmilmoz",
        name: "entertainment center",
        price: 59999,
        image: "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
        featured: true,
        colors: ["#000", "#ff0000"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
        shipping: true,
    },
    {
        id: "recrfxv3EwpvJwvjq",
        name: "high-back bench",
        price: 39999,
        image: "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
        featured: true,
        colors: ["#000", "#00ff00"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
        shipping: true,
    },
    {
        id: "recoW8ecgjtKx2Sj2",
        name: "leather chair",
        price: 20099,
        image: "https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
        colors: ["#ff0000", "#ffb900", "#00ff00"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "bedroom",
    },
    {
        id: "recEOA6qtDag1hRbU",
        name: "leather sofa",
        price: 99999,
        image: "https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31",
        colors: ["#00ff00", "#0000ff"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
    },
    {
        id: "recoAJYUCuEKxcPSr",
        name: "modern bookshelf",
        price: 31999,
        image: "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
        featured: true,
        colors: ["#ffb900", "#ff0000", "#00ff00"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "kids",
    },
    {
        id: "recQ0fMd8T0Vk211E",
        name: "modern poster",
        price: 3099,
        image: "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359",
        colors: ["#000"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
        shipping: true,
    },
    {
        id: "rec7CjDWKRgNQtrKe",
        name: "shelf",
        price: 30999,
        image: "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507",
        colors: ["#00ff00"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
    },
    {
        id: "recF0KpwlkF7e8kXO",
        name: "simple chair",
        price: 109999,
        image: "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8",
        colors: ["#0000ff"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
        shipping: true,
    },
    {
        id: "recs5BSVU3qQrOj4E",
        name: "sofa set",
        price: 129999,
        image: "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4",
        colors: ["#00ff00", "#ffb900"],
        company: "marcos",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
        shipping: true,
    },
    {
        id: "recroK1VD8qVdMP5H",
        name: "suede armchair",
        price: 15999,
        image: "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7",
        colors: ["#ffb900"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
    },
    {
        id: "rec7JInsuCEHgmaGe",
        name: "utopia sofa",
        price: 79999,
        image: "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
        featured: true,
        colors: ["#ff0000", "#00ff00"],
        company: "liddy",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "living room",
    },
    {
        id: "rec3jeKnhInKHJuz2",
        name: "vase table",
        price: 120999,
        image: "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
        featured: true,
        colors: ["#ff0000"],
        company: "marcos",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
    },
    {
        id: "recv2ohxljlK2FZO7",
        name: "wooden bed",
        price: 250099,
        image: "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771",
        colors: ["#000", "#ffb900"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "bedroom",
    },
    {
        id: "recJIjREF3dlFi3sR",
        name: "wooden desk",
        price: 150999,
        image: "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e",
        colors: ["#000"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
        shipping: true,
    },
    {
        id: "recm7wC8TBVdU9oEL",
        name: "wooden desk",
        price: 40099,
        image: "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
        colors: ["#0000ff", "#00ff00"],
        company: "ikea",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "office",
    },
    {
        id: "rectfNsySwAJeWDN2",
        name: "wooden table",
        price: 234999,
        image: "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
        featured: true,
        colors: ["#ffb900", "#ff0000"],
        company: "caressa",
        description:
            "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        category: "kitchen",
        shipping: true,
    },
]
app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(products)
});

app.get("/single", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let filters = req.query
    let filtered = products.filter(product => (product.id.includes(filters.id)));
    filtered[0]["stock"] = 10;
    filtered[0]["images"] = [
        {
        "id": "attub6EG88kJKuYs8",
        "width": 1000,
        "height": 667,
        "url": "https://dl.airtable.com/.attachments/ebb5ac101474bf42ce7b7b6e951a771f/2b6c65d2/product-4.jpeg",
        "filename": "product-4.jpeg",
        "size": 49641,
        "type": "image/jpeg",
        "thumbnails": {
        "small": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/59fcc70cfeab3da4693712159bee8ca3/0c40f77c",
        "width": 54,
        "height": 36
        },
        "large": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "width": 768,
        "height": 512
        },
        "full": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/4706812bbec1ae52b26e0e6256962be1/a9d38756",
        "width": 3000,
        "height": 3000
        }
        }
        },
        {
        "id": "attaeT2Dex98o2jfW",
        "width": 1000,
        "height": 667,
        "url": "https://dl.airtable.com/.attachments/2e6d87e2f54c6ad01a7ef1face6632a9/1e19467f/extra-1.jpeg",
        "filename": "extra-1.jpeg",
        "size": 102108,
        "type": "image/jpeg",
        "thumbnails": {
        "small": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/b8877836fb489f99a42718c6dde2793d/582e7058",
        "width": 54,
        "height": 36
        },
        "large": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/09577db41b63b4d120f3f543e7914791/caa7704b",
        "width": 768,
        "height": 512
        },
        "full": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/ed87be670187bc3fca3a9bb7d0332540/c070d749",
        "width": 3000,
        "height": 3000
        }
        }
        },
        {
        "id": "attWsZasaaRD1P7mm",
        "width": 1000,
        "height": 714,
        "url": "https://dl.airtable.com/.attachments/b5a64591e56b4f7bcb9b1c56e6a91081/1be9cbcb/extra-2.jpeg",
        "filename": "extra-2.jpeg",
        "size": 84418,
        "type": "image/jpeg",
        "thumbnails": {
        "small": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/5258edc1a360e7116822c4982fb11b93/7acd14b6",
        "width": 50,
        "height": 36
        },
        "large": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/11fbfdd91116fe5dacaf853548d6bd83/a08e93de",
        "width": 717,
        "height": 512
        },
        "full": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/8e0e3d1c698fbe240dc7a7c2b86f8cfc/53712c6a",
        "width": 3000,
        "height": 3000
        }
        }
        },
        {
        "id": "attTvaiDcADaAItLw",
        "width": 1000,
        "height": 650,
        "url": "https://dl.airtable.com/.attachments/dc88b6fa9615924ee47549ef2f87b369/c9e0dc21/extra-3.jpeg",
        "filename": "extra-3.jpeg",
        "size": 107838,
        "type": "image/jpeg",
        "thumbnails": {
        "small": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/39cf66eedac80d58ecf36cb98b8c68c5/c6ef3441",
        "width": 55,
        "height": 36
        },
        "large": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/8818e6aeae6f1a0aa19582bb02bed5db/0ac07e54",
        "width": 788,
        "height": 512
        },
        "full": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/97143fdfc12ef6c52e293565e181d859/2d805bc9",
        "width": 3000,
        "height": 3000
        }
        }
        },
        {
        "id": "attdxQmF0aCH5I32F",
        "width": 1000,
        "height": 667,
        "url": "https://dl.airtable.com/.attachments/7ea022f3758863174ca50144fe6395ef/77fda066/extra-4.jpeg",
        "filename": "extra-4.jpeg",
        "size": 99481,
        "type": "image/jpeg",
        "thumbnails": {
        "small": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/f193d17cba6f33bc2d89f4d7b3153936/ccafc31c",
        "width": 54,
        "height": 36
        },
        "large": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/3bb35cb0c2092e50b96979d221f47c0b/29175d0b",
        "width": 768,
        "height": 512
        },
        "full": {
        "url": "https://dl.airtable.com/.attachmentThumbnails/d030506a328ec8525b38c6b2ead12ee4/c8269e7b",
        "width": 3000,
        "height": 3000
        }
        }
        }
        ],
    console.log(filtered)
    res.json(filtered)
})
app.listen(process.env.port || 5000);
console.log("Web Server is listening at port " + (process.env.port || 5000));
