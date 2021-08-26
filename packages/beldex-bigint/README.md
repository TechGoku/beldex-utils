
> :warning: This project is under heavy development. Expect bugs & breaking changes.

## Installation

```bash
npm i @beldex/beldex-bigint
```

## Usage

```js
const JSBigInt = require('@beldex/beldex-bigint').BigInteger;
const beldex_amount_format_utils = require('@beldex/beldex-money-format');
const amount = new JSBigInt('32100000')
const amount_str = beldex_amount_format_utils.formatMoney(amount)
```

-----

## License

See `LICENSE.txt` for license.

All source code copyright © 2021 by MyMonero. All rights reserved.