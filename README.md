# pet-shelter-services
This application is a behind the scenes service that manages a datastore of Pets.

The Pet Shelter API gives you a full suite of options to create, modify, or delete records of pet and their information, such as name, type, breed, location.

##### Table of Contents
###### Resources
* [Pet](#pet) <br/>

###### Requests
* [Get All Pets](#get-all-pets) <br/>
* [Create a Pet](#create-a-pet) <br/>
* [Get a Pet](#get-a-pet) <br/>
* [Update a Pet](#update-a-pet) <br/>
* [Delete a Pet](#delete-a-pet) <br/>

## Endpoint
https://pet-shelter-services.herokuapp.com/

## Resources
### Pet
A pet is a domestic or tamed animal kept for companionship or pleasure.

| Name    | Description |
|---------|-------------|
| id _(Uuid)_ | Unique identifier |
| name _(String)_ | The name of a given pet. |
| typeName _(String)_ | The name of the type of pet which is typically an animal. ie. cat, dog, etc... |
| breedName _(String)_ | The name of the stock of animals within the species having a distinctive appearance. |
| location _(String)_ | The place the animal can be found. |
| lat _(Float)_ | The latitude of the location of the animal. |
| long _(Float)_ | The latitude of the location of the animal. |

## Requests

### Get All Pets
#### Request
*URI Parameters*

`GET /pets`

#### Example Request
```
GET /pets
Accept: application/json
```
#### Example Response
```
HTTP 200 Content-Type: application/json
```
```
[
    {
      "id": "1",
      "name": "Doge",
      "typeName": "Dog",
      "breedName": "Shiba Inu",
      "location": "Regina, SK",
      "lat": "50.4079406",
      "long": "-104.6214"
    }
]
```

### Create a Pet
#### Request
*URI Parameters*

`POST /pets`

*Request Parameters*

* name (Required)
* typeName (Required)
* breedName (Required)
* location (Required)
* lat (Required) - Valid latitude coordinate
* long (Required) - Valid longitude coordinate

#### Example Request
```
POST /pets
Accept: application/json

{
  "name": "Doge",
  "typeName": "Dog",
  "breedName": "Shiba Inu",
  "location": "Regina, SK",
  "lat": "50.4079406",
  "long": "-104.6214"
}
```

#### Example Response
```
HTTP 200 Content-Type: application/json
```
```
{
  "id": "1",
  "name": "Doge",
  "typeName": "Dog",
  "breedName": "Shiba Inu",
  "location": "Regina, SK",
  "lat": "50.4079406",
  "long": "-104.6214"
}
```

### Get a Pet
#### Request
*URI Parameters*

`GET /pets/{id}`

#### Example Request
```
GET /pets/1
Accept: application/json
```

#### Example Response
```
HTTP 200 Content-Type: application/json
```
```
{
  "id": "1",
  "name": "Doge",
  "typeName": "Dog",
  "breedName": "Shiba Inu",
  "location": "Regina, SK",
  "lat": "50.4079406",
  "long": "-104.6214"
}
```

### Update a Pet
#### Request
*URI Parameters*

`PUT /pets/{id}`

*Request Parameters*

* name (Required)
* typeName (Required)
* breedName (Optional)
* location (Required)
* lat (Required) - Valid latitude coordinate
* long (Required) - Valid longitude coordinate

#### Example Request
```
PUT /pets/1
Accept: application/json

{
  "id": "1",
  "name": "Big Ol' Pupper",
  "typeName": "Dog",
  "breedName": "Shiba Inu",
  "location": "Regina, SK",
  "lat": "50.4079406",
  "long": "-104.6214"
}
```

#### Example Response
```
HTTP 200 Content-Type: application/json
```
```
{
  "id": "1",
  "name": "Big Ol' Pupper",
  "typeName": "Dog",
  "breedName": "Shiba Inu",
  "location": "Regina, SK",
  "lat": "50.4079406",
  "long": "-104.6214"
}
```

### Delete a Pet
#### Request
*URI Parameters*

`DELETE https://pet-shelter-services.herokuapp.com/pets/{id}`

#### Example Request
```
DELETE /pets/1
Accept: application/json
```

#### Example Response
```
HTTP 200 Content-Type: application/json
```
