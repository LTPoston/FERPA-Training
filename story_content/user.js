function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5l9fLecqRZg":
        Script1();
        break;
      case "5phcBEOxhQP":
        Script2();
        break;
      case "6olrVC7zRD2":
        Script3();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2()
{
  window.print();
}

function Script3()
{
  window.print();
}

