
<p align="center">
  Encryption and decryption library used in the Beldex packages
</p>


> :warning: This project is under heavy development. Expect bugs & breaking changes.

## Installation

```bash
npm i @bdxi/beldex-cryptor
```

## Usage

```js
const cryptor = require('@bdxi/beldex-cryptor');
cryptor.New_EncryptedBase64String__Async ('testing string', '123456').then(function (result) {
  console.log(result);
});
```

-----

## License

See `LICENSE.txt` for license.

All source code copyright © 2023 by Beldex. All rights reserved.