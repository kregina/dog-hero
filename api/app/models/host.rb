=begin
Dog Hero

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 1.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end


class Host < ApplicationRecord
  serialize :highlights, Array
  serialize :user
  serialize :last_review
  serialize :locale
end
