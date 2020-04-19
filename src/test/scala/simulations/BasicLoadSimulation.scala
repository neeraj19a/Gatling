import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicLoadSimulation extends Simulation {

  val httpConf = http.baseUrl("http://localhost:8080/app/").header("Accept", "application/json")


  def getAllVideoGames() = {
    repeat(3) {
      exec(http("Get All Video Games").get("videogames").check(status.is(200)))
    }
  }


  def getSpecificVideiGame() = {
    repeat(5) {
      exec(http("Get Specific game").get("videogames/1").check(status.in(200 to 210)))
    }
  }


  /*
  val scn = scenario("Code Reuse")
    .exec(getAllVideoGames())
   // .pause(5)
    .exec(getSpecificVideiGame())
    //.pause(5)
    .exec(getAllVideoGames())

  setUp(scn.inject(nothingFor(1),atOnceUsers(150),constantUsersPerSec(100).during(5),
    rampUsersPerSec(1) to (500) during(20))).protocols(httpConf).maxDuration(1 minute)
*/

  val scn = scenario("Code Reuse")
    .forever() {
    exec(getAllVideoGames())
    // .pause(5)
    .exec(getSpecificVideiGame())
    //.pause(5)
    .exec(getAllVideoGames())
}
  setUp(scn.inject(nothingFor(1),atOnceUsers(150),constantUsersPerSec(100).during(5),
    rampUsersPerSec(1) to (500) during(20))).protocols(httpConf).maxDuration(60)

}