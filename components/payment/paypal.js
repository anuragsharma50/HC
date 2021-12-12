import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios'

function Paypal({set}) {

  const createOrder = () => {
    return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/paypal/create-order`,{ set },
    {withCredentials:true}).then(res => {
        return res.data.id
    }).catch(err => {
        // console.log(err.response)
    })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/capturePaypalAmount`,{ amount : details.purchase_units[0].amount.value },
    {withCredentials:true}).then((res) => {
      // console.log(res.data)
    }).catch((e) => {
      // console.log(e)
      if (e.response && e.response.data) {
        // console.log(e.response.data.message)
        // setServerError(e.response.data.message)
      }
    })
    })
  };

  return (
      <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
        <PayPalButtons forceReRender={[set]} createOrder={createOrder} onApprove={onApprove}  />
      </PayPalScriptProvider>
  )
}

export default Paypal
