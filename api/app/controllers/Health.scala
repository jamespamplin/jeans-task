package controllers

import javax.inject._
import play.api.mvc.{Action, Controller}

@Singleton
class Health @Inject() extends Controller {
  def healthCheck = Action {
    Ok("ok")
  }
}
