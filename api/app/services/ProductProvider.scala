package services

import models._
import org.joda.time.DateTime

import scala.util.Random


object ProductProvider {

  // TODO persist to disk

  private def allSizes(gender: Gender) = gender match {
    case Gender.Male => Set(28, 30, 32, 34, 36, 38, 40)
    case Gender.Female => Set(10, 12, 14, 16, 18, 20, 22)
  }

  val allColours = Set("Blue", "Black", "Smokey", "Grey", "Navy", "Brown")

  val allStyles = Set("Bootcut", "Skinny", "Flares")

  val allCountries = Set(
    "UK", "Ireland", "Germany", "Spain", "Belgium", "Portugal", "Switzerland",
    "Poland", "Czech Republic", "Slovakia", "Hungary", "Slovenia"
  ).map(_.toLowerCase.replace(' ', '-'))

  // Order weekday is Wednesday - start day 2016-01-06 06:00
  private val startDate = new DateTime(2016, 1, 6, 6, 0)
  private val orderDates = 0 to 15 map { n => startDate.plusDays(n * 7) }


  private def generateData = for {
    date <- orderDates
    country <- allCountries
    colour <- allColours
    gender <- Gender.all
    size <- allSizes(gender)
    style <- allStyles
    manufacturer <- Manufacturer.all.values
    qty = Random.nextInt(100)
    if qty > 0
  } yield Order(
    date,
    Product(
      manufacturer,
      gender,
      size,
      colour,
      style
    ),
    country,
    qty
  )


  lazy val sampleData = generateData
}
