# Poppers

[![npm](https://img.shields.io/npm/v/poppers.svg)](https://www.npmjs.com/package/poppers)

Some little things which usually pop up on your pages.

## Table of contents

<!-- MarkdownTOC -->

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [API](#api)
- [Some common stuff](#some-common-stuff)

<!-- /MarkdownTOC -->

## Installation

```sh
npm i poppers
```

## Basic usage

### Module

```js
import {Toast} from 'poppers';

new Toast('I am a toast').pop();
```

### `script` tag

```html
<head>
    <link rel="stylesheet" href="path/to/poppers/dist/poppers.min.css">
</head>
<body>
    <script src="path/to/poppers/dist/poppers.min.js"></script>
    <script>
        new poppers.Toast('I am a toast').pop();
    </script>
</body>
```

## API

> Some common stuff without description are explained in the next section.

-   **`Dropdown`**

    -   `constructor(menu: MenuItem[], target: HTMLElement | string, options = dropdownOptions)`

        -   `menu`

            -   `MenuItem`

                ```ts
                {
                    // Triggered when the item clicked.
                    handler: () => void,

                    // Text of the item.
                    text: string
                }
                ```

        -   `target`

            Element which can be clicked to pop.

            Should be a CSS selector when the value is `string`.

        -   `options`

            -   `dropdownOptions`

                ```js
                {
                    backdropTransparent: true
                }
                ```

    -   `pop()`

    -   `bob()`

-   **`Notification`**

    -   `constructor(message: string, options = notificationOptions)`

        -   `options`

            -   `notificationOptions`

                ```js
                {
                    backdropDisabled: true,
                    autoBob: true
                }
                ```

    -   `pop()`

    -   `bob()`

-   **`Toast`**

    -   `constructor(message: string, options = toastOptions)`

        -   `options`

            -   `toastOptions`

                ```js
                {
                    backdropDisabled: true,
                    autoBob: true
                }
                ```

    -   `pop()`

    -   `bob()`

-   **`alert(message: string)`**

-   **`confirm(message: string): Promise`**

    Resolves when "OK" clicked and rejects when "Cancel" clicked.

-   **`prompt(message: string, defaultValue: string = ''): Promise`**

    Resolves with the input value when "OK" clicked and rejects when "Cancel" clicked.

## Some common stuff

### Arguments

-   `options: Options`

    Base options, merged with options that passed as an argument actually.

    -   `Options`

        ```js
        {
            // Close the popper automatically.
            autoBob: boolean = false,

            // How long (ms) before the popper closed automatically.
            autoBobDelay: number = 3000,

            // Disable the backdrop of the popper.
            backdropDisabled: boolean = false,

            // The backdrop is transparent.
            backdropTransparent: boolean = false,

            // The popper can be closed by clicking the backdrop.
            clicksBackdropToBob: boolean = true,

            // Main content of the popper.
            // Ignored if it is a falsy value.
            // Converted to `string` if it is not a `Node`.
            content: string | Node,
        }
        ```

-   `message: string`

    Pure text content. Could be overrode by `options.content`.

### Methods

-   `pop()`

    Open the popper.

-   `bob()`

    Close the popper (upside down "pop" 🙃).
