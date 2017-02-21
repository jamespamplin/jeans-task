package controllers

import javax.inject._

import akka.stream.scaladsl.Source
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.ProductProvider

@Singleton
class ProductSales @Inject() extends Controller {
  def index = Action {
    val data = ProductProvider.sampleData
    val dataAsJsonSeq = data.map(Json.toJson(_))
    val source = Source(dataAsJsonSeq)

    Ok.chunked(
      source
    )
  }
}
