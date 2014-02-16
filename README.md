mt-coordtransform
=================

Coordinate transformations between latitude/longitude WGS84 and OSGB36.


Installation
------------

    $ npm install mt-coordtransform


Usage
-----

The module contains methods for transforming latitude/longitude coordinates between WGS84 (generally used by GPS systems or any world-wide reference system) and OSGB36 (used in all Ordnance Survey mapping). 

    var LatLon = require('mt-latlon');
    var CoordTransform = require('mt-coordtransform');

    var pointWGS84 = new LatLon(51.5136, 0.0);
    var pointOSGB36 = CoordTransform.convertWGS84toOSGB36(pointWGS84);

The available methods of the `CoordTransform` module object is listed below.



### CoordTransform.convertOSGB36toWGS84(pointOSGB36)

Convert latitude/longitude point in OSGB36 to WGS84.

- __pointOSGB36__ (LatLon) latitude/longitude in OSGB36 reference frame

```
var pointOSGB36 = new LatLon(51.5136, 0.0);
var pointWGS84 = CoordTransform.convertOSGB36toWGS84(pointOSGB36);
// => 51°30′51″N, 000°00′06″W (as LatLon object)
```


### CoordTransform.convertWGS84toOSGB36(pointWGS84)

Convert latitude/longitude point in WGS84 to OSGB36.

- __pointWGS84__ (LatLon) latitude/longitude in WGS84 reference frame

```
var pointWGS84 = new LatLon(51.5136, 0.0);
var pointOSGB36 = CoordTransform.convertWGS84toOSGB36(pointWGS84);
// => 51°30′47″N, 000°00′06″E (as LatLon object)
```


### CoordTransform.convertEllipsoid(point, e1, t, e2)

Convert latitude/longitude from one ellipsoidal model to another.


q.v. Ordnance Survey 'A guide to coordinate systems in Great Britain' Section 6
(www.ordnancesurvey.co.uk/oswebsite/gps/docs/A_Guide_to_Coordinate_Systems_in_Great_Britain.pdf)

- __point__ (LatLon) latitude/longitude in source reference frame
- __e1__ (number[]) source ellipse parameters
- __t__ (number[]) Helmert transform parameters
- __e2__ (number[]) target ellipse parameters




Further information
-------------------

Please visit www.movable-type.co.uk/scripts/latlong-convert-coords.html for more information on conversion between WGS84 and OGSB36 systems.


Copyright and license
---------------------

The original code was written by Chris Veness and can be found at
www.movable-type.co.uk/scripts/latlong-convert-coords.html. It is released under the
simple Creative Commons attribution license
(http://creativecommons.org/licenses/by/3.0/).

This project is released under the MIT license.