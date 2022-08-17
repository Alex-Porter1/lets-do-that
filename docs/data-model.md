# Data models

## User

| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| email | string | yes | no |
| password | string | no | no |
| birthday | date | no | no |
| first_name | string | no | no |
| last_name | string | no | no |
| activity | reference to Activity entity | no | no |

* Possible fields: is_active

## Activity

| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| description | string | no | no |
| picture_url | string | no | yes |
| category | reference to CategoryVO entity | no | no |
| rating | reference to RatingVO entity | no | no |

* Stretch goal - add other people to activity

## Questionaire

| Name | Type | Unique | Optional |
|-|-|-|-|
| outdoors_q | boolean | no | no |
| sweat_q | boolean | no | no |
| hunger_q | boolean | no | no |

* Possible change: Use decision tree to navigate questions (are you hungry - if yes, bring up food options)
* Outdoors - outside or inside?
* Break a sweat - yes or no?
* Hungry - yes or no?

## Category

| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | yes | no |

## Rating
| Name | Type | Unique | Optional |
|-|-|-|-|
| value | integer | no | no |
| description | string | no | no |