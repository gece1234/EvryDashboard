using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiTestComponent.Entities;

namespace WebApiTestComponent.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<InfoElement> Get()
        {
            return new InfoElement[] { new InfoElement {Description = "Medeltemp",Title="Väder",Value="17.8" },new InfoElement { Description="Nederbörd",Title="Regn",Value="3"} };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
