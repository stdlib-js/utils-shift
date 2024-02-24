/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Collection } from '@stdlib/types/array';

/**
* Removes and returns the first element of a collection.
*
* ## Notes
*
* -   The function returns an array with two elements: the shortened collection and the removed element.
* -   If the input collection is a typed array whose length is greater than `0`, the first return value does not equal the input reference.
* -   For purposes of generality, always treat the output collection as distinct from the input collection.
*
* @param collection - collection
* @returns updated collection and the removed element
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var out = shift( arr );
* // returns [ [ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* var out = shift( arr );
* // returns [ <Float64Array>[ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]
*/
declare function shift<T = unknown>( collection: Collection<T> ): [Collection<T>, T];


// EXPORTS //

export = shift;