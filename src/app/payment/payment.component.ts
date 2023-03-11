import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymenthandler:any = null;
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MkPsLSIohaYBg9MKVXHVxNlBgA7WrbtAqcHdkuMpXdYv5KD8la7HZh4nBVetp4sWQ2pLK8W2oMpJEfSie9kRcV500Nr0zxjXw',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'FreakyJolly',
      description: 'Buying aloo paratha',
      amount: amount * 100
    });
  }
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymenthandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MkPsLSIohaYBg9MKVXHVxNlBgA7WrbtAqcHdkuMpXdYv5KD8la7HZh4nBVetp4sWQ2pLK8W2oMpJEfSie9kRcV500Nr0zxjXw',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }


}
