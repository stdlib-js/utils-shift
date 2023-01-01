<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# shift

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove and return the first element of a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import shift from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-shift@esm/index.mjs';
```

#### shift( collection )

Removes and returns the first element of a `collection`. A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (i.e., an [`Object`][mdn-object] having a valid writable `length` property). 

```javascript
var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

var out = shift( arr );
// returns [ [ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]

var bool = ( out[ 0 ] === arr );
// returns true

var lastValue = out[ 1 ];
// returns 1.0
```

In contrast to [`Array.prototype.shift`][mdn-array-shift] which returns only the removed element, the function also returns the shortened collection. For [typed arrays][mdn-typed-array] having a length greater than `0`, the returned collection is a new [typed array][mdn-typed-array] view.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var arr = new Float64Array( 2 );
arr[ 0 ] = 1.0;
arr[ 1 ] = 2.0;

var out = shift( arr );
// returns [ <Float64Array>[ 2.0 ], 1.0 ]

var bool = ( out[ 0 ] === arr );
// returns false

bool = ( out[ 0 ].buffer === arr.buffer );
// returns true

var lastValue = out[ 1 ];
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided a [typed array][mdn-typed-array], the function does **not** change the underlying [`ArrayBuffer`][mdn-arraybuffer]. The function returns a new [typed array][mdn-typed-array] view whose length is one less than the input [typed array][mdn-typed-array] length. Accordingly, the function does **not** reduce the memory footprint of an input [typed array][mdn-typed-array].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import shift from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-shift@esm/index.mjs';

var arr;
var out;
var i;

arr = new Float64Array( 100 );
for ( i = 0; i < 100; i++ ) {
    out = shift( arr );
    arr = out[ 0 ];
    console.log( 'Length: %d', arr.length );
}
console.log( arr );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/pop`][@stdlib/utils/pop]</span><span class="delimiter">: </span><span class="description">remove and return the last element of a collection.</span>
-   <span class="package-name">[`@stdlib/utils/push`][@stdlib/utils/push]</span><span class="delimiter">: </span><span class="description">add one or more elements to the end of a collection.</span>
-   <span class="package-name">[`@stdlib/utils/unshift`][@stdlib/utils/unshift]</span><span class="delimiter">: </span><span class="description">add one or more elements to the beginning of a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-shift.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-shift

[test-image]: https://github.com/stdlib-js/utils-shift/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-shift/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-shift/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-shift?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-shift.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-shift/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-shift/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-shift/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-shift/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-shift/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-shift/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-array-shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/pop]: https://github.com/stdlib-js/utils-pop/tree/esm

[@stdlib/utils/push]: https://github.com/stdlib-js/utils-push/tree/esm

[@stdlib/utils/unshift]: https://github.com/stdlib-js/utils-unshift/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
