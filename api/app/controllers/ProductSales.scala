package controllers

import javax.inject._

import akka.stream.scaladsl.Source
import models.Order
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.ProductProvider

@Singleton
class ProductSales @Inject() extends Controller {
  def index = Action {
    val firstOrders :+ lastOrder = ProductProvider.sampleData.toList

    val jsonString = Json.toJson(_: Order).toString
    val jsonStringWithTrailingComma = jsonString(_: Order) + ","

    val dataAsJsonSeq: List[String] =
      "[" +: firstOrders.map(jsonStringWithTrailingComma) :+ jsonString(lastOrder) :+ "]"


    val source = Source(dataAsJsonSeq)

    Ok.chunked(
      source
    ).as("application/json")
  }
}
