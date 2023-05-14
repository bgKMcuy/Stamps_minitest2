//fungsi mengubah format date menjadi dd mmm yyyy
function formatDate(date) {
    //get date 
    var date1 = new Date(date);
    //get nama bulan dari date
    var month = new Date(date).toLocaleDateString('en-us', {month:"short"});
    //format date sesuai output yg diinginkan
    var str = date1.getDate() + " " + month + " " + date1.getFullYear();
    //mengembalikan nilai string format date
    return str;
}

function getWeather(url, index) {
    try {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            //get data waktu
            date = result.list[index].dt_txt;
            //menggunakan fungsi format waktu sesuai output
            date1 = formatDate(new Date(date));
            //mendapatkan nama hari/weekday
            day = new Date(date).toLocaleDateString('en-us', {weekday: "short"});

            //get suhu
            suhu = result.list[index].main.temp;

            //cetak nilai sesuai format output
            format = day + ", " + date1 + ": " + suhu + "℃";
            console.log(format)
        })
    } catch (err) {
        throw err;
    }
}

function mainCode() {
    console.log("Weather Forecast:");
    //arr data weather 5 days
    var index = [0, 8, 16, 24, 32, 39];

    //looping sebanyak arr
    for (let i = 0; i < index.length; i++) {
        getWeather("http://api.openweathermap.org/data/2.5/forecast?lat=-6.2146&lon=106.8451&appid=d755a1b66a557c7ce0642513ede31c4e&units=metric", index[i]);
    }
}

mainCode();
  