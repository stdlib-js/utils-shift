/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Remove and return the first element of a collection.
*
* @module @stdlib/utils-shift
*
* @example
* var shift = require( '@stdlib/utils-shift' );
* var Float64Array = require( '@stdlib/array-float64' );
*
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var out = shift( arr );
* // returns [ [ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]
*
* arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* out = shift( arr );
* // returns [ <Float64Array>[ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]
*/

// MODULES //

var shift = require( './main.js' );


// EXPORTS //

module.exports = shift;