if (!self.define) {
  let e,
    c = {};
  const s = (s, a) => (
    (s = new URL(s + ".js", a).href),
    c[s] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = c), document.head.appendChild(e);
        } else (e = s), importScripts(s), c();
      }).then(() => {
        let e = c[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[t]) return;
    let i = {};
    const f = (e) => s(e, t),
      d = { module: { uri: t }, exports: i, require: f };
    c[t] = Promise.all(a.map((e) => d[e] || f(e))).then((e) => (n(...e), i));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "./next/static/chunks/1015.94038834003ecc16.js",
          revision: "94038834003ecc16",
        },
        {
          url: "./next/static/chunks/1015.94038834003ecc16.js.map",
          revision: "de04e545c0ce4620a2258ad3def84b69",
        },
        {
          url: "./next/static/chunks/1074.5cf1db60aa90c6ee.js",
          revision: "5cf1db60aa90c6ee",
        },
        {
          url: "./next/static/chunks/1074.5cf1db60aa90c6ee.js.map",
          revision: "b0af9a62cb11a2f8ed4d32e42962f032",
        },
        {
          url: "./next/static/chunks/1276.c545d79d7b512f2e.js",
          revision: "c545d79d7b512f2e",
        },
        {
          url: "./next/static/chunks/1276.c545d79d7b512f2e.js.map",
          revision: "1e588a05f987f4d4ef2e18acccdc798a",
        },
        {
          url: "./next/static/chunks/1371.d14b1b2d998a8414.js",
          revision: "d14b1b2d998a8414",
        },
        {
          url: "./next/static/chunks/1371.d14b1b2d998a8414.js.map",
          revision: "424e9ccb641c539e70357690719b7103",
        },
        {
          url: "./next/static/chunks/1382.f4a1e5c86fc61407.js",
          revision: "f4a1e5c86fc61407",
        },
        {
          url: "./next/static/chunks/1382.f4a1e5c86fc61407.js.map",
          revision: "1e52f57bdf2454884c7758b6f6084696",
        },
        {
          url: "./next/static/chunks/140.77e5932dcabae2c5.js",
          revision: "77e5932dcabae2c5",
        },
        {
          url: "./next/static/chunks/140.77e5932dcabae2c5.js.map",
          revision: "46e4064e31831456828261c5487e414b",
        },
        {
          url: "./next/static/chunks/1407.32b6eae093ebf899.js",
          revision: "32b6eae093ebf899",
        },
        {
          url: "./next/static/chunks/1407.32b6eae093ebf899.js.map",
          revision: "481696e50f04731326bad23db8ecab2e",
        },
        {
          url: "./next/static/chunks/1577.a7fecf7e86a3a117.js",
          revision: "a7fecf7e86a3a117",
        },
        {
          url: "./next/static/chunks/1577.a7fecf7e86a3a117.js.map",
          revision: "8ecb02b169b3fa0d78909baf3fc1fff9",
        },
        {
          url: "./next/static/chunks/1583.a4e2786fb4597924.js",
          revision: "a4e2786fb4597924",
        },
        {
          url: "./next/static/chunks/1583.a4e2786fb4597924.js.map",
          revision: "2b026a10c59cacd9911418c3e5c4b218",
        },
        {
          url: "./next/static/chunks/1622.d132dffa857e29a8.js",
          revision: "d132dffa857e29a8",
        },
        {
          url: "./next/static/chunks/1622.d132dffa857e29a8.js.map",
          revision: "d3cc92ea52707297e843ff4fafb47cf7",
        },
        {
          url: "./next/static/chunks/1649.4ec382952dc25b83.js",
          revision: "4ec382952dc25b83",
        },
        {
          url: "./next/static/chunks/1649.4ec382952dc25b83.js.map",
          revision: "d5014a44fe80419a6308e6a3b5668cc9",
        },
        {
          url: "./next/static/chunks/1756.db0f7b6ffc6d8af3.js",
          revision: "db0f7b6ffc6d8af3",
        },
        {
          url: "./next/static/chunks/1756.db0f7b6ffc6d8af3.js.map",
          revision: "1386667edf27dc9e7eb83342c46fa188",
        },
        {
          url: "./next/static/chunks/1870.c57011a0e5281c95.js",
          revision: "c57011a0e5281c95",
        },
        {
          url: "./next/static/chunks/1870.c57011a0e5281c95.js.map",
          revision: "5a8e509ee2beb0bd9d1300f8c6bcda5b",
        },
        {
          url: "./next/static/chunks/1895.f971217b2b72c546.js",
          revision: "f971217b2b72c546",
        },
        {
          url: "./next/static/chunks/1895.f971217b2b72c546.js.map",
          revision: "8b36b54aaff00ef9c88673f261ec5c08",
        },
        {
          url: "./next/static/chunks/1933.f1a40c0e21846339.js",
          revision: "f1a40c0e21846339",
        },
        {
          url: "./next/static/chunks/1933.f1a40c0e21846339.js.map",
          revision: "708a78232ceb0971c4cfb559b31eb501",
        },
        {
          url: "./next/static/chunks/1951.1ed7ce8448d05dec.js",
          revision: "1ed7ce8448d05dec",
        },
        {
          url: "./next/static/chunks/1951.1ed7ce8448d05dec.js.map",
          revision: "0a5ee14e3ecc4c02c8e71468d5fd3919",
        },
        {
          url: "./next/static/chunks/2017.2a51186bc509dc55.js",
          revision: "2a51186bc509dc55",
        },
        {
          url: "./next/static/chunks/2017.2a51186bc509dc55.js.map",
          revision: "5d9cda42d6cdde516103726deb2eb533",
        },
        {
          url: "./next/static/chunks/2021.ad974a74f2f939e7.js",
          revision: "ad974a74f2f939e7",
        },
        {
          url: "./next/static/chunks/2021.ad974a74f2f939e7.js.map",
          revision: "f31dce0bfbb53ac9c64e008047bce26d",
        },
        {
          url: "./next/static/chunks/2154.ab7a6ccebd8c0ebd.js",
          revision: "ab7a6ccebd8c0ebd",
        },
        {
          url: "./next/static/chunks/2154.ab7a6ccebd8c0ebd.js.map",
          revision: "77312e0600fcc8e1ba2b0a47b4748927",
        },
        {
          url: "./next/static/chunks/2188.1af577b3de928972.js",
          revision: "1af577b3de928972",
        },
        {
          url: "./next/static/chunks/2188.1af577b3de928972.js.map",
          revision: "2d90accc58a4ed4246e1c6ee3f624bd2",
        },
        {
          url: "./next/static/chunks/2221.c831574050c1cbc3.js",
          revision: "c831574050c1cbc3",
        },
        {
          url: "./next/static/chunks/2221.c831574050c1cbc3.js.map",
          revision: "1ff466bb93f63ddf13958bbd6e0cb6b6",
        },
        {
          url: "./next/static/chunks/2442.bacc2ebf4df97ac6.js",
          revision: "bacc2ebf4df97ac6",
        },
        {
          url: "./next/static/chunks/2442.bacc2ebf4df97ac6.js.map",
          revision: "40a961936ca6a570aa1a75273bcc08fb",
        },
        {
          url: "./next/static/chunks/2473.2daca86285ed1014.js",
          revision: "2daca86285ed1014",
        },
        {
          url: "./next/static/chunks/2473.2daca86285ed1014.js.map",
          revision: "0ed391625ea99bc9e04efb6bfaf9b174",
        },
        {
          url: "./next/static/chunks/2626.cb4bb04e2d509780.js",
          revision: "cb4bb04e2d509780",
        },
        {
          url: "./next/static/chunks/2626.cb4bb04e2d509780.js.map",
          revision: "df857cbae4dfceb57b7b39db51918865",
        },
        {
          url: "./next/static/chunks/268.1be2f29c512a3bcb.js",
          revision: "1be2f29c512a3bcb",
        },
        {
          url: "./next/static/chunks/268.1be2f29c512a3bcb.js.map",
          revision: "94896c465240bd18f14892047f5563d8",
        },
        {
          url: "./next/static/chunks/2704.d135de3abc03c7b5.js",
          revision: "d135de3abc03c7b5",
        },
        {
          url: "./next/static/chunks/2704.d135de3abc03c7b5.js.map",
          revision: "1def86230c6cc6b20bf32312bfaad6a0",
        },
        {
          url: "./next/static/chunks/275.8101b818d5ee40b9.js",
          revision: "8101b818d5ee40b9",
        },
        {
          url: "./next/static/chunks/275.8101b818d5ee40b9.js.map",
          revision: "afdcafdca944d4aed26820233cb37d29",
        },
        {
          url: "./next/static/chunks/2796.d98db4f3939cbf74.js",
          revision: "d98db4f3939cbf74",
        },
        {
          url: "./next/static/chunks/2796.d98db4f3939cbf74.js.map",
          revision: "408da210733ffb3a9dbf6209b48f1fbd",
        },
        {
          url: "./next/static/chunks/2830.e922792f11906a29.js",
          revision: "e922792f11906a29",
        },
        {
          url: "./next/static/chunks/2830.e922792f11906a29.js.map",
          revision: "63b67df2dfc2279eb226d0f05857de59",
        },
        {
          url: "./next/static/chunks/2885.5be61a9b0e7e6b75.js",
          revision: "5be61a9b0e7e6b75",
        },
        {
          url: "./next/static/chunks/2885.5be61a9b0e7e6b75.js.map",
          revision: "16fe6ed297ef811ca7abedff9b442f72",
        },
        {
          url: "./next/static/chunks/2932.6baf9c37c25fc8ff.js",
          revision: "6baf9c37c25fc8ff",
        },
        {
          url: "./next/static/chunks/2932.6baf9c37c25fc8ff.js.map",
          revision: "a02eb49d8588a70fdd15a9b9bb0d3a59",
        },
        {
          url: "./next/static/chunks/3077.1bacf9d8c41f994a.js",
          revision: "1bacf9d8c41f994a",
        },
        {
          url: "./next/static/chunks/3077.1bacf9d8c41f994a.js.map",
          revision: "c3e83e978902e5ddd2f06e7767bbf987",
        },
        {
          url: "./next/static/chunks/3088.f6c1cdf2aa832459.js",
          revision: "f6c1cdf2aa832459",
        },
        {
          url: "./next/static/chunks/3088.f6c1cdf2aa832459.js.map",
          revision: "e0995969eafe2d17bd3049654cf7869d",
        },
        {
          url: "./next/static/chunks/3162.f786793f75e28562.js",
          revision: "f786793f75e28562",
        },
        {
          url: "./next/static/chunks/3162.f786793f75e28562.js.map",
          revision: "5b4ee79f14b5e69da129d006a523d40e",
        },
        {
          url: "./next/static/chunks/3196.79489da83706f2c5.js",
          revision: "79489da83706f2c5",
        },
        {
          url: "./next/static/chunks/3196.79489da83706f2c5.js.map",
          revision: "6f65f4dae40de0ccd5ad061c98d95c54",
        },
        {
          url: "./next/static/chunks/3230.a689e0aba4273338.js",
          revision: "a689e0aba4273338",
        },
        {
          url: "./next/static/chunks/3230.a689e0aba4273338.js.map",
          revision: "c526ad3af904c36ee491c66705bd2542",
        },
        {
          url: "./next/static/chunks/3268.cff45f6bd369377f.js",
          revision: "cff45f6bd369377f",
        },
        {
          url: "./next/static/chunks/3268.cff45f6bd369377f.js.map",
          revision: "aeb2207bddce0bbcafd44a8077e87099",
        },
        {
          url: "./next/static/chunks/3281.b099bc245a6a1f20.js",
          revision: "b099bc245a6a1f20",
        },
        {
          url: "./next/static/chunks/3281.b099bc245a6a1f20.js.map",
          revision: "9fbf969c0f6ff6608c52239eea3c653e",
        },
        {
          url: "./next/static/chunks/3344.bf0783a29a78209c.js",
          revision: "bf0783a29a78209c",
        },
        {
          url: "./next/static/chunks/3344.bf0783a29a78209c.js.map",
          revision: "893ded410719a4e24944a0b2e768ad80",
        },
        {
          url: "./next/static/chunks/3354-fe0e68b94d2dd797.js",
          revision: "fe0e68b94d2dd797",
        },
        {
          url: "./next/static/chunks/3354-fe0e68b94d2dd797.js.map",
          revision: "c280442325bfe57b4787937ce389f47d",
        },
        {
          url: "./next/static/chunks/3651.2acd0544e5a7f699.js",
          revision: "2acd0544e5a7f699",
        },
        {
          url: "./next/static/chunks/3651.2acd0544e5a7f699.js.map",
          revision: "00dd8fa7b5c9177ac84145f74c2d4f23",
        },
        {
          url: "./next/static/chunks/3730.447cfd4d345b1acd.js",
          revision: "447cfd4d345b1acd",
        },
        {
          url: "./next/static/chunks/3730.447cfd4d345b1acd.js.map",
          revision: "c4c677f2ea785631853ae1844838355e",
        },
        {
          url: "./next/static/chunks/3742.cf1ad5578779c327.js",
          revision: "cf1ad5578779c327",
        },
        {
          url: "./next/static/chunks/3742.cf1ad5578779c327.js.map",
          revision: "4d1f72e96ff683af8ef9deb0531a6a0b",
        },
        {
          url: "./next/static/chunks/3775.f3384465d53040c3.js",
          revision: "f3384465d53040c3",
        },
        {
          url: "./next/static/chunks/3775.f3384465d53040c3.js.map",
          revision: "24377b3d76bde842d2d97a5542ac993c",
        },
        {
          url: "./next/static/chunks/3872.6a8f132a26e7e5fc.js",
          revision: "6a8f132a26e7e5fc",
        },
        {
          url: "./next/static/chunks/3872.6a8f132a26e7e5fc.js.map",
          revision: "6e4f2f31a030c1ec2f17911ed8f99a4a",
        },
        {
          url: "./next/static/chunks/390.6ce9da2ee8353f38.js",
          revision: "6ce9da2ee8353f38",
        },
        {
          url: "./next/static/chunks/390.6ce9da2ee8353f38.js.map",
          revision: "5938a20c6fdaa368ff2cbc9ae65bb86b",
        },
        {
          url: "./next/static/chunks/3953.86fe5280530996f3.js",
          revision: "86fe5280530996f3",
        },
        {
          url: "./next/static/chunks/3953.86fe5280530996f3.js.map",
          revision: "fce493331e7ef052c8a092b870c97ec8",
        },
        {
          url: "./next/static/chunks/3966.5e2cd8f930b74f7e.js",
          revision: "5e2cd8f930b74f7e",
        },
        {
          url: "./next/static/chunks/3966.5e2cd8f930b74f7e.js.map",
          revision: "4e526701b99d0ba24cef4dd650fee475",
        },
        {
          url: "./next/static/chunks/4011.2a9bfa05539a4eab.js",
          revision: "2a9bfa05539a4eab",
        },
        {
          url: "./next/static/chunks/4011.2a9bfa05539a4eab.js.map",
          revision: "b80646900e0c586b49d91546df8335ab",
        },
        {
          url: "./next/static/chunks/4047.c9d095071de2e603.js",
          revision: "c9d095071de2e603",
        },
        {
          url: "./next/static/chunks/4047.c9d095071de2e603.js.map",
          revision: "68c4a20a62bc69b7965cc51371d53e97",
        },
        {
          url: "./next/static/chunks/4079.97c25a8947dbc6a1.js",
          revision: "97c25a8947dbc6a1",
        },
        {
          url: "./next/static/chunks/4079.97c25a8947dbc6a1.js.map",
          revision: "1367cb7813db2e4d6f535c55bde9b2cc",
        },
        {
          url: "./next/static/chunks/4112.f752ce1d2db7ea39.js",
          revision: "f752ce1d2db7ea39",
        },
        {
          url: "./next/static/chunks/4112.f752ce1d2db7ea39.js.map",
          revision: "51e4d6e3efd4453bbf65b2133d94f5e9",
        },
        {
          url: "./next/static/chunks/4197.917b341d26e250a4.js",
          revision: "917b341d26e250a4",
        },
        {
          url: "./next/static/chunks/4197.917b341d26e250a4.js.map",
          revision: "d899d9390c0f2f1f58647f815a5149b1",
        },
        {
          url: "./next/static/chunks/4222.a44a9358b4993dd0.js",
          revision: "a44a9358b4993dd0",
        },
        {
          url: "./next/static/chunks/4222.a44a9358b4993dd0.js.map",
          revision: "8f8c961cc26a0b728768851db8dfed9d",
        },
        {
          url: "./next/static/chunks/4358.6f2c8fa4a92c0a87.js",
          revision: "6f2c8fa4a92c0a87",
        },
        {
          url: "./next/static/chunks/4358.6f2c8fa4a92c0a87.js.map",
          revision: "26fdcf0d45ba9ba0ba00b4af3987c8fa",
        },
        {
          url: "./next/static/chunks/4470.f180025f232c04bd.js",
          revision: "f180025f232c04bd",
        },
        {
          url: "./next/static/chunks/4470.f180025f232c04bd.js.map",
          revision: "3f7a2adcb70610a2dbae68fd40a6d377",
        },
        {
          url: "https://voducduoc.github.io/uni-360/next/static/chunks/4509.5efcf56a0d12efcf.js",
          revision: "5efcf56a0d12efcf",
        },
        {
          url: "https://voducduoc.github.io/uni-360/next/static/chunks/4509.5efcf56a0d12efcf.js.map",
          revision: "0cd0794bd6cc070e0cb3703f656f559e",
        },
        {
          url: "./next/static/chunks/4573.2db9bd96e9777a98.js",
          revision: "2db9bd96e9777a98",
        },
        {
          url: "./next/static/chunks/4573.2db9bd96e9777a98.js.map",
          revision: "32dc8869b0796a88ae2b60a68383b589",
        },
        {
          url: "./next/static/chunks/4674.84caf2ec9d584aa0.js",
          revision: "84caf2ec9d584aa0",
        },
        {
          url: "./next/static/chunks/4674.84caf2ec9d584aa0.js.map",
          revision: "b8621544549aec1f18fdf5760df1b407",
        },
        {
          url: "./next/static/chunks/4727.a53c60d63497922a.js",
          revision: "a53c60d63497922a",
        },
        {
          url: "./next/static/chunks/4727.a53c60d63497922a.js.map",
          revision: "dd76484e4ed3dcc6b76a45427bff6254",
        },
        {
          url: "./next/static/chunks/4936.668e6310e4948d27.js",
          revision: "668e6310e4948d27",
        },
        {
          url: "./next/static/chunks/4936.668e6310e4948d27.js.map",
          revision: "cbe91a9d052925b025f39ddbd3f6b56e",
        },
        {
          url: "./next/static/chunks/4974.3f3673660d9f939b.js",
          revision: "3f3673660d9f939b",
        },
        {
          url: "./next/static/chunks/4974.3f3673660d9f939b.js.map",
          revision: "3e9f2df3933d0c98cbb9e73b345a849e",
        },
        {
          url: "./next/static/chunks/4989.f91a6168b4a3b440.js",
          revision: "f91a6168b4a3b440",
        },
        {
          url: "./next/static/chunks/4989.f91a6168b4a3b440.js.map",
          revision: "1863eb8700b4fb5920241c59750fafc2",
        },
        {
          url: "./next/static/chunks/5035.6ba257a31a9c7f9e.js",
          revision: "6ba257a31a9c7f9e",
        },
        {
          url: "./next/static/chunks/5035.6ba257a31a9c7f9e.js.map",
          revision: "7b0bd7317b791758da7165cf1d8e2a4e",
        },
        {
          url: "./next/static/chunks/5098.3b9bd5e187b3370c.js",
          revision: "3b9bd5e187b3370c",
        },
        {
          url: "./next/static/chunks/5098.3b9bd5e187b3370c.js.map",
          revision: "a9761004bf880dd1bf2583560fe10839",
        },
        {
          url: "./next/static/chunks/518.0f4c2df3801737f8.js",
          revision: "0f4c2df3801737f8",
        },
        {
          url: "./next/static/chunks/518.0f4c2df3801737f8.js.map",
          revision: "1048b7fdaa9bc576b991c6bf60f42aa7",
        },
        {
          url: "./next/static/chunks/5329.c908fad5101ca710.js",
          revision: "c908fad5101ca710",
        },
        {
          url: "./next/static/chunks/5329.c908fad5101ca710.js.map",
          revision: "757b3cd13d7c108919622e1a2bb225b8",
        },
        {
          url: "./next/static/chunks/5366.40e61565d5bf18f2.js",
          revision: "40e61565d5bf18f2",
        },
        {
          url: "./next/static/chunks/5366.40e61565d5bf18f2.js.map",
          revision: "af6a18c44ca2fbed5e0513be224694ce",
        },
        {
          url: "./next/static/chunks/5431.c7286b84334cc73f.js",
          revision: "c7286b84334cc73f",
        },
        {
          url: "./next/static/chunks/5431.c7286b84334cc73f.js.map",
          revision: "1ff2dfa988609fa47126518dc9b7f7bf",
        },
        {
          url: "./next/static/chunks/546.2565b984c10bd2d9.js",
          revision: "2565b984c10bd2d9",
        },
        {
          url: "./next/static/chunks/546.2565b984c10bd2d9.js.map",
          revision: "c4a77fa0340b26c92a6322f67ca5f4f8",
        },
        {
          url: "./next/static/chunks/5587.1e004b2002165755.js",
          revision: "1e004b2002165755",
        },
        {
          url: "./next/static/chunks/5587.1e004b2002165755.js.map",
          revision: "2cc30900de231e47b236bb23dc3ad2a4",
        },
        {
          url: "./next/static/chunks/5682.efda7ec62b413f7e.js",
          revision: "efda7ec62b413f7e",
        },
        {
          url: "./next/static/chunks/5682.efda7ec62b413f7e.js.map",
          revision: "7c7c5c031f6ae2d4e92551826eb75797",
        },
        {
          url: "./next/static/chunks/5781.ee3cb52d687ed021.js",
          revision: "ee3cb52d687ed021",
        },
        {
          url: "./next/static/chunks/5781.ee3cb52d687ed021.js.map",
          revision: "2fb304363e6f84be17e95d227264fc02",
        },
        {
          url: "./next/static/chunks/5804.297d9a5ec9e8fb13.js",
          revision: "297d9a5ec9e8fb13",
        },
        {
          url: "./next/static/chunks/5804.297d9a5ec9e8fb13.js.map",
          revision: "160547677876192e0e9ec1c12b1d26d7",
        },
        {
          url: "./next/static/chunks/5877.9a55bcb6860f3fb5.js",
          revision: "9a55bcb6860f3fb5",
        },
        {
          url: "./next/static/chunks/5877.9a55bcb6860f3fb5.js.map",
          revision: "8300065fc03cf18c90bb076bca75d6e1",
        },
        {
          url: "./next/static/chunks/5881.256b9a813bc4c252.js",
          revision: "256b9a813bc4c252",
        },
        {
          url: "./next/static/chunks/5881.256b9a813bc4c252.js.map",
          revision: "8cbc52f3d590e86aeae9f538b13044eb",
        },
        {
          url: "./next/static/chunks/608.83e8cb0485edd031.js",
          revision: "83e8cb0485edd031",
        },
        {
          url: "./next/static/chunks/608.83e8cb0485edd031.js.map",
          revision: "116edddf45e10c404d48dbf2c63656a4",
        },
        {
          url: "./next/static/chunks/6126.497a813830b1cce1.js",
          revision: "497a813830b1cce1",
        },
        {
          url: "./next/static/chunks/6126.497a813830b1cce1.js.map",
          revision: "e2320f8a2b30bafb4d2469d65b9c6bc5",
        },
        {
          url: "./next/static/chunks/6163.8492e760da1d645d.js",
          revision: "8492e760da1d645d",
        },
        {
          url: "./next/static/chunks/6163.8492e760da1d645d.js.map",
          revision: "c8c2125d2e338a332b5646e2bad16b43",
        },
        {
          url: "./next/static/chunks/6269.808f5601c22d1f9d.js",
          revision: "808f5601c22d1f9d",
        },
        {
          url: "./next/static/chunks/6269.808f5601c22d1f9d.js.map",
          revision: "a6dce1aa8e7d2109a2df6c0965b26eda",
        },
        {
          url: "./next/static/chunks/6323.a8d42d2b65746604.js",
          revision: "a8d42d2b65746604",
        },
        {
          url: "./next/static/chunks/6323.a8d42d2b65746604.js.map",
          revision: "f3802606c46c136c3109ad8602c8f9fd",
        },
        {
          url: "./next/static/chunks/6366.08c83375f3d703fa.js",
          revision: "08c83375f3d703fa",
        },
        {
          url: "./next/static/chunks/6366.08c83375f3d703fa.js.map",
          revision: "02f4252b48c5d80b6fcf130d37334580",
        },
        {
          url: "./next/static/chunks/6461.d2294557427cc540.js",
          revision: "d2294557427cc540",
        },
        {
          url: "./next/static/chunks/6461.d2294557427cc540.js.map",
          revision: "878016ab1399dfe29974a3f35a20816e",
        },
        {
          url: "./next/static/chunks/6490.ad15df8db1ac74f7.js",
          revision: "ad15df8db1ac74f7",
        },
        {
          url: "./next/static/chunks/6490.ad15df8db1ac74f7.js.map",
          revision: "1319605598c00d2b67b67130e603b9bd",
        },
        {
          url: "./next/static/chunks/6592.926396a98fd6f810.js",
          revision: "926396a98fd6f810",
        },
        {
          url: "./next/static/chunks/6592.926396a98fd6f810.js.map",
          revision: "7f21ccb9911e44defb315084cf53b8d2",
        },
        {
          url: "./next/static/chunks/6608.4365dd63c5ab7462.js",
          revision: "4365dd63c5ab7462",
        },
        {
          url: "./next/static/chunks/6608.4365dd63c5ab7462.js.map",
          revision: "0ac8ca3539a1967be2660353dc7028cb",
        },
        {
          url: "./next/static/chunks/6655.7659c493a5ec77fa.js",
          revision: "7659c493a5ec77fa",
        },
        {
          url: "./next/static/chunks/6655.7659c493a5ec77fa.js.map",
          revision: "b4d2a06519479ca13072d32ae3bb4498",
        },
        {
          url: "./next/static/chunks/6725.8549e81db61cac6e.js",
          revision: "8549e81db61cac6e",
        },
        {
          url: "./next/static/chunks/6725.8549e81db61cac6e.js.map",
          revision: "093c71c7f87f3738efed47cce75a91ae",
        },
        {
          url: "./next/static/chunks/6942.9e37d9346acdeb8b.js",
          revision: "9e37d9346acdeb8b",
        },
        {
          url: "./next/static/chunks/6942.9e37d9346acdeb8b.js.map",
          revision: "9d7c0b06a56396dac1a2c317fe0fb60c",
        },
        {
          url: "./next/static/chunks/6957.5e3e626acf6e0380.js",
          revision: "5e3e626acf6e0380",
        },
        {
          url: "./next/static/chunks/6957.5e3e626acf6e0380.js.map",
          revision: "bda67d6736839cf1de22bb6f0dd4815e",
        },
        {
          url: "./next/static/chunks/6994.d612a833f895564b.js",
          revision: "d612a833f895564b",
        },
        {
          url: "./next/static/chunks/6994.d612a833f895564b.js.map",
          revision: "9c413f82ddea4c530a0349a7770964e4",
        },
        {
          url: "./next/static/chunks/7040.f090eb46e02f3e31.js",
          revision: "f090eb46e02f3e31",
        },
        {
          url: "./next/static/chunks/7040.f090eb46e02f3e31.js.map",
          revision: "5ed3c5fa69490285bec7c78c54c884e5",
        },
        {
          url: "./next/static/chunks/7057.e6a09edf35be9a5f.js",
          revision: "e6a09edf35be9a5f",
        },
        {
          url: "./next/static/chunks/7057.e6a09edf35be9a5f.js.map",
          revision: "02dd68f5040eeb3a01114c5e3db1ec8c",
        },
        {
          url: "./next/static/chunks/7288.46ddb6e9b9540d08.js",
          revision: "46ddb6e9b9540d08",
        },
        {
          url: "./next/static/chunks/7288.46ddb6e9b9540d08.js.map",
          revision: "c2f39e7bb2f4ab5cda1053b1850e8eb6",
        },
        {
          url: "./next/static/chunks/7371.4603dbf014d0f008.js",
          revision: "4603dbf014d0f008",
        },
        {
          url: "./next/static/chunks/7371.4603dbf014d0f008.js.map",
          revision: "13e5b4838b56c57ab360d9164380c10c",
        },
        {
          url: "./next/static/chunks/7491.cc1acfd46b0fbeb1.js",
          revision: "cc1acfd46b0fbeb1",
        },
        {
          url: "./next/static/chunks/7491.cc1acfd46b0fbeb1.js.map",
          revision: "6db7591c124ed38e82a9811a9bec31af",
        },
        {
          url: "./next/static/chunks/7591.8fe276f5e5cca7d5.js",
          revision: "8fe276f5e5cca7d5",
        },
        {
          url: "./next/static/chunks/7591.8fe276f5e5cca7d5.js.map",
          revision: "7d4815b6d921c103317d84e89f1114de",
        },
        {
          url: "./next/static/chunks/7636.13bfacc63910b932.js",
          revision: "13bfacc63910b932",
        },
        {
          url: "./next/static/chunks/7636.13bfacc63910b932.js.map",
          revision: "e7521dfc50b450125bb0f2796293fe54",
        },
        {
          url: "./next/static/chunks/7679.d39741461883fde0.js",
          revision: "d39741461883fde0",
        },
        {
          url: "./next/static/chunks/7679.d39741461883fde0.js.map",
          revision: "0a4e47e3b0cdb98be72813091c172409",
        },
        {
          url: "./next/static/chunks/7732.5717d1331f87aff4.js",
          revision: "5717d1331f87aff4",
        },
        {
          url: "./next/static/chunks/7732.5717d1331f87aff4.js.map",
          revision: "8de972836d70de2bc594f731ce118478",
        },
        {
          url: "./next/static/chunks/7812.9a3886e342920e69.js",
          revision: "9a3886e342920e69",
        },
        {
          url: "./next/static/chunks/7812.9a3886e342920e69.js.map",
          revision: "4f88a40ef2abc984b079a92d62754f09",
        },
        {
          url: "./next/static/chunks/7871.1085781900bf6573.js",
          revision: "1085781900bf6573",
        },
        {
          url: "./next/static/chunks/7871.1085781900bf6573.js.map",
          revision: "a970e3bae6369353856547c1b5e105b4",
        },
        {
          url: "./next/static/chunks/7939.c1f3c84118084eb9.js",
          revision: "c1f3c84118084eb9",
        },
        {
          url: "./next/static/chunks/7939.c1f3c84118084eb9.js.map",
          revision: "94a23ea9dc72b83fd392cd94751c58c8",
        },
        {
          url: "./next/static/chunks/7976.e2ab396d23d6a2e6.js",
          revision: "e2ab396d23d6a2e6",
        },
        {
          url: "./next/static/chunks/7976.e2ab396d23d6a2e6.js.map",
          revision: "7368b9b225973b122d00fe4476a33668",
        },
        {
          url: "./next/static/chunks/81.9abf2c39d147c65c.js",
          revision: "9abf2c39d147c65c",
        },
        {
          url: "./next/static/chunks/81.9abf2c39d147c65c.js.map",
          revision: "85ddbfaf69478f2b7717b7cbad0e320a",
        },
        {
          url: "./next/static/chunks/812.42d1f483bc60c4b2.js",
          revision: "42d1f483bc60c4b2",
        },
        {
          url: "./next/static/chunks/812.42d1f483bc60c4b2.js.map",
          revision: "1c9c0bb64232f2894ff062ee3d60ba19",
        },
        {
          url: "./next/static/chunks/828.cb57cddd1e8e2526.js",
          revision: "cb57cddd1e8e2526",
        },
        {
          url: "./next/static/chunks/828.cb57cddd1e8e2526.js.map",
          revision: "0441f471abdf78acdd833915d241be67",
        },
        {
          url: "./next/static/chunks/8318.8a3156a8497331fd.js",
          revision: "8a3156a8497331fd",
        },
        {
          url: "./next/static/chunks/8318.8a3156a8497331fd.js.map",
          revision: "a44a63ae3a695860a341768201a7fc53",
        },
        {
          url: "./next/static/chunks/8439.c58e94aabf6dcfc8.js",
          revision: "c58e94aabf6dcfc8",
        },
        {
          url: "./next/static/chunks/8439.c58e94aabf6dcfc8.js.map",
          revision: "ce53bd5f0c301bf86a9bfa9cf4c671eb",
        },
        {
          url: "./next/static/chunks/8468.fcc216847fe959cc.js",
          revision: "fcc216847fe959cc",
        },
        {
          url: "./next/static/chunks/8468.fcc216847fe959cc.js.map",
          revision: "9e870d74bdb9cd025a3734b23a85fda9",
        },
        {
          url: "./next/static/chunks/8580.3362db82c3a1974c.js",
          revision: "3362db82c3a1974c",
        },
        {
          url: "./next/static/chunks/8580.3362db82c3a1974c.js.map",
          revision: "561d77f1c4088ac341a7eaf94ced8679",
        },
        {
          url: "./next/static/chunks/8609.766c225efadb36a6.js",
          revision: "766c225efadb36a6",
        },
        {
          url: "./next/static/chunks/8609.766c225efadb36a6.js.map",
          revision: "7d50a17db185bdf68538a3274fd3e7d3",
        },
        {
          url: "./next/static/chunks/8630.d75d6eb1925e6357.js",
          revision: "d75d6eb1925e6357",
        },
        {
          url: "./next/static/chunks/8630.d75d6eb1925e6357.js.map",
          revision: "bf1c047cbb6985d647402808ab9003e5",
        },
        {
          url: "./next/static/chunks/8749.46cfe3ffb085da0e.js",
          revision: "46cfe3ffb085da0e",
        },
        {
          url: "./next/static/chunks/8749.46cfe3ffb085da0e.js.map",
          revision: "0fab9c0ab53f59c009ad2a59910e575e",
        },
        {
          url: "./next/static/chunks/8752.5a95c3ca7eb785c0.js",
          revision: "5a95c3ca7eb785c0",
        },
        {
          url: "./next/static/chunks/8752.5a95c3ca7eb785c0.js.map",
          revision: "375d01e09cb539a207bebb1eca75e982",
        },
        {
          url: "./next/static/chunks/8943.cfa2b0a7f371e245.js",
          revision: "cfa2b0a7f371e245",
        },
        {
          url: "./next/static/chunks/8943.cfa2b0a7f371e245.js.map",
          revision: "f5e52cd18ac23d15706a505776e176a5",
        },
        {
          url: "./next/static/chunks/8947.223442f89fffb513.js",
          revision: "223442f89fffb513",
        },
        {
          url: "./next/static/chunks/8947.223442f89fffb513.js.map",
          revision: "e017679eaf0b7f1c816ae94cf5d3c64f",
        },
        {
          url: "./next/static/chunks/9464.e838482039f1b262.js",
          revision: "e838482039f1b262",
        },
        {
          url: "./next/static/chunks/9464.e838482039f1b262.js.map",
          revision: "f3045742345f1ecf367b4cec5de63ccc",
        },
        {
          url: "./next/static/chunks/9480.150e4f7e8e3e2cad.js",
          revision: "150e4f7e8e3e2cad",
        },
        {
          url: "./next/static/chunks/9480.150e4f7e8e3e2cad.js.map",
          revision: "40033a1fc3497148ad6b757edfbc899d",
        },
        {
          url: "./next/static/chunks/9505.844f4915252ab88a.js",
          revision: "844f4915252ab88a",
        },
        {
          url: "./next/static/chunks/9505.844f4915252ab88a.js.map",
          revision: "879b008cf2e6d87363702e77dc262ae4",
        },
        {
          url: "./next/static/chunks/9612.5fc96c64d2f4c80e.js",
          revision: "5fc96c64d2f4c80e",
        },
        {
          url: "./next/static/chunks/9612.5fc96c64d2f4c80e.js.map",
          revision: "7aae3d7300a4aab914f5b9ec33a7b43d",
        },
        {
          url: "./next/static/chunks/9630.727df401679d1b96.js",
          revision: "727df401679d1b96",
        },
        {
          url: "./next/static/chunks/9630.727df401679d1b96.js.map",
          revision: "a65866ef8165a79e88a235bf399329de",
        },
        {
          url: "./next/static/chunks/9636.ddec369948803ae2.js",
          revision: "ddec369948803ae2",
        },
        {
          url: "./next/static/chunks/9636.ddec369948803ae2.js.map",
          revision: "33a9d8dff4e6f4b137dd9cb7fcb7d9ca",
        },
        {
          url: "./next/static/chunks/9767.77f1f3587fd9a2fb.js",
          revision: "77f1f3587fd9a2fb",
        },
        {
          url: "./next/static/chunks/9767.77f1f3587fd9a2fb.js.map",
          revision: "6d47dc29c35c0523ff90bb38a843d593",
        },
        {
          url: "./next/static/chunks/98.f3b912cd5c1f24b7.js",
          revision: "f3b912cd5c1f24b7",
        },
        {
          url: "./next/static/chunks/98.f3b912cd5c1f24b7.js.map",
          revision: "d6842397cca3e5ed88c3ca0910bc91f2",
        },
        {
          url: "./next/static/chunks/9829.2e385d93e0977be8.js",
          revision: "2e385d93e0977be8",
        },
        {
          url: "./next/static/chunks/9829.2e385d93e0977be8.js.map",
          revision: "a4434d2488c1ed134228b61193e0ca73",
        },
        {
          url: "./next/static/chunks/9840.a3eb7226b47f6379.js",
          revision: "a3eb7226b47f6379",
        },
        {
          url: "./next/static/chunks/9840.a3eb7226b47f6379.js.map",
          revision: "ce58f25ebc4c401127bea6f360fb04d4",
        },
        {
          url: "./next/static/chunks/9864.b5f46352684c91a6.js",
          revision: "b5f46352684c91a6",
        },
        {
          url: "./next/static/chunks/9864.b5f46352684c91a6.js.map",
          revision: "dc9c8032d7eeecae4af40cca8ff1a8cf",
        },
        {
          url: "./next/static/chunks/9914.ad4bccccecadf763.js",
          revision: "ad4bccccecadf763",
        },
        {
          url: "./next/static/chunks/9914.ad4bccccecadf763.js.map",
          revision: "c9fc2f3ba8a77d60b3eca196538bc036",
        },
        {
          url: "./next/static/chunks/9980.86f3bf3f7e6a163a.js",
          revision: "86f3bf3f7e6a163a",
        },
        {
          url: "./next/static/chunks/9980.86f3bf3f7e6a163a.js.map",
          revision: "e0ae5b456b3d81f0ab54928934792b96",
        },
        {
          url: "./next/static/chunks/9982.9589dbce6eeb3dca.js",
          revision: "9589dbce6eeb3dca",
        },
        {
          url: "./next/static/chunks/9982.9589dbce6eeb3dca.js.map",
          revision: "d286a33ffe186365d37b6bfedf241201",
        },
        {
          url: "./next/static/chunks/9f542e2b.727b1cc8a144eecf.js",
          revision: "727b1cc8a144eecf",
        },
        {
          url: "./next/static/chunks/9f542e2b.727b1cc8a144eecf.js.map",
          revision: "797eae971152050f74234f034d24690f",
        },
        {
          url: "./next/static/chunks/ea88be26.e81639bedf798edb.js",
          revision: "e81639bedf798edb",
        },
        {
          url: "./next/static/chunks/ea88be26.e81639bedf798edb.js.map",
          revision: "08305f884419af96ac64b786e42c1039",
        },
        {
          url: "./next/static/chunks/framework-ae6dc1f3a000e352.js",
          revision: "ae6dc1f3a000e352",
        },
        {
          url: "./next/static/chunks/framework-ae6dc1f3a000e352.js.map",
          revision: "5e6e642a7a8eba9723bdd3d0385ca50b",
        },
        {
          url: "./next/static/chunks/main-7ecc61e0ae12c0fe.js",
          revision: "7ecc61e0ae12c0fe",
        },
        {
          url: "./next/static/chunks/main-7ecc61e0ae12c0fe.js.map",
          revision: "4a6b56bf292ff247c0ae27459cf6fdc0",
        },
        {
          url: "./next/static/chunks/pages/%5Btour%5D/%5B%5B...scene%5D%5D-a0cf52c567b5290a.js",
          revision: "a0cf52c567b5290a",
        },
        {
          url: "./next/static/chunks/pages/%5Btour%5D/%5B%5B...scene%5D%5D-a0cf52c567b5290a.js.map",
          revision: "7f56b1c5117133d368c65c4857e992e9",
        },
        {
          url: "./next/static/chunks/pages/404-63b9569aa7c7cf46.js",
          revision: "63b9569aa7c7cf46",
        },
        {
          url: "./next/static/chunks/pages/404-63b9569aa7c7cf46.js.map",
          revision: "da13e31047d9b268f7db6c92684ed4b4",
        },
        {
          url: "./next/static/chunks/pages/app-af6cafef9940971e.js",
          revision: "af6cafef9940971e",
        },
        {
          url: "./next/static/chunks/pages/app-af6cafef9940971e.js.map",
          revision: "eb5429b624385549b61eca233628c404",
        },
        {
          url: "./next/static/chunks/pages/_error-5e4bf06de1f960a6.js",
          revision: "5e4bf06de1f960a6",
        },
        {
          url: "./next/static/chunks/pages/_error-5e4bf06de1f960a6.js.map",
          revision: "4780f9fd743fabcd1206e17f7a1fe2dd",
        },
        {
          url: "./next/static/chunks/pages/collaboration-c750fea6682d845f.js",
          revision: "c750fea6682d845f",
        },
        {
          url: "./next/static/chunks/pages/collaboration-c750fea6682d845f.js.map",
          revision: "aefa588a6410895a27297a2ac39a9d99",
        },
        {
          url: "./next/static/chunks/pages/export-frontend-4d00b7aa09cb7402.js",
          revision: "4d00b7aa09cb7402",
        },
        {
          url: "./next/static/chunks/pages/export-frontend-4d00b7aa09cb7402.js.map",
          revision: "288268f581f12397e008ef69dafb5701",
        },
        {
          url: "./next/static/chunks/pages/export-full-bb75f289b11ea3e1.js",
          revision: "bb75f289b11ea3e1",
        },
        {
          url: "./next/static/chunks/pages/export-full-bb75f289b11ea3e1.js.map",
          revision: "31959146f1d32bbfbfe9725ffdc9df94",
        },
        {
          url: "./next/static/chunks/pages/healthcheck-68ae35003c3d03ae.js",
          revision: "68ae35003c3d03ae",
        },
        {
          url: "./next/static/chunks/pages/healthcheck-68ae35003c3d03ae.js.map",
          revision: "bfb1cbed99046ce6b454aab3b351fae4",
        },
        {
          url: "./next/static/chunks/pages/iframe/%5Btour%5D-ee00a0cbe40ed8c2.js",
          revision: "ee00a0cbe40ed8c2",
        },
        {
          url: "./next/static/chunks/pages/iframe/%5Btour%5D-ee00a0cbe40ed8c2.js.map",
          revision: "98036ae0086f3d9f434cc2c4e5f6a6b7",
        },
        {
          url: "./next/static/chunks/pages/index-e4117d789b0edb0b.js",
          revision: "e4117d789b0edb0b",
        },
        {
          url: "./next/static/chunks/pages/index-e4117d789b0edb0b.js.map",
          revision: "2647f9a2831ed1eae4e7dbd6723254c0",
        },
        {
          url: "./next/static/chunks/pages/preview-1754b5bf4e8194d6.js",
          revision: "1754b5bf4e8194d6",
        },
        {
          url: "./next/static/chunks/pages/preview-1754b5bf4e8194d6.js.map",
          revision: "b6e2565a2e57de4c3af2bbac279ff671",
        },
        {
          url: "./next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "./next/static/chunks/webpack-2a633b3c12ecb913.js",
          revision: "2a633b3c12ecb913",
        },
        {
          url: "./next/static/chunks/webpack-2a633b3c12ecb913.js.map",
          revision: "ed6856898ff2555123e4d7b08f0aec4a",
        },
        {
          url: "./next/static/css/5127ebc978e83226.css",
          revision: "5127ebc978e83226",
        },
        {
          url: "./next/static/css/5127ebc978e83226.css.map",
          revision: "c19fdddb750538329089f4718f4cfd48",
        },
        {
          url: "./next/static/css/5af564864d18eadd.css",
          revision: "5af564864d18eadd",
        },
        {
          url: "./next/static/css/5af564864d18eadd.css.map",
          revision: "45fa3e83ffcfa9ea86d22813a6749d5d",
        },
        {
          url: "./next/static/css/66d0b607c696fb79.css",
          revision: "66d0b607c696fb79",
        },
        {
          url: "./next/static/css/66d0b607c696fb79.css.map",
          revision: "999d697332c60e584ebe6c68e9e43ee0",
        },
        {
          url: "./next/static/panoee-build-id/buildManifest.js",
          revision: "f5221284b038423810ebe47508dabe86",
        },
        {
          url: "./next/static/panoee-build-id/ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: c,
              event: s,
              state: a,
            }) =>
              c && "opaqueredirect" === c.type
                ? new Response(c.body, {
                    status: 200,
                    statusText: "OK",
                    headers: c.headers,
                  })
                : c,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const c = e.pathname;
        return !c.startsWith("/api/auth/") && !!c.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
