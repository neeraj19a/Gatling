/*import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckResponseCode extends Simulation{

val httpConf=http.baseUrl("http://localhost:8080/app/").
   header("Accept","application/json");

 val scn=scenario("Video Game DB - 3 calls").
   exec(http("1 call").get("videogames").check(status.is(200))).
   pause(5)

   .exec(http("2nd call").get("videogames/1").check(status.in(200 to 210))).pause(1,20)

   .exec(http("3rd call").get("videogames").check(status.not(404),status.not(500))).pause(2000.millisecond)

 setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
*/