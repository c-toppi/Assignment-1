
function webServiceRequest(url,data)
{
  // Build URL parameters from data object.
  let params = "";
  // For each key in data object...
  for (let key in data)
  {
    if (data.hasOwnProperty(key))
    {
      if (params.length == 0)
      {
        // First parameter starts with '?'
        params += "?";
      }
      else
      {
        // Subsequent parameter separated by '&'
        params += "&";
      }

      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(data[key]);

      params += encodedKey + "=" + encodedValue;
    }
  }
  let script = document.createElement('script');
  script.src = url + params;
  document.body.appendChild(script);
}


function getAQIData()
{
  console.log("getAQIData");
  let myToken = "4e33c5f6d810460e9b5bfb1e0aaca0d81ed1746e";
  let cityString = document.getElementById("citySearch");
  console.log(citySearch.value);
  let cityData = {
    token: myToken,
    callback: "processData"
  }
  let aqiurl = `https://api.waqi.info/feed/${cityString.value}/`;
  webServiceRequest(aqiurl, cityData);
}

function processData(result)
{
  if (result.status == "error")
  {
    alert("No data available");
  }
  else if (result == null)
  {
    console.log("No Data Available");
    alert("No Data Available");
  }
  else if (result == "")
  {
    console.log("No Data Available");
    alert("No Data Available");
  }
  else if (result == [])
  {
    console.log("No Data Available");
    alert("No Data Available");
  }
  else if (result == {})
  {
    console.log("No Data Available");
    alert("No Data Available");
  }
  else
  {
    let city = document.getElementById("citySearch").value;
    let tabsRef = document.getElementById("MDLTable");

    let color = "";
    if (result.data.aqi >=0 && result.data.aqi <=50)
    {
      color += "green";
    }
    else if (result.data.aqi >=51 && result.data.aqi <=100)
    {
      color += "yellow";
    }
    else if (result.data.aqi >=101 && result.data.aqi <=150)
    {
      color += "orange";
    }
    else if (result.data.aqi >=151 && result.data.aqi <=200)
    {
      color += "red";
    }
    else if (result.data.aqi >=201 && result.data.aqi <=300)
    {
      color += "purple";
    }
    else if (result.data.aqi >=301 && result.data.aqi <=500)
    {
      color += "maroon";
    }
    else if (result.data.aqi == undefined)
    {
      color += "grey";
    }
    let tabs = "";
    tabs += `<thead>`;
    tabs += `  <tr>`;
    tabs += `   <th class="mdl-data-table__cell--non-numeric">City</th>`;
    tabs += `    <th>Status</th>`;
    tabs += `    <th>AQI</th>`;
    tabs += `    <th>PM2.5</th>`;
    tabs += `  </tr>`;
    tabs += `</thead>`;
    tabs += `<tbody>`;
    tabs += `  <tr bgcolor=${color}>`;
    tabs += `    <td class="mdl-data-table__cell--non-numeric">${city}</td>`;
    tabs += `    <td>${result.status}</td>`;
    tabs += `    <td>${result.data.aqi}</td>`;
    tabs += `    <td>${result.data.iaqi.pm25.v}μg/m^3</td>`;
    tabs += `  </tr>`;
    tabs += `</tbody>`;
    tabsRef.innerHTML = tabs;
  }
}
