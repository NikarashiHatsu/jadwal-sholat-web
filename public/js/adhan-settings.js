const adhan = require('adhan');

// Settingan jelas terpampang dibawah, lebih lengkap liat di
// https://github.com/batoulapps/adhan-js
var date = new Date();
//http://maps.google.com/maps?q=-5.15,+119.46666666667+(Makassar)&iwloc=A&hl=en&z=12&t=h
let coordinates = new adhan.Coordinates(5.15, 119.46666666667);
var params = adhan.CalculationMethod.MuslimWorldLeague();
params.madhab = adhan.Madhab.Shafi;
params.fajrAngle = 20;
params.ishaAngle = 18;
var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
var formattedTime = adhan.Date.formattedTime;

// common adzan time
var _subuh = formattedTime(prayerTimes.fajr, +7.9, '24h');
var _terbit = formattedTime(prayerTimes.sunrise, +8, '24h');
var _duhur = formattedTime(prayerTimes.dhuhr, +8, '24h');
var _ashar = formattedTime(prayerTimes.asr, +7.9, '24h');
var _maghrib = formattedTime(prayerTimes.maghrib, +8.1, '24h');
var _isya = formattedTime(prayerTimes.isha, +8.2, '24h');

// parse adzan
function parsePhaseAdzan(formattedTime) {
    var jam = formattedTime.substring(0, 2);
    var menit = formattedTime.substring(3);
    return (jam * 60) + parseInt(menit);
}
var subuh = parsePhaseAdzan(_subuh);
var terbit = parsePhaseAdzan(_terbit);
var duhur = parsePhaseAdzan(_duhur);
var ashar = parsePhaseAdzan(_ashar);
var maghrib = parsePhaseAdzan(_maghrib);
var isya = parsePhaseAdzan(_isya);