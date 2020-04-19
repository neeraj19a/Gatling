/*
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CsvFeeder extends  Simulation{

  val httpConf=http.baseUrl("http://localhost:8080/app/")
    .header("Accept", "application/json")

  val csvFeeder=csv("data/csvFile.csv").circular

  def getVideoGamesByCSV() ={

    repeat(10){
      feed(csvFeeder).
        exec(http("Get Video games from CSV").get("videogames/${gameId}").check(jsonPath("$.name").is("${gameName}"))
        .check(status.is(200))).pause(1)
    }
  }

  val scn=scenario("CSV Feeder")
    .exec(getVideoGamesByCSV())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
*/