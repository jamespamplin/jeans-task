package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.ProductProvider

@Singleton
class ProductSales @Inject() extends Controller {
  def index = Action {
    Ok(
      Json.toJson(ProductProvider.sampleData)
    )
  }
}
