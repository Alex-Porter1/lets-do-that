# APIs

# User

## Create a new user

* **Method**: `POST`
* **Path**: /api/users/

Input:

```json
{
    "username": string,
    "email": string,
    "password": string,
    "birthday": date,
    "first_name": string,
    "last_name": string,
}
```
Output:

```json
{
    "id": int,
    "username": string,
    "email": string,
    "birthday": date,
    "first_name": string,
    "last_name": string,
}
```

## Get list of all users

* **Method**: `GET`
* **Path**: /api/users/

Input:

N/A

Output:

```json
{
    "id": int,
    "username": string,
    "email": string,
    "birthday": date,
    "first_name": string,
    "last_name": string,
}
```

## Get a specific user by ID

* **Method**: `GET`
* **Path**: /api/users/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "id": int,
    "username": string,
    "email": string,
    "birthday": date,
    "first_name": string,
    "last_name": string,
}
```

## Delete a user

* **Method**: `DELETE`
* **Path**: /api/users/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "message": "delete successful",
}
```

## Update a user
* Stretch goal

# Activity

## Get a list of all activities

* **Method**: `GET`
* **Path**: /api/activities/

Input:

N/A

Output:

```json
{
    "id": int,
    "name": string,
    "description": string,
    "picture_url": string,
    "category": category object,
    "rating": rating object,
}
```

## Get a specific activity

* **Method**: `GET`
* **Path**: /api/activities/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "id": int,
    "name": string,
    "description": string,
    "picture_url": string,
    "category": category object,
    "rating": rating object,
}
```

## Create a new activity

* **Method**: `POST`
* **Path**: /api/activities/

Input:

```json
{
    "name": string,
    "description": string,
    "picture_url": string,
    "category_id": int,
    "rating_id": int,
}
```
Output:

```json
{
    "id": int,
    "name": string,
    "description": string,
    "picture_url": string,
    "category": category object,
    "rating": rating object,
}
```

# Delete a specific activity

* **Method**: `DELETE`
* **Path**: /api/activities/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "message": "delete sucess",
}
```

# Questionaire

* We don't think we will need api endpoints for this

# Category

## Get all categories

* **Method**: `GET`
* **Path**: /api/categories/

Input:

N/A

Output:

```json
{
    "id": int,
    "name": string,
}
```

## Get a specific category

* **Method**: `GET`
* **Path**: /api/categories/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "id": int,
    "name": string,
}
```

## Create a category

* **Method**: `POST`
* **Path**: /api/categories/

Input:

```json
{
    "name": string,
}
```

Output:

```json
{
    "id": int,
    "name": string,
}
```

## Delete a specific category

* **Method**: `DELETE`
* **Path**: /api/categories/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "message": "delete success",
}
```

# Rating

## Get all ratings

* **Method**: `GET`
* **Path**: /api/ratings/

Input:

N/A

Output:

```json
{
    "id": int,
    "value": int,
    "description": string,
}
```

## Get a specific rating

* **Method**: `GET`
* **Path**: /api/ratings/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "id": int,
    "value": int,
    "description": string,
}
```

## Create a rating

* **Method**: `POST`
* **Path**: /api/ratings/

Input:

```json
{
    "value": int,
    "description": string,
}
```

Output:

```json
{
    "id": int,
    "value": int,
    "description": string,
}
```

## Delete a specific rating

* **Method**: `DELETE`
* **Path**: /api/ratings/:id/

Input:

```json
{
    "id": int,
}
```

Output:

```json
{
    "message": "delete success",
}
```