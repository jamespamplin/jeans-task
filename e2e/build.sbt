name := """e2e"""

version := "1.0"

scalaVersion := "2.11.7"

// Change this to another test framework if you prefer
libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest" % "3.0.1" % "test",
  "org.seleniumhq.selenium" % "selenium-java" % "2.35.0" % "test"
)
