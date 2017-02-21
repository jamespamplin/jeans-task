package models

import play.api.libs.json.Json
import play.api.libs.json._

import play.api.libs.functional.syntax._

sealed trait Gender



object Gender {
  implicit val jsonWrites: Writes[Gender] = Writes[Gender](gender => JsString(gender.toString.toLowerCase))

  case object Male extends Gender
  case object Female extends Gender

  val all = Set(Male, Female)

  def apply(a: String): Option[Gender] = a match {
    case "male" => Some(Male)
    case "female" => Some(Female)
    case _ => None
  }

  def unapply(g: Gender): Option[String] = Some(g.toString)
}
