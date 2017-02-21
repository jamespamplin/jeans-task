import org.scalatest.{MustMatchers, OptionValues, WordSpec}
import org.scalatest.selenium.HtmlUnit


class SalesByCountrySpec extends WordSpec with MustMatchers with OptionValues with HtmlUnit {

  val host = "http://localhost:3000"

  "Sales by Country" when {
    "viewing the Germany Sales page" must {
      "show a sales summary for Germany" in {
        go to s"$host/germany"

        find("h1").value.text mustBe "Germany Sales 2016"
      }

      "show top manufacturers by gender for Germany" in {
        go to s"$host/germany"

        find("h2").value.text mustBe "Top Manufacturers by Gender"
      }

      "show top sizes for Germany" in {
        go to s"$host/germany"

        find("h2").value.text mustBe "Top Sizes"
      }

      "show top selling months for Germany" in {
        go to s"$host/germany"

        find("h2").value.text mustBe "Top Selling Months"
      }
    }
  }
}
