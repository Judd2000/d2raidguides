using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace raidguideserver.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SignIn : ControllerBase
  {
    public string[] Get() {
      return ["Hello", "World"];
    }
  }
}
