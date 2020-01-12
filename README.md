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

### Association
- belongs_to :group
- has_many :messages

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string|null: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users
- has_many :messages

## groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user