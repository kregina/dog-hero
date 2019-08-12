require 'rails_helper'

RSpec.configure do |config|
  # Specify a root folder where Swagger JSON files are generated
  # NOTE: If you're using the rswag-api to serve API descriptions, you'll need
  # to ensure that it's configured to serve Swagger from the same folder
  config.swagger_root = Rails.root.to_s + '/swagger'

  # Define one or more Swagger documents and provide global metadata for each one
  # When you run the 'rswag:specs:to_swagger' rake task, the complete Swagger will
  # be generated at the provided relative path under swagger_root
  # By default, the operations defined in spec files are added to the first
  # document below. You can override this behavior by adding a swagger_doc tag to the
  # the root example_group in your specs, e.g. describe '...', swagger_doc: 'v2/swagger.json'
  config.swagger_docs = {
    'v1/swagger.json' => {
      swagger: '2.0',
      info: {
        title: 'Dog Hero',
        version: 'v1'
      },
      "paths": {
        "/hosts/index": {
          "get": {
            "tags": [
              "hosts"
            ],
            "summary": "List all hosts",
            "description": "Returns a list of hosts",
            "operationId": "Hosts_getHosts",
            "produces": [
              "application/json"
            ],
            "responses": {
              "200": {
                "description": "Success",
                "schema": {
                  "uniqueItems": false,
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Host"
                  }
                }
              }
            }
          }
        }
      },
      "definitions": {
        "Host": {
            "type": "object",
            "properties": {
              "availability_confirmed": {
                "type": "boolean"
              },
              "chopped_desc": {
                "type": "string",
                "example": "Os cachorros são sinceros amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…"
              },
              "highlights": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "example": "loyal_customers"
                    },
                    "value": {
                      "type": "string",
                      "example": 4
                    }
                  }
                }
              },
              "favorite": {
                "type": "boolean"
              },
              "id": {
                "type": "number",
                "example": 165085
              },
              "is_superhero": {
                "type": "boolean"
              },
              "last_review": {
                "type": "object",
                "properties": {
                  "body": {
                    "type": "string",
                    "example": "Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!"
                  },
                  "client_image_url": {
                    "type": "string",
                    "example": "https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135"
                  },
                  "client_name": {
                    "type": "string",
                    "example": "Julia"
                  }
                }
              },
              "locale": {
                "type": "object",
                "properties": {
                  "country": {
                    "type": "string",
                    "example": "bra"
                  },
                  "price": {
                    "type": "number",
                    "example": 50
                  },
                  "currency": {
                    "type": "string",
                    "example": "BRL"
                  }
                }
              },
              "rating": {
                "type": "number",
                "example": 5
              },
              "region_address": {
                "type": "string",
                "example": "Vila Mariana São Paulo-SP"
              },
              "reviews_count": {
                "type": "number",
                "example": 8
              },
              "title": {
                "type": "string",
                "example": "Find love here"
              },
              "user": {
                "type": "object",
                "properties": {
                  "first_name": {
                    "type": "string",
                    "example": "Thiago"
                  },
                  "image_url": {
                    "type": "string",
                    "example": "https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"
                  }
                }
              }
            }
          }
      }
    }
  }
end
