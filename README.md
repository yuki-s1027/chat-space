## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|index: true , null: false ,unique: true|

### Association
- has_many :groups through: groups_users
- has_many :messages
  has_many :groups_users


## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: true|
|image|string|null: true|
|group_id|references :group|null: false|
|user_id|references :user|null: false|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users through: groups_users
- has_many :messages
  has_many :groups_users

## groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|group_id|references :group|null: false|
|user_id|references :user|null: false|

### Association
- belongs_to :group
- belongs_to :user