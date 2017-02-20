package controllers

import javax.inject._
import play.api.mvc.{Action, Controller}

@Singleton
class ProductSales @Inject() extends Controller {
  def index = Action {
    Ok("Hello")
  }
}
