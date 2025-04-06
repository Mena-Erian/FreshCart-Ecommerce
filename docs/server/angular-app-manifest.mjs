
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Fresh_Cart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/Fresh_Cart/home",
    "route": "/Fresh_Cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6Q5DWJ6P.js",
      "chunk-7GEGCCXE.js",
      "chunk-667VMELB.js"
    ],
    "route": "/Fresh_Cart/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AQTOWGX5.js",
      "chunk-XYKJ2AR5.js"
    ],
    "route": "/Fresh_Cart/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NOHZEAE5.js"
    ],
    "route": "/Fresh_Cart/allorders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNLUX5TX.js",
      "chunk-Q3WU5MBH.js",
      "chunk-667VMELB.js"
    ],
    "route": "/Fresh_Cart/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LIQJNOOH.js"
    ],
    "route": "/Fresh_Cart/brands"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D2KBFTHC.js"
    ],
    "route": "/Fresh_Cart/brands-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-33LJJW45.js",
      "chunk-7GEGCCXE.js"
    ],
    "route": "/Fresh_Cart/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UEWOOADV.js",
      "chunk-7GEGCCXE.js"
    ],
    "route": "/Fresh_Cart/products-of-categories/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VISISDLB.js",
      "chunk-Q3WU5MBH.js"
    ],
    "route": "/Fresh_Cart/checkout/*"
  },
  {
    "renderMode": 0,
    "route": "/Fresh_Cart/details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K24IW66P.js",
      "chunk-Q3WU5MBH.js"
    ],
    "route": "/Fresh_Cart/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DVLXKYNK.js",
      "chunk-Q3WU5MBH.js"
    ],
    "route": "/Fresh_Cart/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IJRHJ5EE.js",
      "chunk-Q3WU5MBH.js"
    ],
    "route": "/Fresh_Cart/forgetPassword"
  },
  {
    "renderMode": 0,
    "route": "/Fresh_Cart/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14952, hash: '276693ba208ba64002f264027c8acac3083734d9b3317318381189b879350a6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12110, hash: '3ac2dd36ca758524afcf1c9ba3f5ddf30f1621006efb20b52b643ce926672dbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W4DV5S5I.css': {size: 144243, hash: 'YrkFYwYQ2PY', text: () => import('./assets-chunks/styles-W4DV5S5I_css.mjs').then(m => m.default)}
  },
};
