package models

import play.api.libs.json.Json


case class Product(
  manufacturer: Manufacturer,
  gender: Gender,
  size: Int,
  colour: String,
  style: String
)

object Product {
  implicit val jsonWrites = Json.writes[Product]
}


