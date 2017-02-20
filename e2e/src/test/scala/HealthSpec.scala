import org.scalatest._
import org.scalatest.selenium.HtmlUnit

class HealthSpec extends FlatSpec with MustMatchers with HtmlUnit {
  // TODO move to env var
  val host = "http://localhost:9000"

  "api" must "serve GET /health" in {
    go to s"$host/health"

    pageSource mustBe "ok"
  }
}
