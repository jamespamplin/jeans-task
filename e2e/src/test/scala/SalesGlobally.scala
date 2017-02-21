import org.scalatest.{MustMatchers, OptionValues, WordSpec}
import org.scalatest.selenium.HtmlUnit


class SalesGlobally extends WordSpec with MustMatchers with OptionValues with HtmlUnit {

  val host = "http://localhost:3000"

  "Sales Global" when {
    "viewing the Global Sales page" must {
      "show a global sales summary" in {
        go to host

        find("h1").value.text mustBe "Global Sales 2016"
      }

      "show top selling months globally" in {
        go to host

        find("h2").value.text mustBe "By month"
      }
    }
  }

}
