
<p align="center">
  Repo to manage BeldexClient Web Assembly
</p>

> :warning: This project is under heavy development. Expect bugs & breaking changes.

## General dependencies
If you would like to generate the WASM files yourself you will require docker

## Building

1. Clone the repo `git clone https://github.com/Beldex-Coin/beldex-utils.git`
1. `cd packages/beldex-client`
1. `rm -rf build` removes the old build folder if you have run a build previously.
1. `rm src/BeldexClient_*` removes the old WASM before your new build.
1. `./prepare.sh` to fetch the beldex core code and the beldex bridging code.
1. `npm run build` initiates the emscripten docker image to build the project.


### Installation

You can install the WASM and javascript bridging code via npm.

```bash
npm i @bdxi/beldex-client
```

### Initialize

Initialize the WABridge class which loads and prepares the WebAssembly.
The WABridge has helper methods for each of the calls allowing for linting and improved error handling

```js
const WABridge = await require('@bdxi/beldex-client')({})
```

### Generate Wallet

Creates a new wallet using the Language and Locale and Network Type.
Only the prefix is checked e.g. en-UK, en-US will match to English.

- English - en
- Dutch - nl
- French - fr
- Spanish - es
- Portuguese - pt
- Japanese - ja
- Italian - it
- German - de
- Russian - ru
- Chinese, simplified - zh
- Esperanto - eo
- Lojban - jbo

```js
const result = WABridge.generateWallet('en-US', 'MAINNET')
console.log(result)
```

### Derive Seed and Keys from Mnemonic

Provided mnemonic seed phrase it will return the primary address and keys.

```js
const result = WABridge.seedAndKeysFromMnemonic(
  'exquisite pixels vague lilac peculiar framed guys peculiar needed double acquire dude tacit woken maze germs citadel negative uneven toaster gypsy imitate omnibus pancakes toaster',
  'MAINNET'
)
console.log(result)
```

### Validate Private keys

Used to validate the users keys for accessing the wallet.
Requires the address, private view key and private spend key.

isValidKeys(address, privateViewKey, privateSpendKey)

```js
const result = WABridge.isValidKeys(
  'bxdBKFWZRaqUEiaAuZpmhGaJvPEUx83VhT7GniQsqrW66Ft6j6n9ECNEMtyqVfM1FTbqs9Ts8CcwyfPGFhToRQhm22MF6rbTM',
  'a34c54f87c4839cdb048f7e9a2c543bd416fc9ccb9eb356b522fcac6a9be6400',
  'f7349042d7df37aa7d5aa3ebc5ecdc3526b0468c5b8db669064ebe8096dfc007',
  '',
  'MAINNET'
)
console.log(result)
```

### Generate Payment ID

Generates a new random short payment ID string. 

```js
const paymentId = WABridge.generatePaymentId()
console.log(paymentId)
```

### Decode an Address

Decodes the address to access public spend key, public view key, whether it is a subaddress and payment ID.

```js
const result = WABridge.decodeAddress(
  'bxdBKFWZRaqUEiaAuZpmhGaJvPEUx83VhT7GniQsqrW66Ft6j6n9ECNEMtyqVfM1FTbqs9Ts8CcwyfPGFhToRQhm22MF6rbTM',
  'MAINNET'
)
console.log(result)
```

### Compare two Mnemonics

Compares two mnemonic phrases against each other. 

```js
const result = WABridge.compareMnemonics(
  'exquisite pixels vague lilac peculiar framed guys peculiar needed double acquire dude tacit woken maze germs citadel negative uneven toaster gypsy imitate omnibus pancakes toaster',
  'fox sel exquisite pixels vague lilac peculiar framed guys peculiar needed double acquire dude tacit woken maze germs citadel negative uneven toaster gypsy imitate omnibus'
)
console.log(result)
```
### Validate Integrated Address

Checks if the provided address is a integrated address. returns a boolean value.
This is a helper function for decodeAddress. If the address is not a subaddress and has a payment id it will return true.

```js
const result = WABridge.isIntegratedAddress(
  '4EWiFcm7Tj7efcpeLJsRL9ZhJ43rMANd8CMSAxz71zqM2eMMHr7ZW3J2i1K6jHZXgn34hwBxqy8CxDLBw9UF5tGsZ3dwd9D3TMJ4es8QUJ', 
  'MAINNET'
)
console.log(result)
```

### Validate Subaddress

Checks if the provided address is a subaddress. returns a boolean value.
This is a helper function for decodeAddress. If the address decode returns is a subaddress it will return true.

```js
const result = WABridge.isSubaddress(
  '89UqPUN1ytN31PhkQLbdxfWxXndmQgwPfMazYUZY2EA7Yz4nAfuncqFW7PCKBpjkK1j4o2LmsMY9zBfqVgebouqsDCsjWxd', 
  'MAINNET'
)
console.log(result)
```

### Generate new Integrated Address

Generate a new intergrated address using address and payment ID.
Accepts a primary addresss and a short payment id. subaddresses cannot be paired with a payment id.

```js
const result = WABridge.newIntegratedAddress(
  '4EWiFcm7Tj7efcpeLJsRL9ZhJ43rMANd8CMSAxz71zqM2eMMHr7ZW3J2i1K6jHZXgn34hwBxqy8CxDLBw9UF5tGsZ3dwd9D3TMJ4es8QUJ',
  '07749f00b7e3a2f6',
  'MAINNET'
)
console.log(result)
```

### Extract Address and Keys from Seed

Provided a hexadecimal seed it will return primary address and keys.

```js
const result = WABridge.addressAndKeysFromSeed(
  '9c973aa296b79bbf452781dd3d32ad7f', 
  'MAINNET'
)
console.log(result)
```

### Derive Mnemonic from Seed

Provided a hexadecimal seed it will return a mnemonic seed phrase.

```js
const result = WABridge.mnemonicFromSeed(
  '9c973aa296b79bbf452781dd3d32ad7f',
  'English'
)
console.log(result)
```

### Estimate transaction fee

Calculates an estimated transaction fee. Its based on two outputs being used.
The fees per byte value can be retrieved from the get_unspent_outs MM server call. 

```js
const result = WABridge.estimateTxFee(1, 6000)
console.log(result)
```

### Generate Key Image

Generates key image for an output. returns the key image for the tx public key and output index.
generateKeyImage (txPublicKey, privateViewKey, publicSpendKey, privateSpendKey, outputIndex)

```js
const result = WABridge.generateKeyImage(
      '585d3601bc6f3b63ad041fbb5f301a6239cbc98ec2954ef827d5f81aed59cff9',
      '5925eac0f78c40a79c75a43be68905adeb7b6ae34c1be2dda2b5b417f8099700',
      '1a9fd7ccfa0de91673f5637eb94a67d85b54eae83d1ec9b609689ec846a50fdd',
      '5000f1da72ec13401b6e4cfccdc5e52c9d0b04383fcb32c85f235874c5104e0d',
      0
    )
console.log(result)
```

### Create Transaction

Creates a raw transaction from the options provided. 
This Tx needs to be sent on to the light wallet server for broadcast.
Multiple destination transactions do not support payment ids. 
Only one destination can be set if there is an associated payment id. This includes integrated addresses.
Subaddresses and primary desitnations can be mixed within a single transaction.

```js
const options = {
    destinations: [
      { 
        'to_address': 'bxdBKFWZRaqUEiaAuZpmhGaJvPEUx83VhT7GniQsqrW66Ft6j6n9ECNEMtyqVfM1FTbqs9Ts8CcwyfPGFhToRQhm22MF6rbTM', 
        'send_amount': '0.0001'
      }
    ],
    priority: 1,
    address: 'bxdBKFWZRaqUEiaAuZpmhGaJvPEUx83VhT7GniQsqrW66Ft6j6n9ECNEMtyqVfM1FTbqs9Ts8CcwyfPGFhToRQhm22MF6rbTM',
    privateViewKey: 'a34c54f87c4839cdb048f7e9a2c543bd416fc9ccb9eb356b522fcac6a9be6400',
    publicSpendKey: '872d28c53d4f2c8e532b445a4d4193ea0d9d72b25695dff2b98bfd82e113cc80',
    privateSpendKey: 'f7349042d7df37aa7d5aa3ebc5ecdc3526b0468c5b8db669064ebe8096dfc007',
    shouldSweep: false,
    paymentId: '',
    nettype: 'MAINNET',
    unspentOuts: unspentOuts,
    randomOutsCb: function () {
      return {
        amount_outs: [
          { amount: '0', outputs: [] },
          { amount: '0', outputs: [] }
        ]
      }
    }
   }
WABridge.createTransaction(options)
  .then(function (result) {
    console.log(result)
  })
```

-----

## License

See [`LICENSE.txt`](LICENSE.txt) for license.

All source code copyright © 2024 by Beldex. All rights reserved.

All source code copyright © 2022 by MyMonero. All rights reserved.
