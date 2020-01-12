# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|mail|string|null: false , unique:true|

### Association
- has_many :groups through: groups_users
- has_many :messages
  has_many :groups_users


## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: true|
|image|string|null: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

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
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user