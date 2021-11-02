import express from "express";


const app = express()

app.get('/',(req,res)=>{
  res.json({
      "keys":
        [
          {
            "kty": "RSA",
            "n": "6sqB3nBz2BJaK5rZPCjaIajpyKalpbvTNGpY0juWJR2Rvofy9JSyxJbtLBXuS3HGr__WX9LN9DpJPnL6LZ7x8dU0QInCeHp-Xjba261Q2B8SPjKfaOqxNzjqlPgDmBOL5adJvaFxYfb9nyPMYJ3oXJrPkf-zJsx9NfGBWTKd5tEhhrNL6ljww6m63si1p3NJtBmevzgzjQErz_K5iJ3Wv8WOestljOtZqtBpF_eq5rRmXb4uSV0jG0_RFrIVMFPa2VpksECg8vXztR_G7inucsmqFcdukDKYmoKSsA9zsXvGT9Egn-kQMXr4ZXxnAG-FXTkciKOIrCbDA701WifImQ",
            "e": "AQAB",
            "alg": "RS256",
            "kid": "6ddc014b-7287-45ee-aa7d-81437143912f",
            "use": "sig"
          }
        ]
    })
})
app.listen(process.env.PORT || 3000 , (req,res)=>{
  console.log(`Server running at ${process.env.PORT || 3000}`)
})
