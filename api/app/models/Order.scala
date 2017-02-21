package models

import org.joda.time.DateTime
import play.api.libs.json.Json
import play.api.libs.json.Writes.jodaDateWrites


case class Order(date: DateTime, product: Product, deliveryCountry: String, quantity: Int)


object Order {
  implicit val dateWrites = jodaDateWrites("yyyy-MM-dd'T'HH:mm:ssZ")
  implicit val jsonWrites = Json.writes[Order]


}
