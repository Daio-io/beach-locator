# beach-locator

Location services for beaches

You can make a query either by Geo(lat, long), by text or by id

### Text or iD Search:

ID:

    http://beach-locator.herokuapp.com/location/1449
    
Text:

    http://beach-locator.herokuapp.com/location/NAME_OF_BEACH
    
### Geo Lookup

#### Params:

    ?lat=
    &long=
    &dist=<distance_in_meters> // optional, will default to 10km
    
NOTE: You must provide both lat and long values
    
#### Example:

    http://beach-locator.herokuapp.com/location?lat=51.488884&long=-3.275809&dist=50000

### Todo:

- Add more locations
- Search by country param
