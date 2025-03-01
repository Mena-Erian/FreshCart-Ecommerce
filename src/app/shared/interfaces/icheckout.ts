export interface ICheckoutRoot {
  status: string;
  session: ICheckoutSession;
}
export interface ICheckoutSession {
  url: string;
  success_url: string;
  cancel_url: string;
}
// let t = {
//   status: 'success',
//   session: {
//     url: 'https://checkout.stripe.com/c/pay/cs_test_a1CYwg9xdNeRaZIKE9rohfqyxhn1vTAajpRtejKBairfyWiRkaDqiQxVuL#fidkdWxOYHwnPyd1blpxYHZxWjA0SHViYl1ANVYyU2pOX2hVVW9ASmZBUElpa2FLVnBUQGo2UFduUEhIXHx9aEhjanBGZ1NxZ3RKNVVtXWxcSTJ8Qzx2aWZkUEBpMXJCXVRHTkIxZzBSZmhENTUxYHVKMUpQVycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',
//     success_url: 'http://localhost:4200/allorders',
//     cancel_url: 'http://localhost:4200/cart',
//   },
// };
