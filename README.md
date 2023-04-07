# Algorithms JavaScript

This repository contains some interesting scripts using JavaScript. Ultimately, there will be 9 more interesting projects and several dozen mini JavaScript scripts that perform various operations on data types.

At the moment completed and deployed projects:

- ROT 13 Cipher
- Bank Card Verify
- soon...

---

# **Projects**

# _Caesar Cipher_

Data encryption application.
The application uses the written ROT-13 algorithm, which shifts the entered letters by 13 positions in the alphabet.

Latin letters (e.g. ą, ę) do not shift, the algorithm shifts both uppercase and lowercase letters.

Possibility to copy the result.

**How to start?**

1. Go to https://rot13-cipher.netlify.app/
2. Enter a value in the "Enter value..." field
3. Press "Generate ROT-13"

# _Verify Bank Card_

The _Verify Bank Card_ application is designed to verify the entered number in several respects:

- checks the entered data type,
- checks the length of the number,
- checks the initial number index.

Based on the above information, the algorithm verifies whether the card number is correct and provides the user with information about who the card issuer is.

The application also has the function of copying the result and resetting the form.

**Some examples of valid numbers:**

- 378282246310005
- 30569309025904
- 2223016768739313

Full list of test numbers available on PayPal website:
https://developer.paypal.com/api/nvp-soap/payflow/payflow-pro/payflow-pro-testing/

**Config**

The algorithm checks the entered data based on the config, which is in:
**[/modules/cards.json](https://github.com/SCREECH115/bank-card-verify/blob/main/modules/cards.json)**

You can enter other card issuers and validate based on:

- length of the number
- starting index

**Example**

```
"Visa": {
   "numberLength": [13, 16],
   "startIndex": [4]
 },
"Discover": {
   "numberLength": [16],
   "startIndex": [60]
 },
```

**How to start?**

1. Go to https://verify-bank-card.netlify.app/
2. Enter a value in the "Enter number here" field
3. Press "VERIFY CARD"
4. Check the result

# _More soon_
