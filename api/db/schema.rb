# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "host_highlights", id: false, force: :cascade do |t|
    t.string "name"
    t.string "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "host_last_reviews", id: false, force: :cascade do |t|
    t.string "body"
    t.string "client_image_url"
    t.string "client_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "host_locales", id: false, force: :cascade do |t|
    t.string "country"
    t.float "price"
    t.string "currency"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "host_users", id: false, force: :cascade do |t|
    t.string "first_name"
    t.string "image_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "hosts", id: false, force: :cascade do |t|
    t.boolean "availability_confirmed"
    t.string "chopped_desc"
    t.string "highlights"
    t.boolean "favorite"
    t.float "id"
    t.boolean "is_superhero"
    t.string "last_review"
    t.string "locale"
    t.float "rating"
    t.string "region_address"
    t.float "reviews_count"
    t.string "title"
    t.string "user"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
