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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmeanstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute an [arithmetic mean][arithmetic-mean] and a [corrected sample standard deviation][sample-stdev] incrementally.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5ca648efa8739942a21b07ad7df1947cdd01b662/lib/node_modules/@stdlib/stats/incr/meanstdev/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

and the [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5ca648efa8739942a21b07ad7df1947cdd01b662/lib/node_modules/@stdlib/stats/incr/meanstdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->



<section class="usage">

## Usage

```javascript
import incrmeanstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-meanstdev@esm/index.mjs';
```

#### incrmeanstdev( \[out] )

Returns an accumulator `function` which incrementally computes an [arithmetic mean][arithmetic-mean] and [corrected sample standard deviation][sample-stdev].

```javascript
var accumulator = incrmeanstdev();
```

By default, the returned accumulator `function` returns the accumulated values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var accumulator = incrmeanstdev( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated accumulated values. If not provided an input value `x`, the accumulator function returns the current accumulated values.

```javascript
var accumulator = incrmeanstdev();

var ms = accumulator();
// returns null

ms = accumulator( 2.0 );
// returns [ 2.0, 0.0 ]

ms = accumulator( 1.0 );
// returns [ 1.5, ~0.71 ]

ms = accumulator( 3.0 );
// returns [ 2.0, 1.0 ]

ms = accumulator( -7.0 );
// returns [ -0.25, ~4.57 ]

ms = accumulator( -5.0 );
// returns [ -1.2, ~4.49 ]

ms = accumulator();
// returns [ -1.2, ~4.49 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are equal to `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import incrmeanstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-meanstdev@esm/index.mjs';

var offset;
var acc;
var buf;
var out;
var ms;
var N;
var v;
var i;
var j;

// Define the number of accumulators:
N = 5;

// Create an array buffer for storing accumulator output:
buf = new ArrayBuffer( N*2*8 ); // 8 bytes per element

// Initialize accumulators:
acc = [];
for ( i = 0; i < N; i++ ) {
    // Compute the byte offset:
    offset = i * 2 * 8; // stride=2, bytes_per_element=8

    // Create a new view for storing accumulated values:
    out = new Float64Array( buf, offset, 2 );

    // Initialize an accumulator which will write results to the view:
    acc.push( incrmeanstdev( out ) );
}

// Simulate data and update the sample means and standard deviations...
for ( i = 0; i < 100; i++ ) {
    for ( j = 0; j < N; j++ ) {
        v = randu() * 100.0 * (j+1);
        acc[ j ]( v );
    }
}

// Print the final results:
console.log( 'Mean\tStDev' );
for ( i = 0; i < N; i++ ) {
    ms = acc[ i ]();
    console.log( '%d\t%d', ms[ 0 ].toFixed( 3 ), ms[ 1 ].toFixed( 3 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/meanvar`][@stdlib/stats/incr/meanvar]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean and unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmeanstdev`][@stdlib/stats/incr/mmeanstdev]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean and corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-meanstdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-meanstdev

[test-image]: https://github.com/stdlib-js/stats-incr-meanstdev/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-meanstdev/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-meanstdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-meanstdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-meanstdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-meanstdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-meanstdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-meanstdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-meanstdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-meanstdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-meanstdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-meanstdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-meanstdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-meanstdev/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

<!-- <related-links> -->

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean/tree/esm

[@stdlib/stats/incr/meanvar]: https://github.com/stdlib-js/stats-incr-meanvar/tree/esm

[@stdlib/stats/incr/mmeanstdev]: https://github.com/stdlib-js/stats-incr-mmeanstdev/tree/esm

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats-incr-stdev/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
