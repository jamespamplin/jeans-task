package models

import play.api.libs.json.{JsString, Writes}

sealed trait Manufacturer {
  val name: String
}


object Manufacturer {
  implicit val jsonWrites: Writes[Manufacturer] = Writes[Manufacturer] { m =>
    JsString(m.name)
  }


  case object DenzilJeans extends Manufacturer {
    val name = "Denzil Jeans"
  }

  case object HipsterJeans extends Manufacturer {
    val name = "Hipster Jeans Co"
  }

  case object ShreddedJeans extends Manufacturer {
    val name = "Shredded Jeans"
  }

  case object WrangledJeans extends Manufacturer {
    val name = "Wrangled Jeans"
  }

  val all = Map(
    DenzilJeans.name -> DenzilJeans,
    HipsterJeans.name -> HipsterJeans,
    ShreddedJeans.name -> ShreddedJeans,
    WrangledJeans.name -> WrangledJeans
  )

  def apply(name: String): Option[Manufacturer] = all.get(name)
  def unapply(m: Manufacturer): Option[String] = Some(m.name)
}
